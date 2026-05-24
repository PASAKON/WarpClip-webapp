/*
 * LANDING 4 — Playful / Lime-Heavy (Inverted)
 *
 * Thesis: The color scheme is fully inverted — lime #CCFF00 becomes the
 * primary surface color, zinc-950 becomes the accent/text. This is a bold,
 * energetic statement: the brand color takes over the entire page, impossible
 * to miss, impossible to forget. Dark cards float on the lime sea. The
 * result feels playful and confident, targeting clients who want a studio
 * with personality, not just a production commodity. Bold rounded corners
 * and oversized type reinforce the playful tone.
 *
 * Brand tokens: lime #CCFF00 PRIMARY SURFACE (inverted) · zinc-950 text/accent · Geist Sans
 */

import type { Metadata } from "next";
import Link from "next/link";
import { LINE_OA_URL } from "@/lib/utils";
import { PORTFOLIO_ITEMS, PRICING_TIERS, SERVICES_DATA } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "WarpClip — Variant 4",
  robots: { index: false, follow: false },
};

function VariantChip() {
  return (
    <Link
      href="/landing5"
      className="fixed right-4 top-4 z-50 rounded-full border border-zinc-950/20 bg-zinc-950/80 px-3 py-1.5 text-xs text-zinc-100 backdrop-blur transition hover:bg-zinc-950 hover:text-[#CCFF00]"
    >
      Variant 4 / 5 · ดูแบบอื่น →
    </Link>
  );
}

function Hero() {
  return (
    <section className="bg-[#CCFF00] px-6 pt-24 pb-20 sm:px-12 sm:pt-32 sm:pb-28">
      <div className="mx-auto max-w-5xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-1.5 text-xs font-medium text-[#CCFF00]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#CCFF00]" />
          เปิดรับงานใหม่ · MoonieX
        </div>

        <h1 className="mt-8 text-6xl font-bold leading-[1.0] tracking-tight text-zinc-950 sm:text-8xl">
          คลิปของคุณ
          <br />
          ต้องดัง.
        </h1>

        <p className="mt-8 max-w-xl text-lg text-zinc-700">
          WarpClip ตัดต่อ TikTok / Reels / Shorts ให้ดูจบ.
          ส่งงาน 24–48 ชม. คุณภาพ agency.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={LINE_OA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-8 py-4 text-base font-bold text-[#CCFF00] transition hover:bg-zinc-800"
          >
            คุยกับเราใน LINE
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-950/20 px-8 py-4 text-base font-bold text-zinc-950 transition hover:border-zinc-950 hover:bg-zinc-950/5"
          >
            ดูราคา
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-3 gap-4">
          {[
            { k: "24–48", v: "ชม. ส่งงาน" },
            { k: "100+", v: "คลิป/เดือน" },
            { k: "98%", v: "ลูกค้ากลับมา" },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl bg-zinc-950/10 p-6">
              <dt className="text-4xl font-bold text-zinc-950 sm:text-5xl">{s.k}</dt>
              <dd className="mt-1 text-sm text-zinc-700">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-zinc-950 px-6 py-20 sm:px-12 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-[#CCFF00]">Services</p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            ทำให้คลิปน่าดูจนจบ
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((s) => (
            <div
              key={s.key}
              className="group rounded-3xl border border-white/5 bg-zinc-900 p-6 transition hover:border-[#CCFF00]/30 hover:bg-zinc-800"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#CCFF00]/10">
                <span className="text-xl font-bold text-[#CCFF00]">{s.title.charAt(0)}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#CCFF00] px-6 py-20 sm:px-12 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-widest text-zinc-600">Portfolio</p>
        <h2 className="mt-2 text-3xl font-bold text-zinc-950 sm:text-4xl">ผลงาน</h2>
        <p className="mt-4 text-zinc-700">
          คลิปจริงจากลูกค้าจริง — ติดต่อ LINE รับ portfolio PDF + sample วิดีโอ
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.url}
              className="group relative aspect-[9/16] overflow-hidden rounded-3xl bg-zinc-950"
            >
              <div className="absolute inset-0 bg-zinc-900/50 transition group-hover:bg-zinc-900/30" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-[#CCFF00]">
                  {item.category}
                </p>
                <h3 className="mt-1 text-base font-semibold text-white">{item.title}</h3>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                <div className="rounded-full bg-[#CCFF00] p-4">
                  <svg className="h-6 w-6 text-zinc-950" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={LINE_OA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-8 py-4 text-base font-bold text-[#CCFF00] transition hover:bg-zinc-800"
          >
            ดูผลงานทั้งหมดใน LINE
          </a>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-zinc-950 px-6 py-20 sm:px-12 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-widest text-[#CCFF00]">Pricing</p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">ราคาตรงไปตรงมา</h2>
        <p className="mt-4 text-zinc-500">ลด 15% สำหรับงาน ≥ 10 คลิปต่อเดือน</p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {PRICING_TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative overflow-hidden rounded-3xl p-8 ${
                t.accent ? "bg-[#CCFF00]" : "border border-white/8 bg-zinc-900"
              }`}
            >
              {t.accent && (
                <div className="absolute right-4 top-4 rounded-full bg-zinc-950 px-3 py-1 text-xs font-bold text-[#CCFF00]">
                  ขายดี
                </div>
              )}
              <h3 className={`text-xl font-bold ${t.accent ? "text-zinc-950" : "text-white"}`}>
                {t.name}
              </h3>
              <p className={`mt-1 text-sm ${t.accent ? "text-zinc-700" : "text-zinc-500"}`}>
                {t.desc}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className={`text-4xl font-bold ${t.accent ? "text-zinc-950" : "text-[#CCFF00]"}`}>
                  ฿{t.price}
                </span>
                {t.unit && (
                  <span className={`text-sm ${t.accent ? "text-zinc-700" : "text-zinc-500"}`}>
                    {t.unit}
                  </span>
                )}
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2 text-sm ${
                      t.accent ? "text-zinc-800" : "text-zinc-400"
                    }`}
                  >
                    <svg
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        t.accent ? "text-zinc-950" : "text-[#CCFF00]"
                      }`}
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
                className={`mt-8 block rounded-full py-3 text-center text-sm font-bold transition ${
                  t.accent
                    ? "bg-zinc-950 text-[#CCFF00] hover:bg-zinc-800"
                    : "bg-[#CCFF00] text-zinc-950 hover:bg-[#A8D400]"
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
    <section id="contact" className="bg-[#CCFF00] px-6 py-20 sm:px-12 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-3xl bg-zinc-950 p-12 sm:p-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white sm:text-5xl">
              พร้อมเริ่มต้น<span className="text-[#CCFF00]">แล้ว</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-zinc-400">
              ส่งบรีฟผ่าน LINE — ตอบใน 2 ชั่วโมง. คุยฟรี ไม่ผูกมัด.
              <br />
              เปิดบริการ จ.–ส. 09:00–20:00 (GMT+7)
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={LINE_OA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-8 py-4 text-base font-bold text-zinc-950 transition hover:bg-[#A8D400]"
              >
                @warpclip บน LINE
              </a>
              <a
                href="mailto:hi@warpclip.com"
                className="inline-flex items-center rounded-full border border-white/10 px-8 py-4 text-base font-medium text-white transition hover:bg-white/5"
              >
                hi@warpclip.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Landing4() {
  return (
    <div>
      <VariantChip />
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Contact />
    </div>
  );
}
