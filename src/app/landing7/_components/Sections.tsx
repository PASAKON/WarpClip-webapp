import { SERVICES_DATA, PRICING_TIERS } from "@/data/portfolio";
import { LINE_OA_URL } from "@/lib/utils";
import type { OEmbedResult } from "@/lib/tiktok-oembed";
import type { PortfolioItem } from "@/data/portfolio";

/* Vertical numbered timeline */
export function Services() {
  return (
    <section className="py-28 px-6 border-t border-zinc-800">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs text-[#CCFF00] tracking-[0.3em] uppercase mb-2">Process</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16">
          เราทำ<span className="text-[#CCFF00]">อะไร</span>ให้คุณ
        </h2>
        <div className="relative">
          <div className="absolute left-8 top-12 bottom-12 w-px bg-gradient-to-b from-[#CCFF00]/60 via-[#CCFF00]/20 to-transparent" />
          <div className="space-y-0">
            {SERVICES_DATA.map((svc, i) => (
              <div key={svc.key} className="relative flex gap-8 pb-12 last:pb-0">
                <div className="relative z-10 shrink-0 w-16 h-16 rounded-full border-2 border-[#CCFF00]/40 bg-zinc-950 flex items-center justify-center">
                  <span className="font-mono text-xl font-bold text-[#CCFF00]">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="pt-3">
                  <h3 className="text-xl font-bold text-white mb-2">{svc.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-lg">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type PortfolioProps = { items: Array<{ item: PortfolioItem; oembed: OEmbedResult | null }> };

/* Paired rows: stat panel ↔ thumbnail */
export function Portfolio({ items }: PortfolioProps) {
  return (
    <section className="py-28 px-6 border-t border-zinc-800 bg-zinc-900/20">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs text-[#CCFF00] tracking-[0.3em] uppercase mb-2">Portfolio</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16">งานจริง ผลลัพธ์จริง</h2>
        <div className="space-y-4">
          {items.map(({ item, oembed }, i) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex gap-6 items-center rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 sm:p-6 hover:border-[#CCFF00]/30 transition-all ${i % 2 === 0 ? "" : "flex-row-reverse"}`}
            >
              <div className="shrink-0 w-36 sm:w-44 text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#CCFF00] leading-none">{item.engagement.split(" ")[0]}</p>
                <p className="text-xs text-zinc-500 mt-1">{item.engagement.split(" ").slice(1).join(" ")}</p>
                <p className="text-xs text-zinc-700 mt-2 font-mono">{item.category}</p>
              </div>
              <div className="hidden sm:block w-px h-20 bg-zinc-800 group-hover:bg-[#CCFF00]/20 transition-colors" />
              <div className="flex-1 min-w-0 flex gap-4 items-center">
                <div className="w-14 h-24 sm:w-18 sm:h-32 rounded-xl overflow-hidden bg-zinc-800 shrink-0 border border-zinc-700">
                  {oembed?.thumbnail_url ? (
                    <img src={oembed.thumbnail_url} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-zinc-600 ml-0.5" />
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm sm:text-base line-clamp-2">{item.title}</p>
                  <p className="text-zinc-500 text-xs mt-1">{item.creator}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Horizontal feature comparison table */
export function Pricing() {
  const allFeatures = Array.from(new Set(PRICING_TIERS.flatMap((t) => t.features)));
  return (
    <section className="py-28 px-6 border-t border-zinc-800">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs text-[#CCFF00] tracking-[0.3em] uppercase mb-2">Pricing</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16">เลือกแผนที่ใช่</h2>
        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full min-w-[480px]">
            <thead>
              <tr>
                <th className="text-left pb-6 text-zinc-600 font-normal text-sm w-1/3" />
                {PRICING_TIERS.map((t) => (
                  <th key={t.name} className={`pb-6 text-center ${t.accent ? "text-[#CCFF00]" : "text-zinc-300"} font-semibold`}>
                    <div className="text-sm">{t.name}</div>
                    <div className={`text-3xl font-bold mt-1 ${t.accent ? "text-[#CCFF00]" : "text-white"}`}>
                      ฿{t.price}<span className="text-xs font-normal text-zinc-600 ml-0.5">{t.unit}</span>
                    </div>
                    <div className="text-xs text-zinc-600 mt-1">{t.desc}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {allFeatures.map((feat) => (
                <tr key={feat}>
                  <td className="py-3.5 text-zinc-400 text-sm">{feat}</td>
                  {PRICING_TIERS.map((t) => (
                    <td key={t.name} className="py-3.5 text-center">
                      {(t.features as readonly string[]).includes(feat) ? (
                        <span className={t.accent ? "text-[#CCFF00]" : "text-zinc-400"}>✓</span>
                      ) : (
                        <span className="text-zinc-800">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* Centered luxury CTA */
export function LineCTA() {
  return (
    <section className="py-32 px-6 border-t border-zinc-800">
      <div className="mx-auto max-w-xl text-center">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-[#CCFF00]/60 mx-auto mb-10" />
        <h2 className="text-5xl sm:text-6xl font-bold text-white leading-none mb-6">
          เริ่ม<span className="text-[#CCFF00]">เลย</span>
        </h2>
        <p className="text-zinc-400 text-base mb-10 leading-relaxed">ไม่มีค่าใช้จ่ายเริ่มต้น · ทีมตอบเร็ว · ส่งงาน 24–48 ชม.</p>
        <a
          href={LINE_OA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full border border-[#CCFF00] px-8 py-4 text-base font-bold text-[#CCFF00] hover:bg-[#CCFF00] hover:text-zinc-950 transition-all duration-300"
        >
          ติดต่อผ่าน LINE OA
        </a>
        <div className="w-px h-16 bg-gradient-to-t from-transparent to-[#CCFF00]/20 mx-auto mt-10" />
      </div>
    </section>
  );
}
