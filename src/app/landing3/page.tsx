/*
 * LANDING 3 — Terminal / Devtool
 *
 * Thesis: Command-line aesthetic targeting technical/developer creators.
 * Monospace font for all accent text and numbers. Terminal window chrome wraps
 * key sections. Copy is terse — no fluff, just specs. Lime is the phosphor
 * green of an old CRT terminal, against absolute darkness. Section headers
 * read like command prompts. Pricing looks like a feature matrix with checkmarks.
 * The aesthetic says: "this service is precise, fast, and built like software."
 *
 * Brand tokens: lime #CCFF00 as phosphor-green · zinc-950 base · Geist Sans body + mono accents
 */

import type { Metadata } from "next";
import Link from "next/link";
import { LINE_OA_URL } from "@/lib/utils";
import { PORTFOLIO_ITEMS, PRICING_TIERS, SERVICES_DATA } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "WarpClip — Variant 3",
  robots: { index: false, follow: false },
};

function VariantChip() {
  return (
    <Link
      href="/landing4"
      className="fixed right-4 top-4 z-50 rounded-full border border-white/10 bg-zinc-900/90 px-3 py-1.5 text-xs text-zinc-400 backdrop-blur transition hover:border-[#CCFF00]/40 hover:text-white"
    >
      Variant 3 / 5 · ดูแบบอื่น →
    </Link>
  );
}

function TerminalWindow({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-zinc-900/60">
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-zinc-700" />
        <span className="h-3 w-3 rounded-full bg-zinc-700" />
        <span className="h-3 w-3 rounded-full bg-zinc-700" />
        <span className="ml-3 font-mono text-xs text-zinc-500">{title}</span>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

function Prompt({ cmd }: { cmd: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-mono text-sm text-[#CCFF00]">$</span>
      <span className="font-mono text-sm text-white">{cmd}</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-28 pb-20 sm:pt-36">
      <div className="mb-4 font-mono text-xs text-zinc-600">
        # warpclip v3.0.0 — short-form video studio
      </div>

      <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-7xl">
        ตัดต่อ Short-Form
        <br />
        <span className="font-mono text-[#CCFF00]">--speed warp</span>
      </h1>

      <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-zinc-500">
        {"> "}TikTok / Reels / YouTube Shorts editing service
        <br />
        {"> "}turnaround: 24–48h · quality: agency · pricing: negotiable
        <br />
        {"> "}hooks optimized · subtitles synced · sound-fx included
      </p>

      <div className="mt-10 flex items-center gap-4">
        <a
          href={LINE_OA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-6 py-3 font-mono text-sm font-semibold text-zinc-950 transition hover:bg-[#A8D400]"
        >
          ./contact --line
        </a>
        <a
          href="#pricing"
          className="font-mono text-sm text-zinc-500 transition hover:text-white"
        >
          cat pricing.md
        </a>
      </div>

      <div className="mt-16">
        <TerminalWindow title="warpclip --status">
          <div className="space-y-2 font-mono text-sm">
            <div className="flex justify-between">
              <span className="text-zinc-500">status</span>
              <span className="text-[#CCFF00]">OPEN — รับงานใหม่</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">turnaround</span>
              <span className="text-white">24–48h</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">capacity</span>
              <span className="text-white">100+ clips/mo</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">retention_rate</span>
              <span className="text-[#CCFF00]">98%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">powered_by</span>
              <span className="text-zinc-400">MoonieX</span>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <div className="mb-4 font-mono text-xs text-zinc-600"># ls services/</div>
      <h2 className="mb-10 text-3xl font-bold text-white">บริการ</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {SERVICES_DATA.map((s, i) => (
          <TerminalWindow key={s.key} title={`services/${s.key}.sh`}>
            <Prompt cmd={`warpclip serve --module ${s.key}`} />
            <div className="mt-4">
              <p className="text-sm font-semibold text-[#CCFF00]">{s.title}</p>
              <p className="mt-2 font-mono text-xs leading-relaxed text-zinc-500">{s.desc}</p>
            </div>
            <p className="mt-4 font-mono text-xs text-zinc-700">exit 0 — module_{i + 1}</p>
          </TerminalWindow>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <div className="mb-4 font-mono text-xs text-zinc-600"># ls portfolio/</div>
      <h2 className="mb-4 text-3xl font-bold text-white">ผลงาน</h2>
      <p className="mb-10 font-mono text-sm text-zinc-500">
        # real clips from real clients — contact LINE for PDF + samples
      </p>
      <TerminalWindow title="portfolio --list">
        <div className="overflow-x-auto font-mono text-sm">
          <div className="mb-3 grid grid-cols-[3rem_1fr_auto] gap-4 border-b border-white/8 pb-3 text-xs text-zinc-600">
            <span>idx</span>
            <span>title</span>
            <span>category</span>
          </div>
          {PORTFOLIO_ITEMS.map((item, i) => (
            <div
              key={item.url}
              className="grid grid-cols-[3rem_1fr_auto] gap-4 border-b border-white/5 py-3 last:border-0"
            >
              <span className="text-zinc-700 tabular-nums">{String(i).padStart(3, "0")}</span>
              <span className="text-white">{item.title}</span>
              <span className="text-[#CCFF00]">{item.category}</span>
            </div>
          ))}
          <div className="mt-4 text-xs text-zinc-600">
            {PORTFOLIO_ITEMS.length} items · more via{" "}
            <a
              href={LINE_OA_URL}
              className="text-[#CCFF00] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINE @warpclip
            </a>
          </div>
        </div>
      </TerminalWindow>
    </section>
  );
}

function Pricing() {
  const features = [
    "ตัดต่อคลิปสั้น",
    "Sub-title",
    "Sound FX",
    "Color grading",
    "B-roll sourcing",
    "Thumbnail design",
    "Priority delivery",
  ];
  const matrix: boolean[][] = [
    [true, true, true],
    [true, true, true],
    [false, true, true],
    [false, true, true],
    [false, false, true],
    [false, false, true],
    [false, false, true],
  ];

  return (
    <section id="pricing" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <div className="mb-4 font-mono text-xs text-zinc-600"># cat pricing.md</div>
      <h2 className="mb-10 text-3xl font-bold text-white">Pricing</h2>
      <TerminalWindow title="pricing --compare">
        <div className="overflow-x-auto">
          <table className="w-full font-mono text-sm">
            <thead>
              <tr className="border-b border-white/8">
                <th className="pb-3 text-left text-zinc-600 font-normal">feature</th>
                {PRICING_TIERS.map((t) => (
                  <th key={t.name} className={`pb-3 text-right font-semibold ${t.accent ? "text-[#CCFF00]" : "text-white"}`}>
                    {t.name}
                    <span className="block text-xs font-normal text-zinc-500">฿{t.price}{t.unit}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((f, fi) => (
                <tr key={f} className="border-b border-white/5">
                  <td className="py-2.5 text-zinc-400">{f}</td>
                  {matrix[fi]?.map((has, j) => (
                    <td key={j} className={`py-2.5 text-right ${has ? "text-[#CCFF00]" : "text-zinc-700"}`}>
                      {has ? "✓" : "✗"}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-b border-white/5">
                <td className="py-2.5 text-zinc-400">แก้ไขฟรี</td>
                <td className="py-2.5 text-right text-white">1x</td>
                <td className="py-2.5 text-right text-[#CCFF00]">3x</td>
                <td className="py-2.5 text-right text-white">∞</td>
              </tr>
              <tr>
                <td className="py-2.5 text-zinc-400">ส่งงาน</td>
                <td className="py-2.5 text-right text-white">48h</td>
                <td className="py-2.5 text-right text-[#CCFF00]">24h</td>
                <td className="py-2.5 text-right text-white">priority</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-6 border-t border-white/8 pt-6">
            <Prompt cmd="warpclip subscribe --tier <basic|pro|premium> --contact @warpclip" />
            <p className="mt-2 text-xs text-zinc-600"># bulk discount: ≥ 10 clips/mo → -15%</p>
          </div>
        </div>
      </TerminalWindow>
      <div className="mt-6 flex gap-4">
        {PRICING_TIERS.map((t) => (
          <a
            key={t.name}
            href={LINE_OA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 rounded-full py-2.5 text-center font-mono text-sm font-semibold transition ${
              t.accent
                ? "bg-[#CCFF00] text-zinc-950 hover:bg-[#A8D400]"
                : "border border-white/10 text-white hover:bg-white/5"
            }`}
          >
            --tier {t.name.toLowerCase()}
          </a>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <div className="mb-4 font-mono text-xs text-zinc-600"># ./contact.sh</div>
      <TerminalWindow title="contact --init">
        <div className="space-y-4 font-mono text-sm">
          <Prompt cmd="warpclip contact --line @warpclip" />
          <div className="pl-6 text-zinc-500">
            <p>Connecting to LINE OA...</p>
            <p className="text-[#CCFF00]">Connected — response time: ~2h</p>
          </div>
          <div className="mt-4 border-t border-white/8 pt-4">
            <Prompt cmd="warpclip contact --email hi@warpclip.com" />
            <p className="mt-2 pl-6 text-zinc-500">use for proposals / contracts</p>
          </div>
          <div className="mt-4 border-t border-white/8 pt-4 text-xs text-zinc-600">
            hours: จ.–ส. 09:00–20:00 (GMT+7) · no-commitment free consultation
          </div>
        </div>
        <div className="mt-6">
          <a
            href={LINE_OA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-6 py-3 font-mono text-sm font-semibold text-zinc-950 transition hover:bg-[#A8D400]"
          >
            ./connect --now
          </a>
        </div>
      </TerminalWindow>
    </section>
  );
}

export default function Landing3() {
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
