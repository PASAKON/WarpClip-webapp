import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import { fetchOEmbed } from "@/lib/tiktok-oembed";

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

export async function Portfolio() {
  const oembed = await Promise.all(
    PORTFOLIO_ITEMS.map((item) => fetchOEmbed(item.url)),
  );

  return (
    <section id="portfolio" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
            Portfolio
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ผลงานที่เราภูมิใจ
          </h2>
          <p className="mt-4 text-zinc-400">
            คลิปจริงจากลูกค้าจริง (ดูเต็มทาง LINE — เราส่ง portfolio PDF + sample วิดีโอให้).
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_ITEMS.map((item, i) => {
            const thumb = oembed[i];
            return (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/8 bg-zinc-900 block"
              >
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

                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-200 group-hover:opacity-100">
                  <div className="rounded-full bg-[#CCFF00] p-4 ring-1 ring-[#CCFF00]/40">
                    <svg className="h-6 w-6 text-zinc-950" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
