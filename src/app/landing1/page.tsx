/*
 * LANDING 1 — Minimal Editorial
 *
 * Thesis: Typography-first layout inspired by Kinfolk / The Gentlewoman.
 * Whitespace is the primary design element. Lime #CCFF00 appears only as a
 * typographic accent — never as a background block. Sections divided by thin
 * horizontal rules. Numbers act as decorative glyphs. The layout forces the
 * reader to slow down and trust the content rather than scan for visuals.
 *
 * Brand tokens: lime #CCFF00 accent · zinc-950 base · zinc-400 muted · Geist Sans
 */

import type { Metadata } from "next";
import Link from "next/link";
import { LINE_OA_URL } from "@/lib/utils";
import { PORTFOLIO_ITEMS, PRICING_TIERS, SERVICES_DATA } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "WarpClip — Variant 1",
  robots: { index: false, follow: false },
};

function VariantChip() {
  return (
    <Link
      href="/landing2"
      className="fixed right-4 top-4 z-50 rounded-full border border-white/10 bg-zinc-900/90 px-3 py-1.5 text-xs text-zinc-400 backdrop-blur transition hover:border-[#CCFF00]/40 hover:text-white"
    >
      Variant 1 / 5 · ดูแบบอื่น →
    </Link>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-32 pb-20 sm:pt-48 sm:pb-32">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
        Short-Form Video Studio · MoonieX
      </p>
      <h1 className="mt-8 text-6xl font-bold leading-[1.05] tracking-tight text-white sm:text-8xl">
        คลิปที่{" "}
        <span className="text-[#CCFF00]">ดูจบ</span>
        <br />
        ไม่ใช่แค่เริ่มดู.
      </h1>
      <p className="mt-10 max-w-prose text-lg leading-relaxed text-zinc-400">
        WarpClip คือบริการตัดต่อ TikTok / Reels / Shorts ที่ออกแบบมาเพื่อสร้าง
        Hook ที่แข็งพอให้คนดูจนจบ — ตัดจังหวะกับเสียง sub-title อ่านง่าย.
        ส่งงาน 24–48 ชม. คุณภาพระดับ agency. ราคาที่คุยกันได้.
      </p>
      <div className="mt-10 flex items-center gap-8">
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

      <dl className="mt-20 grid grid-cols-3 border-t border-white/8 pt-10">
        {[
          { k: "24–48", v: "ชั่วโมง ส่งงาน" },
          { k: "100+", v: "คลิปต่อเดือน" },
          { k: "98%", v: "ลูกค้ากลับมาใช้ซ้ำ" },
        ].map((s, i) => (
          <div
            key={s.v}
            className={`px-6 ${i === 0 ? "pl-0" : ""} ${i < 2 ? "border-r border-white/8" : ""}`}
          >
            <dt className="text-4xl font-bold text-[#CCFF00] sm:text-5xl">{s.k}</dt>
            <dd className="mt-2 text-xs text-zinc-600">{s.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-4xl px-6 py-20 sm:py-32">
      <hr className="border-white/8" />
      <div className="mt-16 grid gap-12 sm:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">Services</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ทุกบริการเสริมกันได้ —{" "}
            <span className="text-zinc-500">เลือกเฉพาะที่ต้องการ</span>
          </h2>
        </div>
        <div className="space-y-10">
          {SERVICES_DATA.map((s, i) => (
            <div key={s.key} className="flex gap-5">
              <span className="w-6 shrink-0 pt-0.5 text-xs tabular-nums text-[#CCFF00]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-4xl px-6 py-20 sm:py-32">
      <hr className="border-white/8" />
      <p className="mt-16 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">Portfolio</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        ผลงานที่เราภูมิใจ
      </h2>
      <p className="mt-4 max-w-prose text-zinc-500">
        คลิปจริงจากลูกค้าจริง — ติดต่อผ่าน LINE เพื่อรับ portfolio PDF + sample วิดีโอ
      </p>
      <div className="mt-12 divide-y divide-white/8">
        {PORTFOLIO_ITEMS.map((item, i) => (
          <div key={item.url} className="group flex items-baseline justify-between py-5">
            <div className="flex items-baseline gap-6">
              <span className="w-6 shrink-0 text-xs tabular-nums text-zinc-700 transition group-hover:text-[#CCFF00]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-medium text-white">{item.title}</span>
            </div>
            <span className="text-xs text-zinc-600">{item.category}</span>
          </div>
        ))}
      </div>
      <p className="mt-8 text-xs text-zinc-600">
        ดูตัวอย่างคลิปทั้งหมด →{" "}
        <a
          href={LINE_OA_URL}
          className="text-[#CCFF00] underline underline-offset-4 hover:no-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          ติดต่อผ่าน LINE
        </a>
      </p>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-4xl px-6 py-20 sm:py-32">
      <hr className="border-white/8" />
      <p className="mt-16 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">Pricing</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        ราคาตรงไปตรงมา
      </h2>
      <p className="mt-4 text-zinc-500">ลด 15% สำหรับงาน ≥ 10 คลิปต่อเดือน</p>

      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {PRICING_TIERS.map((t) => (
          <div key={t.name}>
            {t.accent ? (
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[#CCFF00]">
                ยอดนิยม
              </p>
            ) : (
              <div className="mb-3 h-5" />
            )}
            <h3 className="text-xl font-bold text-white">{t.name}</h3>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-[#CCFF00]">฿{t.price}</span>
              {t.unit && <span className="text-sm text-zinc-500">{t.unit}</span>}
            </div>
            <p className="mt-1 text-xs text-zinc-600">{t.desc}</p>
            <ul className="mt-6 space-y-2">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-zinc-400">
                  <span className="mt-0.5 text-[#CCFF00]" aria-hidden="true">·</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={LINE_OA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 block rounded-full py-2.5 text-center text-sm font-semibold transition ${
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
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-20 sm:py-32">
      <hr className="border-white/8" />
      <div className="mt-16 sm:flex sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">Contact</p>
          <h2 className="mt-4 max-w-lg text-3xl font-bold tracking-tight text-white sm:text-5xl">
            พร้อมเริ่ม<span className="text-[#CCFF00]">แล้ว</span>?
          </h2>
          <p className="mt-6 max-w-sm text-zinc-500">
            ส่งบรีฟผ่าน LINE — ตอบใน 2 ชั่วโมง. คุยฟรี ไม่ผูกมัด.
            <br />
            เปิดบริการ จ.–ส. 09:00–20:00 (GMT+7)
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:mt-0 sm:items-end">
          <a
            href={LINE_OA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-[#A8D400]"
          >
            @warpclip บน LINE
          </a>
          <a
            href="mailto:hi@warpclip.com"
            className="text-sm text-zinc-500 underline underline-offset-4 transition hover:text-white"
          >
            hi@warpclip.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Landing1() {
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
