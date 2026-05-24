import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import { fetchOEmbed } from "@/lib/tiktok-oembed";
import { PortfolioCard } from "./PortfolioCard";
import { PortfolioHeading } from "./PortfolioHeading";

export async function Portfolio() {
  const oembed = await Promise.all(
    PORTFOLIO_ITEMS.map((item) => fetchOEmbed(item.url)),
  );

  return (
    <section id="portfolio" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <PortfolioHeading />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <PortfolioCard
              key={item.url}
              item={item}
              thumb={oembed[i]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
