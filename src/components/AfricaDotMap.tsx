"use client";

import { useEffect, useRef } from "react";
import {
  ACCRA,
  DOTS,
  GHANA_INDEX,
  MAP_HEIGHT,
  MAP_WIDTH,
} from "@/lib/africa-map";

// Canvas cannot read Tailwind classes, so the two brand colours live here.
// Keep them in step with --color-accent and --color-gold in globals.css.
const GREEN = "#0b6b4f";
const GOLD = "#c8932b";

const REVEAL_MS = 1900;
const BASE_RADIUS = 2.3; // in map units
const INFLUENCE_SIGMA = 40; // cursor reach, in map units

// Distance of every dot from Accra, so the reveal can radiate outward.
const FROM_ACCRA = DOTS.map(([x, y]) => Math.hypot(x - ACCRA.x, y - ACCRA.y));
const FARTHEST = Math.max(...FROM_ACCRA);

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

export default function AfricaDotMap({ className = "" }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let scale = 1;
    let raf = 0;
    let startedAt = 0;
    let revealed = reduceMotion;
    const pointer = { x: -1000, y: -1000, strength: 0, target: 0 };

    const draw = (now: number) => {
      raf = 0;
      if (!startedAt) startedAt = now;

      const progress = revealed
        ? 1
        : Math.min((now - startedAt) / REVEAL_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      pointer.strength += (pointer.target - pointer.strength) * 0.14;
      if (pointer.target === 0 && pointer.strength < 0.01) pointer.strength = 0;

      ctx.clearRect(0, 0, MAP_WIDTH, MAP_HEIGHT);
      const reach = 2 * INFLUENCE_SIGMA * INFLUENCE_SIGMA;

      // Two passes so the fill colour is set twice per frame, not per dot.
      for (const ghanaPass of [false, true]) {
        ctx.fillStyle = ghanaPass ? GOLD : GREEN;
        for (let i = 0; i < DOTS.length; i++) {
          const [x, y, country] = DOTS[i];
          if ((country === GHANA_INDEX) !== ghanaPass) continue;

          const appear = revealed
            ? 1
            : clamp((eased * 1.3 - FROM_ACCRA[i] / FARTHEST) / 0.3, 0, 1);
          if (appear <= 0) continue;

          let boost = 0;
          if (pointer.strength > 0) {
            const dx = x - pointer.x;
            const dy = y - pointer.y;
            boost = Math.exp(-(dx * dx + dy * dy) / reach) * pointer.strength;
          }

          const radius =
            BASE_RADIUS *
            (ghanaPass ? 1.45 : 1) *
            (1 + boost * 1.1) *
            (0.4 + 0.6 * appear);
          ctx.globalAlpha = Math.min(
            ((ghanaPass ? 0.95 : 0.3) + boost * 0.55) * appear,
            1
          );
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      if (progress >= 1) revealed = true;

      const pointerBusy =
        pointer.target === 1 || pointer.strength > 0;
      if (!revealed || pointerBusy) request();
    };

    const request = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      if (rect.width === 0) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      scale = rect.width / MAP_WIDTH;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      ctx.setTransform(dpr * scale, 0, 0, dpr * scale, 0, 0);
      request();
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const rect = wrap.getBoundingClientRect();
      pointer.x = (e.clientX - rect.left) / scale;
      pointer.y = (e.clientY - rect.top) / scale;
      pointer.target = 1;
      request();
    };

    const onLeave = () => {
      pointer.target = 0;
      request();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(wrap);
    if (!reduceMotion) {
      wrap.addEventListener("pointermove", onMove);
      wrap.addEventListener("pointerleave", onLeave);
    }
    resize();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      observer.disconnect();
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      role="img"
      aria-label="Map of Africa made of dots, with Ghana highlighted and Accra marked"
      className={`relative aspect-[800/983] ${className}`}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      />
      <div
        className="pointer-events-none absolute"
        style={{
          left: `${(ACCRA.x / MAP_WIDTH) * 100}%`,
          top: `${(ACCRA.y / MAP_HEIGHT) * 100}%`,
        }}
      >
        <span className="absolute -top-1.5 -left-1.5 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-gold ring-2 ring-canvas" />
        </span>
        <span className="absolute top-0 left-4 -translate-y-1/2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium whitespace-nowrap text-ink shadow-[0_6px_18px_-8px_rgba(14,26,20,0.3)]">
          Accra
        </span>
      </div>
    </div>
  );
}