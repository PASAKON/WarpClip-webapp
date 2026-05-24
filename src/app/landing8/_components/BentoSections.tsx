import { SERVICES_DATA, PRICING_TIERS } from "@/data/portfolio";
import { LINE_OA_URL } from "@/lib/utils";
import type { OEmbedResult } from "@/lib/tiktok-oembed";
import type { PortfolioItem } from "@/data/portfolio";

type PortfolioProps = { items: Array<{ item: PortfolioItem; oembed: OEmbedResult | null }> };

export function PageHero() {
  return (
    <div className="px-4 sm:px-6 pt-16 pb-6">
      <h1 className="text-5xl sm:text-7xl font-bold text-white leading-[0.95] tracking-tight">
        WarpClip<br />
        <span className="text-[#CCFF00]">Studio</span>
      </h1>
      <p className="mt-4 text-zinc-400 text-sm max-w-sm">
        บริการตัดต่อ Short-Form Video ครบวงจร ส่งงาน 24–48 ชม.
      </p>
    </div>
  );
}

export function BentoGrid({ items }: PortfolioProps) {
  return (
    <div className="px-4 sm:px-6 pb-16">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 auto-rows-[110px]">

        {/* Stat: delivery */}
        <div className="col-span-1 row-span-1 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col items-center justify-center p-3 text-center">
          <p className="text-2xl font-bold text-[#CCFF00]">24H</p>
          <p className="text-zinc-500 text-[11px] mt-1">delivery</p>
        </div>

        {/* Stat: clips */}
        <div className="col-span-1 row-span-1 rounded-2xl bg-[#CCFF00]/10 border border-[#CCFF00]/20 flex flex-col items-center justify-center p-3 text-center">
          <p className="text-2xl font-bold text-[#CCFF00]">200+</p>
          <p className="text-zinc-500 text-[11px] mt-1">clips edited</p>
        </div>

        {/* Service chips */}
        <div className="col-span-2 row-span-2 rounded-2xl bg-zinc-900 border border-zinc-800 p-4 overflow-hidden">
          <p className="text-[#CCFF00] font-mono text-[10px] tracking-widest uppercase mb-3">Services</p>
          <div className="flex flex-wrap gap-2">
            {SERVICES_DATA.map((s) => (
              <span key={s.key} className="rounded-full border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-[11px] text-zinc-300 hover:border-[#CCFF00]/40 hover:text-white transition-colors cursor-default">
                {s.title}
              </span>
            ))}
          </div>
        </div>

        {/* Engagement */}
        <div className="col-span-2 row-span-1 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-between px-4">
          <div>
            <p className="text-2xl font-bold text-white">36.5K</p>
            <p className="text-zinc-600 text-[11px]">max engagement</p>
          </div>
          <div className="w-12 h-8 flex items-end gap-0.5">
            {[30,50,40,70,90,80,100].map((h,i) => (
              <div key={i} className="flex-1 bg-[#CCFF00]/50 rounded-t" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        {/* Portfolio thumbnails — first 3 */}
        {items.slice(0, 3).map(({ item, oembed }) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1 row-span-2 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-[#CCFF00]/40 transition-colors group relative"
          >
            {oembed?.thumbnail_url ? (
              <img src={oembed.thumbnail_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-zinc-600 ml-0.5" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2">
              <p className="text-white text-[11px] font-medium line-clamp-2">{item.title}</p>
              <p className="text-[#CCFF00] text-[10px] mt-0.5">{item.engagement}</p>
            </div>
          </a>
        ))}

        {/* Pricing Basic */}
        <div className="col-span-1 sm:col-span-2 row-span-2 rounded-2xl bg-zinc-900 border border-zinc-800 p-4 flex flex-col">
          <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider mb-1">Basic</p>
          <p className="text-2xl font-bold text-white">฿990<span className="text-xs text-zinc-600 font-normal">/คลิป</span></p>
          <ul className="mt-3 space-y-1.5 flex-1">
            {PRICING_TIERS[0].features.map((f) => (
              <li key={f} className="text-zinc-400 text-[11px] flex items-start gap-1.5">
                <span className="text-[#CCFF00] mt-0.5 shrink-0">✓</span>{f}
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing Pro */}
        <div className="col-span-1 sm:col-span-2 row-span-2 rounded-2xl bg-[#CCFF00] p-4 flex flex-col">
          <p className="text-zinc-800 text-[10px] font-mono uppercase tracking-wider mb-1">Pro</p>
          <p className="text-2xl font-bold text-zinc-950">฿1,990<span className="text-xs text-zinc-700 font-normal">/คลิป</span></p>
          <ul className="mt-3 space-y-1.5 flex-1">
            {PRICING_TIERS[1].features.map((f) => (
              <li key={f} className="text-zinc-800 text-[11px] flex items-start gap-1.5">
                <span className="text-zinc-700 mt-0.5 shrink-0">✓</span>{f}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="col-span-2 row-span-2 rounded-2xl border border-zinc-700 bg-zinc-950 flex flex-col items-center justify-center gap-3 p-4 text-center">
          <p className="text-zinc-400 text-sm font-medium">พร้อมเริ่ม?</p>
          <a
            href={LINE_OA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#CCFF00] px-5 py-2.5 text-sm font-bold text-zinc-950 hover:bg-[#b8e600] transition-colors w-full text-center"
          >
            ติดต่อ LINE OA
          </a>
          <p className="text-zinc-700 text-xs">ฟรี ไม่ผูกมัด</p>
        </div>

        {/* Extra clips */}
        {items.slice(3).map(({ item, oembed }) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1 row-span-2 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-[#CCFF00]/40 transition-colors group relative"
          >
            {oembed?.thumbnail_url ? (
              <img src={oembed.thumbnail_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-zinc-600 ml-0.5" />
              </div>
            )}
          </a>
        ))}

        {/* Premium */}
        <div className="col-span-2 row-span-1 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-between px-4">
          <div>
            <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider">Premium</p>
            <p className="text-lg font-bold text-white">ติดต่อราคา</p>
          </div>
          <span className="text-[#CCFF00] text-xs">Custom + Bulk →</span>
        </div>

        {/* Tagline */}
        <div className="col-span-2 row-span-1 rounded-2xl border border-[#CCFF00]/20 bg-[#CCFF00]/5 flex items-center px-4">
          <p className="text-[#CCFF00] text-sm font-semibold">"เร็วกว่า คมกว่า ดังกว่า"</p>
        </div>
      </div>
    </div>
  );
}
