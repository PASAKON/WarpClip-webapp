/*
 * LANDING 9 — Cinematic Chapters (Scroll-Pinned Story)
 *
 * Thesis: The page is a film. Each section is a full-screen "chapter" with a giant
 * background number — 01 through 05 — signaling progression. The hero uses CSS sticky
 * positioning to pin the before/after split while a content layer scrolls above it,
 * making the transformation backdrop feel alive throughout the opening. Services,
 * portfolio, and pricing each get their own cinematic full-viewport chapter with
 * breathing room and a dramatic chapter number acting as negative space.
 *
 * Brand tokens: lime #CCFF00 accent · zinc-950 base · Geist Sans
 * Bone structure: pinned split hero (180vh scroll zone) → full-viewport services chapter → portfolio chapter → pricing chapter → lime CTA chapter
 */

import type { Metadata } from "next";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import { fetchOEmbed } from "@/lib/tiktok-oembed";
import { CinematicHero, VariantChip } from "./_components/CinematicHero";
import { Services, Portfolio, Pricing, LineCTA } from "./_components/Chapters";

export const metadata: Metadata = {
  title: "WarpClip — Variant 9",
  robots: { index: false, follow: false },
};

export default async function Landing9() {
  const items = await Promise.all(
    PORTFOLIO_ITEMS.map(async (item) => ({ item, oembed: await fetchOEmbed(item.url) }))
  );

  return (
    <div className="bg-zinc-950">
      <VariantChip />
      <CinematicHero />
      <Services />
      <Portfolio items={items} />
      <Pricing />
      <LineCTA />
    </div>
  );
}
