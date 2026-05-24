"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import type { PortfolioItem } from "@/data/portfolio";
import type { OEmbedResult } from "@/lib/tiktok-oembed";

interface Props {
  item: PortfolioItem;
  thumb: OEmbedResult | null;
  index: number;
}

function Initials({ name }: { name: string }) {
  const parts = name.trim().split(/\s+/);
  const letters =
    parts.length >= 2 ? parts[0][0] + parts[parts.length - 1][0] : parts[0].slice(0, 2);
  return (
    <span className="text-4xl font-bold text-white/60 uppercase select-none">
      {letters}
    </span>
  );
}

export function PortfolioCard({ item, thumb, index }: Props) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const isOdd = index % 2 !== 0;
  const yRange: [number, number] = prefersReduced
    ? [0, 0]
    : isOdd ? [60, -60] : [-60, 60];
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <motion.a
      ref={cardRef}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/8 bg-zinc-900 block"
      style={{ y }}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Thumbnail or fallback gradient */}
      {thumb ? (
        <img
          src={thumb.thumbnail_url}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
          <Initials name={item.creator} />
        </div>
      )}

      {/* Info overlay */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/60 to-transparent p-5 pt-16">
        <p className="text-xs font-medium uppercase tracking-wider text-[#CCFF00]">
          {item.category}
        </p>
        <h3 className="mt-1 text-base font-semibold text-white leading-snug line-clamp-2">
          {item.title}
        </h3>
        <p className="mt-0.5 text-xs text-zinc-400">{item.creator}</p>
        <p className="mt-1 text-xs text-zinc-500">{item.engagement}</p>
      </div>

      {/* Play button — scale-in on card hover */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="rounded-full bg-[#CCFF00] p-4 ring-1 ring-[#CCFF00]/40"
          variants={{
            rest: { scale: prefersReduced ? 1 : 0, opacity: prefersReduced ? 1 : 0 },
            hover: { scale: 1, opacity: 1 },
          }}
          transition={
            prefersReduced
              ? {}
              : { type: "spring", stiffness: 260, damping: 20, mass: 1 }
          }
        >
          <svg className="h-6 w-6 text-zinc-950" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </motion.div>
      </div>
    </motion.a>
  );
}
