/*
 * LANDING 6 — Velocity Showcase (Sticky Sidebar + Film Strip)
 *
 * Thesis: Speed is the product. The hero uses a drag-reveal before/after split so
 * visitors literally feel the transformation under their cursor — not told about it.
 * Below, a Vercel-style sticky sidebar separates section labels from scrolling content,
 * creating a reading rhythm that feels like high-quality product documentation.
 * Portfolio lives as a horizontal film strip — each clip a frame on a reel — reinforcing
 * the "editing" metaphor at every scroll step.
 *
 * Brand tokens: lime #CCFF00 accent · zinc-950 base · Geist Sans
 * Bone structure: interactive split hero → sticky-sidebar services → horizontal portfolio → 3-col pricing → lime CTA band
 */

import type { Metadata } from "next";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import { fetchOEmbed } from "@/lib/tiktok-oembed";
import { BeforeAfterHero, VariantChip } from "./_components/BeforeAfterHero";
import { Services, Portfolio, Pricing, LineCTA } from "./_components/Sections";

export const metadata: Metadata = {
  title: "WarpClip — Variant 6",
  robots: { index: false, follow: false },
};

export default async function Landing6() {
  const items = await Promise.all(
    PORTFOLIO_ITEMS.map(async (item) => ({
      item,
      oembed: await fetchOEmbed(item.url),
    }))
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
