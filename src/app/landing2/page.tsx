/*
 * LANDING 2 — Magazine / Editorial Grid
 *
 * Thesis: Asymmetric print-magazine layout. Content arranged in unequal
 * columns with a strong editorial hierarchy. The hero takes a two-column
 * split — headline left, meta-info right. Services display as numbered
 * article blocks with oversized indices. Portfolio is an irregular CSS grid
 * with mixed-height tiles, like a magazine spread. Pricing becomes a
 * horizontal comparison bar. Reads like a feature article about the studio.
 *
 * Brand tokens: lime #CCFF00 accent · zinc-950 base · zinc-900 surface · Geist Sans
 */

import type { Metadata } from "next";
import Link from "next/link";
import { LINE_OA_URL } from "@/lib/utils";
import { PORTFOLIO_ITEMS, PRICING_TIERS, SERVICES_DATA } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "WarpClip — Variant 2",
  robots: { index: false, follow: false },
};

function VariantChip() {
  return (
    <Link
      href="/landing3"
      className="fixed right-4 top-4 z-50 rounded-full border border-white/10 bg-zinc-900/90 px-3 py-1.5 text-xs text-zinc-400 backdrop-blur transition hover:border-[#CCFF00]/40 hover:text-white"
    >
      Variant 2 / 5 · ดูแบบอื่น →
    </Link>
  );
}

function Hero() {
  return (
    <section className="relative border-b border-white/8 px-6 pt-24 pb-16 sm:px-12">
      <div className="mb-12 flex items-center justify-between border-b border-white/8 pb-4 text-xs text-zinc-600">
        <span className="font-medium uppercase tracking-widest">WarpClip Studio</span>
        <span>Short-Form · TikTok · Reels · Shorts</span>
      </div>

      <div className="grid items-end gap-12 sm:grid-cols-[3fr_1fr]">
        <div>
          <h1 className="text-6xl font-bold leading-[1.0] tracking-tight text-white sm:text-[7rem]">
            ตัดต่อ
            <br />
            <span className="text-[#CCFF00]">Warp</span>
            <br />
            Speed.
          </h1>
          <div className="mt-8 flex items-center gap-4">
            <a
              href={LINE_OA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-[#A8D400]"
            >
              คุยกับเราใน LINE
            </a>
            <a
              href="#pricing"
              className="text-sm text-zinc-500 underline underline-offset-4 transition hover:text-white"
            >
              ดูราคา
            </a>
          </div>
        </div>

        <div className="space-y-8 border-l border-white/8 pl-8">
          <div>
            <p className="text-3xl font-bold text-[#CCFF00]">24–48</p>
            <p className="mt-1 text-xs text-zinc-600">ชม. ส่งงาน</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#CCFF00]">100+</p>
            <p className="mt-1 text-xs text-zinc-600">คลิปต่อเดือน</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#CCFF00]">98%</p>
            <p className="mt-1 text-xs text-zinc-600">ลูกค้ากลับมา</p>
          </div>
          <p className="text-xs leading-relaxed text-zinc-500">
            บริการตัดต่อคลิปสั้นสำหรับ TikTok, Reels, YouTube Shorts.
            คุณภาพ agency ราคาคุยกันได้.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-b border-white/8 px-6 py-20 sm:px-12">
      <div className="mb-12 flex items-baseline justify-between">
        <h2 className="text-2xl font-bold text-white">บริการของเรา</h2>
        <p className="text-xs uppercase tracking-widest text-zinc-600">Services</p>
      </div>
      <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES_DATA.map((s, i) => (
          <div
            key={s.key}
            className="border border-white/5 p-8 transition hover:border-[#CCFF00]/20 hover:bg-zinc-900/50"
          >
            <span className="block text-6xl font-bold leading-none text-zinc-800 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="border-b border-white/8 px-6 py-20 sm:px-12">
      <div className="mb-12 flex items-baseline justify-between">
        <h2 className="text-2xl font-bold text-white">ผลงาน</h2>
        <p className="text-xs uppercase tracking-widest text-zinc-600">Portfolio</p>
      </div>
      <div className="grid grid-cols-2 gap-px bg-white/5 sm:grid-cols-3">
        {PORTFOLIO_ITEMS.map((item, i) => (
          <div
            key={item.url}
            className={`group relative flex flex-col justify-end bg-zinc-950 p-6 transition hover:bg-zinc-900 ${
              i === 0 ? "sm:row-span-2" : ""
            }`}
            style={{ minHeight: i === 0 ? "320px" : "160px" }}
          >
            <div className="absolute right-4 top-4 rounded-full border border-white/10 px-2 py-0.5 text-xs text-zinc-600">
              {item.category}
            </div>
            <div>
              <p className="text-xs text-zinc-700 tabular-nums">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-1 font-semibold text-white transition group-hover:text-[#CCFF00]">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-zinc-600">
        ดูคลิปจริงทั้งหมดผ่าน{" "}
        <a
          href={LINE_OA_URL}
          className="text-[#CCFF00] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINE @warpclip
        </a>
      </p>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="border-b border-white/8 px-6 py-20 sm:px-12">
      <div className="mb-12 flex items-baseline justify-between">
        <h2 className="text-2xl font-bold text-white">ราคา</h2>
        <p className="text-xs uppercase tracking-widest text-zinc-600">
          Pricing · ลด 15% ≥ 10 คลิป/เดือน
        </p>
      </div>
      <div className="grid gap-px bg-white/5 sm:grid-cols-3">
        {PRICING_TIERS.map((t) => (
          <div
            key={t.name}
            className={`relative p-8 ${t.accent ? "bg-[#CCFF00]/[0.03]" : "bg-zinc-950"}`}
          >
            {t.accent && (
              <div className="absolute right-4 top-4 rounded-full bg-[#CCFF00] px-2 py-0.5 text-xs font-semibold text-zinc-950">
                ขายดี
              </div>
            )}
            <p className="text-xs uppercase tracking-widest text-zinc-600">{t.name}</p>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-white">฿{t.price}</span>
              {t.unit && <span className="text-sm text-zinc-600">{t.unit}</span>}
            </div>
            <p className="mt-1 text-xs text-zinc-600">{t.desc}</p>
            <ul className="mt-6 space-y-2 text-sm text-zinc-400">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#CCFF00]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={LINE_OA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 block border py-3 text-center text-sm font-semibold transition ${
                t.accent
                  ? "border-[#CCFF00] bg-[#CCFF00] text-zinc-950 hover:bg-[#A8D400] hover:border-[#A8D400]"
                  : "border-white/10 text-white hover:border-white/20 hover:bg-white/5"
              }`}
            >
              เริ่มเลย
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-6 py-20 sm:px-12">
      <div className="grid items-center gap-12 sm:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-widest text-zinc-600">Contact</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            ส่งบรีฟ
            <br />
            <span className="text-[#CCFF00]">วันนี้เลย.</span>
          </h2>
          <p className="mt-6 text-zinc-500">
            ตอบใน 2 ชั่วโมง. คุยฟรี ไม่ผูกมัด.
            <br />
            จ.–ส. 09:00–20:00 (GMT+7)
          </p>
        </div>
        <div className="space-y-4">
          <a
            href={LINE_OA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-[#CCFF00]/40 bg-[#CCFF00]/5 p-6 transition hover:bg-[#CCFF00]/10"
          >
            <p className="text-xs uppercase tracking-widest text-[#CCFF00]">LINE OA</p>
            <p className="mt-2 text-xl font-semibold text-white">@warpclip</p>
            <p className="mt-1 text-sm text-zinc-500">ช่องทางหลัก — ตอบเร็วที่สุด</p>
          </a>
          <a
            href="mailto:hi@warpclip.com"
            className="block border border-white/8 p-6 transition hover:border-white/15"
          >
            <p className="text-xs uppercase tracking-widest text-zinc-600">Email</p>
            <p className="mt-2 text-xl font-semibold text-white">hi@warpclip.com</p>
            <p className="mt-1 text-sm text-zinc-500">สำหรับ proposal / contract</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Landing2() {
  return (
    <div className="bg-zinc-950">
      <VariantChip />
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Contact />
    </div>
  );
}
