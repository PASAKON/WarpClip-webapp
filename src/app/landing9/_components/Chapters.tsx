import { SERVICES_DATA, PRICING_TIERS } from "@/data/portfolio";
import { LINE_OA_URL } from "@/lib/utils";
import type { OEmbedResult } from "@/lib/tiktok-oembed";
import type { PortfolioItem } from "@/data/portfolio";

type PortfolioProps = { items: Array<{ item: PortfolioItem; oembed: OEmbedResult | null }> };

/* Chapter 2 — full-viewport services with giant bg number */
export function Services() {
  return (
    <section className="min-h-screen flex items-center justify-center border-t border-zinc-800 relative overflow-hidden py-20">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20vw] font-black text-zinc-900/40 leading-none">02</span>
      </div>
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="font-mono text-xs text-[#CCFF00] tracking-[0.3em] uppercase">Chapter 02 — Services</span>
          <h2 className="mt-4 text-5xl sm:text-6xl font-bold text-white">
            ครบ ทุกสิ่ง<br /><span className="text-[#CCFF00]">ที่คลิปต้องการ</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES_DATA.map((svc, i) => (
            <div key={svc.key} className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 hover:border-[#CCFF00]/30 transition-colors">
              <span className="font-mono text-sm text-[#CCFF00] block mb-4">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-white font-bold text-lg mb-2">{svc.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Chapter 3 — portfolio */
export function Portfolio({ items }: PortfolioProps) {
  return (
    <section className="min-h-screen flex items-center justify-center border-t border-zinc-800 bg-zinc-900/20 relative overflow-hidden py-20">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20vw] font-black text-zinc-900/40 leading-none">03</span>
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="font-mono text-xs text-[#CCFF00] tracking-[0.3em] uppercase">Chapter 03 — Portfolio</span>
          <h2 className="mt-4 text-5xl sm:text-6xl font-bold text-white">
            ผลงาน<span className="text-[#CCFF00]">ที่พูด</span>แทนเรา
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {items.map(({ item, oembed }) => (
            <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer" className="group relative">
              <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 group-hover:border-[#CCFF00]/40 transition-colors">
                {oembed?.thumbnail_url ? (
                  <img src={oembed.thumbnail_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[12px] border-l-zinc-600 ml-0.5" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                  <p className="text-[#CCFF00] text-[10px] font-mono">{item.engagement}</p>
                  <p className="text-white text-xs mt-1 line-clamp-2">{item.title}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Chapter 4 — pricing */
export function Pricing() {
  return (
    <section className="min-h-screen flex items-center justify-center border-t border-zinc-800 relative overflow-hidden py-20">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20vw] font-black text-zinc-900/40 leading-none">04</span>
      </div>
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="font-mono text-xs text-[#CCFF00] tracking-[0.3em] uppercase">Chapter 04 — Pricing</span>
          <h2 className="mt-4 text-5xl sm:text-6xl font-bold text-white">
            เลือก<span className="text-[#CCFF00]">แผน</span>ที่ใช่
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PRICING_TIERS.map((tier) => (
            <div key={tier.name} className={`rounded-3xl p-7 border ${tier.accent ? "bg-[#CCFF00] border-[#CCFF00]" : "bg-zinc-900/80 border-zinc-800"}`}>
              <p className={`text-sm font-semibold mb-1 ${tier.accent ? "text-zinc-800" : "text-zinc-400"}`}>{tier.name}</p>
              <p className={`text-4xl font-bold mb-1 ${tier.accent ? "text-zinc-950" : "text-white"}`}>฿{tier.price}</p>
              <p className={`text-sm mb-6 ${tier.accent ? "text-zinc-700" : "text-zinc-500"}`}>{tier.unit} · {tier.desc}</p>
              <ul className="space-y-2.5">
                {tier.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${tier.accent ? "text-zinc-800" : "text-zinc-400"}`}>
                    <span className={`mt-0.5 shrink-0 ${tier.accent ? "text-zinc-700" : "text-[#CCFF00]"}`}>✓</span>{f}
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

/* Chapter 5 — CTA */
export function LineCTA() {
  return (
    <section className="min-h-screen flex items-center justify-center border-t border-zinc-800 bg-[#CCFF00] relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20vw] font-black text-[#b8e600]/40 leading-none">05</span>
      </div>
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <span className="font-mono text-xs text-zinc-700 tracking-[0.3em] uppercase">Chapter 05 — Start Now</span>
        <h2 className="mt-6 text-6xl sm:text-8xl font-bold text-zinc-950 leading-none">เริ่ม<br />เลย</h2>
        <p className="mt-8 text-zinc-700 text-base sm:text-lg">ไม่มีค่าใช้จ่ายเริ่มต้น · ทีมตอบเร็ว · ส่งงาน 24–48 ชม.</p>
        <a href={LINE_OA_URL} target="_blank" rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-zinc-950 px-10 py-5 text-lg font-bold text-[#CCFF00] hover:bg-zinc-900 transition-colors">
          ติดต่อผ่าน LINE OA
        </a>
      </div>
    </section>
  );
}
