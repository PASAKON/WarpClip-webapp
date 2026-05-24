/*
 * LANDING 7 — Transformation Journey (Timeline Story)
 *
 * Thesis: Sell the transformation, not the service. The split-screen hero makes the
 * before/after contrast visceral — dragging the divider is kinesthetic proof that
 * editing matters. Services are rendered as a numbered process timeline with a connecting
 * vertical line — this is not a feature list, it's a process narrative. Portfolio shows
 * real engagement stats side-by-side with thumbnails, alternating left/right to create
 * visual rhythm. Pricing becomes a feature comparison matrix — precise, honest, trust-building.
 *
 * Brand tokens: lime #CCFF00 accent · zinc-950 base · Geist Sans
 * Bone structure: drag-split hero → vertical timeline services → alternating stat+thumb rows → comparison table → centered CTA
 */

import type { Metadata } from "next";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import { fetchOEmbed } from "@/lib/tiktok-oembed";
import { BeforeAfterHero, VariantChip } from "./_components/Hero";
import { Services, Portfolio, Pricing, LineCTA } from "./_components/Sections";

export const metadata: Metadata = {
  title: "WarpClip — Variant 7",
  robots: { index: false, follow: false },
};

export default async function Landing7() {
  const items = await Promise.all(
    PORTFOLIO_ITEMS.map(async (item) => ({ item, oembed: await fetchOEmbed(item.url) }))
  );

  return (
    <div className="bg-zinc-950 min-h-screen">
      <VariantChip />
      <BeforeAfterHero />
      <Services />
      <Portfolio items={items} />
      <Pricing />
      <LineCTA />
    </div>
  );
}
