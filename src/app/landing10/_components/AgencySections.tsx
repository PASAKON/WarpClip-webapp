import { SERVICES_DATA, PRICING_TIERS } from "@/data/portfolio";
import { LINE_OA_URL } from "@/lib/utils";
import type { OEmbedResult } from "@/lib/tiktok-oembed";
import type { PortfolioItem } from "@/data/portfolio";

type PortfolioProps = { items: Array<{ item: PortfolioItem; oembed: OEmbedResult | null }> };

/* Oversized numbered list — agency power statement */
export function Services() {
  return (
    <section className="border-t border-zinc-800 py-20 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-5xl sm:text-6xl font-black text-white leading-none">
            WHAT<br /><span className="text-[#CCFF00]">WE DO</span>
          </h2>
          <p className="text-zinc-500 text-sm max-w-xs">บริการครบวงจร ตัดต่อ Short-Form Video ระดับ Agency</p>
        </div>

        <div className="divide-y divide-zinc-800/50">
          {SERVICES_DATA.map((svc, i) => (
            <div key={svc.key} className="group relative flex gap-6 sm:gap-12 items-start py-8 sm:py-10 hover:pl-4 transition-all duration-300">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#CCFF00] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              <div className="shrink-0 w-20 sm:w-28">
                <span className="text-5xl sm:text-7xl font-black text-zinc-800 group-hover:text-[#CCFF00]/30 transition-colors leading-none tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex-1 pt-2 sm:pt-4 min-w-0">
                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#CCFF00] transition-colors uppercase tracking-tight mb-3">
                  {svc.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xl">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Masonry portfolio */
export function Portfolio({ items }: PortfolioProps) {
  return (
    <section className="border-t border-zinc-800 py-20 sm:py-32 bg-zinc-900/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-5xl sm:text-6xl font-black text-white leading-none">
            OUR<br /><span className="text-[#CCFF00]">WORK</span>
          </h2>
          <p className="text-zinc-500 text-sm max-w-xs">ผลงานจริง engagement จริง</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {items.map(({ item, oembed }, idx) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[#CCFF00]/50 transition-colors ${
                idx === 0 ? "col-span-2 row-span-2" : ""
              }`}
              style={{ aspectRatio: idx === 0 ? "1/1" : "9/16" }}
            >
              {oembed?.thumbnail_url ? (
                <img src={oembed.thumbnail_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-zinc-900">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-zinc-600 ml-0.5" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                <p className="text-[#CCFF00] text-[10px] font-black tracking-widest uppercase">{item.engagement}</p>
                <p className="text-white text-xs font-semibold mt-1 line-clamp-2">{item.title}</p>
                <p className="text-zinc-500 text-[10px] mt-0.5">{item.creator}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Feature matrix table */
export function Pricing() {
  const allFeatures = Array.from(new Set(PRICING_TIERS.flatMap((t) => [...t.features])));

  return (
    <section className="border-t border-zinc-800 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-5xl sm:text-6xl font-black text-white leading-none">
            PRICE<br /><span className="text-[#CCFF00]">MATRIX</span>
          </h2>
          <p className="text-zinc-500 text-sm max-w-xs">ราคาชัดเจน ไม่มีซ่อน</p>
        </div>

        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full min-w-[420px]">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left py-5 text-zinc-600 font-normal text-sm w-2/5" />
                {PRICING_TIERS.map((t) => (
                  <th key={t.name} className={`py-5 text-center font-black ${t.accent ? "text-[#CCFF00]" : "text-zinc-200"}`}>
                    <div className="text-sm uppercase tracking-tight">{t.name}</div>
                    <div className={`text-4xl font-black leading-tight ${t.accent ? "text-[#CCFF00]" : "text-white"}`}>
                      ฿{t.price}<span className="text-sm font-normal text-zinc-500 ml-1">{t.unit}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allFeatures.map((feat) => (
                <tr key={feat} className="border-b border-zinc-800/40 hover:bg-zinc-900/30 transition-colors">
                  <td className="py-4 text-zinc-400 text-sm">{feat}</td>
                  {PRICING_TIERS.map((t) => (
                    <td key={t.name} className="py-4 text-center">
                      {(t.features as readonly string[]).includes(feat) ? (
                        <span className={`text-base ${t.accent ? "text-[#CCFF00]" : "text-zinc-400"}`}>✓</span>
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

/* Bold agency CTA */
export function LineCTA() {
  return (
    <section className="border-t border-[#CCFF00]/30">
      <div className="relative overflow-hidden bg-zinc-950 py-24 sm:py-36 px-6">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
          <span className="text-[12vw] font-black text-zinc-900 leading-none whitespace-nowrap">WARPCLIP</span>
        </div>
        <div className="relative z-10 mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-10">
          <div>
            <p className="font-mono text-xs text-[#CCFF00] tracking-[0.3em] uppercase mb-4">Ready to start?</p>
            <h2 className="text-5xl sm:text-7xl font-black text-white leading-none">
              LET&apos;S<br /><span className="text-[#CCFF00]">CLIP.</span>
            </h2>
            <p className="mt-6 text-zinc-400 text-base">ส่งงาน 24–48 ชม. · คุณภาพ Agency · ราคา Creator</p>
          </div>
          <div className="shrink-0 text-center sm:text-right">
            <a href={LINE_OA_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#CCFF00] px-10 py-5 text-lg font-black text-zinc-950 hover:bg-[#b8e600] transition-colors tracking-wide">
              LINE OA →
            </a>
            <p className="mt-4 text-zinc-600 text-xs">ฟรี ไม่ผูกมัด ทีมตอบเร็ว</p>
          </div>
        </div>
      </div>
    </section>
  );
}
