/*
 * LANDING 8 — Command Bento (Mosaic Dashboard)
 *
 * Thesis: Not a landing page — a command center. Every piece of information
 * (services, portfolio, pricing, stats, CTA) lives as a "widget" in a single
 * CSS bento grid mosaic. No traditional vertical sections. The page feels like
 * an agency dashboard: information-dense, scannable in any order, visually rich.
 * The before/after hero is a compact bento cell the visitor drags — proving
 * transformation without requiring full-screen real estate.
 *
 * Brand tokens: lime #CCFF00 accent · zinc-950 base · Geist Sans
 * Bone structure: headline → bento grid hero bar → mosaic of stat/service/portfolio/pricing/CTA widgets
 */

import type { Metadata } from "next";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import { fetchOEmbed } from "@/lib/tiktok-oembed";
import { BentoSplitHero, VariantChip } from "./_components/BentoHero";
import { PageHero, BentoGrid } from "./_components/BentoSections";

export const metadata: Metadata = {
  title: "WarpClip — Variant 8",
  robots: { index: false, follow: false },
};

export default async function Landing8() {
  const items = await Promise.all(
    PORTFOLIO_ITEMS.map(async (item) => ({ item, oembed: await fetchOEmbed(item.url) }))
  );

  return (
    <div className="bg-zinc-950 min-h-screen">
      <VariantChip />
      <PageHero />
      <div className="px-4 sm:px-6 pb-3">
        <div className="h-[260px] sm:h-[320px] rounded-3xl overflow-hidden border border-zinc-800">
          <BentoSplitHero />
        </div>
      </div>
      <BentoGrid items={items} />
    </div>
  );
}
