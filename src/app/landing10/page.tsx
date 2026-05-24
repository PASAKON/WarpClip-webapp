/*
 * LANDING 10 — Production Mix (Diagonal Hero + Landing 6 Sections)
 *
 * Thesis: Best-of-breed composition. The diagonal clip-path hero from variant 10
 * uses the production site's exact headline copy ("ตัดต่อ Short-Form Video เร็วระดับ
 * Warp Speed") with the lime scaleX marker animation, stat row, and dual CTAs —
 * making the before/after split feel like a premium product reveal, not just a demo.
 * Below the hero, landing 6's proven section structure takes over: Vercel-style sticky
 * sidebar for services, horizontal film-strip portfolio, 3-card pricing grid, and
 * a bold full-width lime CTA band. This is the "if we shipped one" version.
 *
 * Brand tokens: lime #CCFF00 · zinc-950 base · Geist Sans
 * Bone structure: diagonal clip-path hero (production copy + stats) → sticky-sidebar services → film-strip portfolio → 3-col pricing → lime CTA
 */

import type { Metadata } from "next";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import { fetchOEmbed } from "@/lib/tiktok-oembed";
import { AgencyHero, VariantChip } from "./_components/AgencyHero";
import { Services, Portfolio, Pricing, LineCTA } from "../landing6/_components/Sections";

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
