"use client";

import { useState } from "react";
import {
  ACCRA,
  COUNTRIES,
  MAP_HEIGHT,
  MAP_WIDTH,
  REGION_BORDERS,
  type RegionId,
} from "@/lib/africa-map";

type StageId = "ghana" | "west" | "africa" | "world";

const STAGE_OF: Record<RegionId, StageId> = {
  ghana: "ghana",
  west: "west",
  north: "africa",
  east: "africa",
  central: "africa",
  southern: "africa",
};

const REGION_LABEL: Record<RegionId, string> = {
  ghana: "Ghana",
  west: "West Africa",
  north: "North Africa",
  east: "East Africa",
  central: "Central Africa",
  southern: "Southern Africa",
};

const STAGES: ReadonlyArray<{
  id: StageId;
  title: string;
  status: string;
  note: string;
  swatch: string;
}> = [
  {
    id: "ghana",
    title: "Ghana",
    status: "Live now",
    note: "Every system we have shipped runs here.",
    swatch: "bg-accent",
  },
  {
    id: "west",
    title: "West Africa",
    status: "Next",
    note: "Our neighbours, from Senegal to Nigeria.",
    swatch: "bg-accent/30",
  },
  {
    id: "africa",
    title: "The rest of Africa",
    status: "After that",
    note: "North, East, Central and Southern Africa.",
    swatch: "bg-gold/45",
  },
  {
    id: "world",
    title: "Worldwide",
    status: "The long game",
    note: "Wherever the same problems exist.",
    swatch: "border border-line-strong bg-transparent",
  },
];

const STATUS_OF: Record<StageId, string> = Object.fromEntries(
  STAGES.map((s) => [s.id, s.status])
) as Record<StageId, string>;

const TITLE_OF: Record<StageId, string> = Object.fromEntries(
  STAGES.map((s) => [s.id, s.title])
) as Record<StageId, string>;

// Paint order: quiet regions first so Ghana and its border sit on top.
const rank: Record<StageId, number> = { africa: 0, west: 1, ghana: 2, world: 3 };
const countries = COUNTRIES.map((c) => ({ ...c, stage: STAGE_OF[c.region] }));
const painted = [...countries].sort((a, b) => rank[a.stage] - rank[b.stage]);

type Highlight = { stage: StageId | null; region: RegionId | null };
const NONE: Highlight = { stage: null, region: null };

const fillFor = (stage: StageId, active: boolean, world: boolean) => {
  if (world) return stage === "ghana" ? "fill-accent" : "fill-accent/25";
  if (stage === "ghana") return active ? "fill-accent-deep" : "fill-accent";
  if (stage === "west") return active ? "fill-gold" : "fill-accent/30";
  return active ? "fill-gold/45" : "fill-ink/10";
};

export default function ExpansionSection() {
  const [hl, setHl] = useState<Highlight>(NONE);

  const world = hl.stage === "world" && hl.region === null;

  const isActive = (region: RegionId) => {
    if (hl.region) return region === hl.region;
    if (hl.stage) return STAGE_OF[region] === hl.stage;
    return false;
  };

  let readout = "Explore the map or pick a stage.";
  if (hl.region) {
    readout = `${REGION_LABEL[hl.region]}: ${STATUS_OF[STAGE_OF[hl.region]]}`;
  } else if (hl.stage) {
    readout = `${TITLE_OF[hl.stage]}: ${STATUS_OF[hl.stage]}`;
  }

  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:px-10 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
        <div className="order-2 lg:order-1">
          <svg
            viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
            role="img"
            aria-label="Map of Africa in regions. Ghana is live, West Africa is next, then the rest of Africa."
            className="mx-auto h-auto w-full max-w-[440px]"
          >
            {painted.map((country) => (
              <path
                key={country.id}
                d={country.d}
                strokeWidth={0.8}
                onPointerEnter={() =>
                  setHl({ stage: country.stage, region: country.region })
                }
                onPointerLeave={() => setHl(NONE)}
                className={`${fillFor(
                  country.stage,
                  isActive(country.region),
                  world
                )} stroke-canvas transition-[fill] duration-300`}
              />
            ))}
            <path
              d={REGION_BORDERS}
              fill="none"
              strokeWidth={1.4}
              strokeLinejoin="round"
              className="pointer-events-none stroke-ink/40"
            />
            <circle
              cx={ACCRA.x}
              cy={ACCRA.y}
              r={4.5}
              strokeWidth={1.5}
              className="pointer-events-none fill-gold stroke-canvas"
            />
          </svg>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">
            Ghana first. Then West Africa. Then the world.
          </h2>
          <p className="mt-4 max-w-md text-ink-muted">
            Our systems are live in Ghana today. We grow outward in stages,
            one region at a time.
          </p>

          <ol className="mt-10 divide-y divide-line border-y border-line">
            {STAGES.map((stage) => (
              <li key={stage.id}>
                <button
                  type="button"
                  onMouseEnter={() => setHl({ stage: stage.id, region: null })}
                  onMouseLeave={() => setHl(NONE)}
                  onFocus={() => setHl({ stage: stage.id, region: null })}
                  onBlur={() => setHl(NONE)}
                  className="grid w-full grid-cols-[1.25rem_1fr_auto] items-start gap-x-4 px-2 py-5 text-left transition-colors hover:bg-surface focus-visible:bg-surface focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
                >
                  <span
                    className={`mt-1 h-3.5 w-3.5 rounded-sm ${stage.swatch}`}
                  />
                  <span>
                    <span className="block font-display text-lg font-medium">
                      {stage.title}
                    </span>
                    <span className="mt-1 block text-sm text-ink-muted">
                      {stage.note}
                    </span>
                  </span>
                  <span className="pt-1 text-sm text-ink-muted">
                    {stage.status}
                  </span>
                </button>
              </li>
            ))}
          </ol>

          <p
            aria-live="polite"
            className="mt-6 min-h-6 text-sm text-ink-muted"
          >
            {readout}
          </p>
        </div>
      </div>
    </section>
  );
}