import { SERVICES_DATA, PRICING_TIERS } from "@/data/portfolio";
import { LINE_OA_URL } from "@/lib/utils";
import type { OEmbedResult } from "@/lib/tiktok-oembed";
import type { PortfolioItem } from "@/data/portfolio";

/* Vercel-style sticky sidebar layout */
export function Services() {
  return (
    <section className="relative border-t border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-16">
          <div className="mb-12 lg:mb-0">
            <div className="lg:sticky lg:top-24">
              <span className="text-xs font-mono text-[#CCFF00] tracking-[0.3em] uppercase">Services</span>
              <h2 className="mt-4 text-3xl font-bold text-white leading-tight">ทุกอย่างที่คลิปต้องการ</h2>
              <p className="mt-4 text-zinc-500 text-sm leading-relaxed">ครบในทีมเดียว ไม่ต้องตามหาหลายคน</p>
            </div>
          </div>
          <div className="divide-y divide-zinc-800/50">
            {SERVICES_DATA.map((svc, i) => (
              <div key={svc.key} className="py-8 flex gap-6 group hover:bg-zinc-900/30 px-4 -mx-4 rounded-xl transition-colors">
                <span className="text-zinc-700 font-mono text-sm w-6 shrink-0 pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#CCFF00] transition-colors">{svc.title}</h3>
                  <p className="mt-2 text-zinc-400 text-sm leading-relaxed">{svc.desc}</p>
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

/* Horizontal film-strip scroll */
export function Portfolio({ items }: PortfolioProps) {
  return (
    <section className="border-t border-zinc-800 py-24">
      <div className="mx-auto max-w-6xl px-6 mb-10">
        <span className="text-xs font-mono text-[#CCFF00] tracking-[0.3em] uppercase">Portfolio</span>
        <h2 className="mt-4 text-3xl font-bold text-white">งานที่ผ่านมา</h2>
      </div>
      <div
        className="flex gap-4 overflow-x-auto px-6 pb-6 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {items.map(({ item, oembed }) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="snap-start shrink-0 w-[200px] sm:w-[220px] group"
          >
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 group-hover:border-[#CCFF00]/40 transition-colors">
              {oembed?.thumbnail_url ? (
                <img src={oembed.thumbnail_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[12px] border-l-zinc-600 ml-0.5" />
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                <span className="text-[#CCFF00] text-[10px] font-mono">{item.engagement}</span>
                <span className="text-white text-xs font-medium line-clamp-2 mt-1">{item.title}</span>
              </div>
              <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-zinc-950/60 border border-zinc-700/50" />
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-zinc-950/60 border border-zinc-700/50" />
            </div>
            <p className="mt-3 text-white text-xs font-medium line-clamp-1 px-1">{item.title}</p>
            <p className="text-zinc-600 text-xs mt-0.5 px-1">{item.creator}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

/* 3-card pricing */
export function Pricing() {
  return (
    <section className="border-t border-zinc-800 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <span className="text-xs font-mono text-[#CCFF00] tracking-[0.3em] uppercase">Pricing</span>
        <h2 className="mt-4 text-3xl font-bold text-white">ราคาชัดเจน ไม่มีบวก</h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-6 border transition-all ${
                tier.accent
                  ? "bg-[#CCFF00] border-[#CCFF00] text-zinc-950"
                  : "bg-zinc-900 border-zinc-800 text-white hover:border-zinc-600"
              }`}
            >
              <div className="flex items-baseline justify-between mb-4">
                <span className={`text-sm font-semibold ${tier.accent ? "text-zinc-900" : "text-zinc-300"}`}>{tier.name}</span>
                <span className={`text-xs ${tier.accent ? "text-zinc-700" : "text-zinc-600"}`}>{tier.desc}</span>
              </div>
              <div className="mb-6">
                <span className={`text-4xl font-bold ${tier.accent ? "text-zinc-950" : "text-white"}`}>฿{tier.price}</span>
                <span className={`text-sm ${tier.accent ? "text-zinc-700" : "text-zinc-500"}`}>{tier.unit}</span>
              </div>
              <ul className="space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className={`mt-0.5 ${tier.accent ? "text-zinc-700" : "text-[#CCFF00]"}`}>✓</span>
                    <span className={tier.accent ? "text-zinc-800" : "text-zinc-400"}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Full-width lime CTA band */
export function LineCTA() {
  return (
    <section className="bg-[#CCFF00] py-20 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-zinc-950 text-xs font-mono tracking-[0.3em] uppercase mb-4">เริ่มต้น</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-950 leading-tight">พร้อมให้คลิปคุณ<br />เปลี่ยนรูปแบบ?</h2>
        <p className="mt-6 text-zinc-700 text-base">คุยฟรี ไม่มีค่าใช้จ่าย ส่งงานภายใน 24–48 ชม.</p>
        <a
          href={LINE_OA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-zinc-950 px-8 py-4 text-base font-bold text-[#CCFF00] hover:bg-zinc-900 transition-colors"
        >
          ติดต่อผ่าน LINE OA
        </a>
        <p className="mt-4 text-zinc-700 text-xs">ทีมตอบเร็ว · ไม่มีค่าใช้จ่ายเริ่มต้น</p>
      </div>
    </section>
  );
}

