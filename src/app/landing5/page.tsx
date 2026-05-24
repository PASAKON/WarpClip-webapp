/*
 * LANDING 5 — Apple-style Minimal
 *
 * Thesis: One thought per full-viewport section. Inspired by Apple.com product
 * pages and Linear.app landing pages. Maximum whitespace, minimum words.
 * Each section exists to communicate a single truth: what we do, why it
 * matters, how much it costs, how to start. No clutter, no decorative elements.
 * Typography and negative space do the persuading. Sections feel cinematic —
 * they deserve their own full screen. Section number anchors help
 * navigation without a cluttered nav. The overall experience communicates
 * premium without saying the word.
 *
 * Brand tokens: lime #CCFF00 as the single spark of color · zinc-950 base · Geist Sans
 */

import type { Metadata } from "next";
import Link from "next/link";
import { LINE_OA_URL } from "@/lib/utils";
import { PORTFOLIO_ITEMS, PRICING_TIERS, SERVICES_DATA } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "WarpClip — Variant 5",
  robots: { index: false, follow: false },
};

function VariantChip() {
  return (
    <Link
      href="/landing1"
      className="fixed right-4 top-4 z-50 rounded-full border border-white/10 bg-zinc-900/90 px-3 py-1.5 text-xs text-zinc-400 backdrop-blur transition hover:border-[#CCFF00]/40 hover:text-white"
    >
      Variant 5 / 5 · ดูแบบอื่น →
    </Link>
  );
}

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="mb-20 flex items-center gap-4">
      <span className="font-mono text-xs text-[#CCFF00]">{n}</span>
      <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">{label}</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#CCFF00]" />
      <h1 className="mt-12 text-6xl font-bold leading-[1.0] tracking-tight text-white sm:text-8xl lg:text-[9rem]">
        ตัดต่อ
        <br />
        Short-Form.
        <br />
        <span className="text-zinc-600">เร็วกว่าที่คิด.</span>
      </h1>
      <p className="mx-auto mt-10 max-w-lg text-xl text-zinc-500">
        TikTok · Reels · YouTube Shorts
        <br />
        ส่งงาน 24–48 ชั่วโมง
      </p>
      <a
        href={LINE_OA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-8 py-4 text-base font-semibold text-zinc-950 transition hover:bg-[#A8D400]"
      >
        เริ่มเลย
      </a>
      <p className="mt-6 text-xs text-zinc-700">คุยฟรี ไม่ผูกมัด</p>

      <div className="absolute bottom-10 flex flex-col items-center gap-2">
        <div className="h-8 w-px bg-gradient-to-b from-transparent to-zinc-600" />
        <span className="text-xs text-zinc-700">scroll</span>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="flex min-h-screen flex-col justify-center px-6 py-24 sm:px-16"
    >
      <div className="mx-auto w-full max-w-4xl">
        <SectionLabel n="01" label="Services" />
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          ทุกอย่างที่คลิป
          <br />
          ต้องการ.
        </h2>
        <div className="mt-20 grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((s) => (
            <div key={s.key} className="bg-zinc-950 p-8">
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="flex min-h-screen flex-col justify-center px-6 py-24 sm:px-16"
    >
      <div className="mx-auto w-full max-w-4xl">
        <SectionLabel n="02" label="Portfolio" />
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          ผลงานจาก
          <br />
          ลูกค้าจริง.
        </h2>
        <p className="mt-6 text-zinc-500">
          ติดต่อ LINE รับ portfolio PDF + sample วิดีโอ
        </p>

        <div className="mt-16 border-t border-white/8">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-white/8 py-6"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <span className="ml-8 shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-500">
                {item.category}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href={LINE_OA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 underline underline-offset-4 transition hover:text-white"
          >
            ดูคลิปตัวอย่างทั้งหมด
          </a>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section
      id="pricing"
      className="flex min-h-screen flex-col justify-center px-6 py-24 sm:px-16"
    >
      <div className="mx-auto w-full max-w-4xl">
        <SectionLabel n="03" label="Pricing" />
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          ราคา
          <br />
          ตรงไปตรงมา.
        </h2>
        <p className="mt-6 text-zinc-500">ลด 15% สำหรับงาน ≥ 10 คลิปต่อเดือน</p>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {PRICING_TIERS.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl p-8 ${
                t.accent
                  ? "border border-[#CCFF00]/30 bg-[#CCFF00]/[0.03]"
                  : "border border-white/8 bg-zinc-900/50"
              }`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-widest ${
                  t.accent ? "text-[#CCFF00]" : "text-zinc-500"
                }`}
              >
                {t.name}
              </p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">฿{t.price}</span>
                {t.unit && <span className="text-sm text-zinc-600">{t.unit}</span>}
              </div>
              <ul className="mt-6 space-y-2.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-zinc-400">
                    <span className="mt-0.5 shrink-0 text-[#CCFF00]" aria-hidden="true">
                      —
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={LINE_OA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition ${
                  t.accent
                    ? "bg-[#CCFF00] text-zinc-950 hover:bg-[#A8D400]"
                    : "border border-white/10 text-white hover:bg-white/5"
                }`}
              >
                เริ่มเลย
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <SectionLabel n="04" label="Contact" />
      <h2 className="text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
        เริ่มต้น
        <br />
        <span className="text-[#CCFF00]">วันนี้.</span>
      </h2>
      <p className="mx-auto mt-8 max-w-sm text-zinc-500">
        ส่งบรีฟผ่าน LINE — ตอบใน 2 ชั่วโมง
        <br />
        คุยฟรี ไม่ผูกมัด
      </p>
      <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <a
          href={LINE_OA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-10 py-4 text-base font-semibold text-zinc-950 transition hover:bg-[#A8D400]"
        >
          @warpclip บน LINE
        </a>
        <a
          href="mailto:hi@warpclip.com"
          className="inline-flex items-center rounded-full border border-white/10 px-10 py-4 text-base font-medium text-white transition hover:bg-white/5"
        >
          hi@warpclip.com
        </a>
      </div>
      <p className="mt-8 text-xs text-zinc-700">จ.–ส. 09:00–20:00 (GMT+7) · MoonieX Studio</p>
    </section>
  );
}

export default function Landing5() {
  return (
    <div className="relative bg-zinc-950">
      <VariantChip />
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Contact />
    </div>
  );
}
