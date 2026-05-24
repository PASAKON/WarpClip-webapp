/*
 * LANDING 10 — Agency Diagonal (Power Statement)
 *
 * Thesis: Raw confidence through diagonal geometry. The hero splits via CSS clip-path
 * on a slanted diagonal — lime zone left (before) / dark zone right (after) — making
 * the transformation feel bold and architectural, not just a slider. Services are
 * presented as an oversized numbered list with left-border hover reveals — agency
 * studios list capabilities this way: sparse, declarative, powerful. Portfolio uses a
 * masonry-style grid with hover-reveal overlays. Pricing is a clean feature matrix table.
 * The CTA section uses a background WARPCLIP watermark for brand confidence.
 *
 * Brand tokens: lime #CCFF00 · zinc-950 base · Geist Sans · uppercase tracking
 * Bone structure: diagonal clip-path hero → oversized numbered service list → masonry portfolio → feature matrix pricing → bold CTA
 */

import type { Metadata } from "next";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import { fetchOEmbed } from "@/lib/tiktok-oembed";
import { AgencyHero, VariantChip } from "./_components/AgencyHero";
import { Services, Portfolio, Pricing, LineCTA } from "./_components/AgencySections";

export const metadata: Metadata = {
  title: "WarpClip — Variant 10",
  robots: { index: false, follow: false },
};

export default async function Landing10() {
  const items = await Promise.all(
    PORTFOLIO_ITEMS.map(async (item) => ({ item, oembed: await fetchOEmbed(item.url) }))
  );

  return (
    <div className="bg-zinc-950 min-h-screen">
      <VariantChip />
      <AgencyHero />
      <Services />
      <Portfolio items={items} />
      <Pricing />
      <LineCTA />
    </div>
  );
}
