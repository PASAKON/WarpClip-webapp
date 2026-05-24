"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LINE_OA_URL } from "@/lib/utils";

export function VariantChip() {
  return (
    <Link
      href="/landing8"
      className="fixed right-4 top-4 z-50 rounded-full border border-white/10 bg-zinc-900/90 px-3 py-1.5 text-xs text-zinc-400 backdrop-blur transition hover:border-[#CCFF00]/40 hover:text-white"
    >
      Variant 7 / 10 · ดูแบบอื่น →
    </Link>
  );
}

export function BeforeAfterHero() {
  const [split, setSplit] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSplit = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSplit(Math.min(90, Math.max(10, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (dragging.current) updateSplit(e.clientX); };
    const onUp = () => { dragging.current = false; };
    const onTouch = (e: TouchEvent) => { if (dragging.current && e.touches[0]) updateSplit(e.touches[0].clientX); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onUp);
    };
  }, [updateSplit]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden select-none cursor-col-resize bg-zinc-950"
      onMouseDown={(e) => { dragging.current = true; updateSplit(e.clientX); }}
      onTouchStart={(e) => { dragging.current = true; if (e.touches[0]) updateSplit(e.touches[0].clientX); }}
    >
      {/* BEFORE */}
      <div className="absolute inset-0 bg-zinc-900 flex flex-col items-center justify-center gap-6 px-8 text-center">
        <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2">
          <span className="font-mono text-xs text-zinc-500 tracking-widest uppercase">Before</span>
        </div>
        <div className="space-y-2.5">
          {["ไม่มี hook", "ไม่มี subtitle", "สีหม่น ดูไม่น่าสนใจ"].map((t) => (
            <div key={t} className="flex items-center gap-2 text-zinc-600 text-sm">
              <span className="text-red-500/60 w-4">✗</span> {t}
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-zinc-700 bg-zinc-800 px-6 py-4 text-center">
          <p className="text-3xl font-bold text-zinc-400">~200</p>
          <p className="text-xs text-zinc-600 mt-1">avg views / clip</p>
        </div>
      </div>

      {/* AFTER */}
      <div
        className="absolute inset-0 bg-zinc-950 flex flex-col items-center justify-center gap-6 px-8 text-center"
        style={{ clipPath: `inset(0 0 0 ${split}%)` }}
      >
        <div className="rounded-lg border border-[#CCFF00]/40 bg-[#CCFF00]/10 px-4 py-2">
          <span className="font-mono text-xs text-[#CCFF00] tracking-widest uppercase">After</span>
        </div>
        <div className="space-y-2.5">
          {["Hook แรง ใน 3 วินาทีแรก", "Subtitle sync เพอร์เฟกต์", "Color graded, ดูพรีเมียม"].map((t) => (
            <div key={t} className="flex items-center gap-2 text-zinc-300 text-sm">
              <span className="text-[#CCFF00] w-4">✓</span> {t}
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-[#CCFF00]/30 bg-zinc-900 px-6 py-4 text-center">
          <p className="text-3xl font-bold text-[#CCFF00]">36.5K</p>
          <p className="text-xs text-zinc-500 mt-1">avg engagement / clip</p>
        </div>
      </div>

      {/* Divider */}
      <div className="absolute top-0 bottom-0 z-10 pointer-events-none" style={{ left: `${split}%` }}>
        <div className="h-full w-0.5 bg-[#CCFF00]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#CCFF00] flex items-center justify-center shadow-xl shadow-[#CCFF00]/20">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M6 9H2M12 9h4M2 9l2.5-2.5M2 9l2.5 2.5M16 9l-2.5-2.5M16 9l-2.5 2.5" stroke="#09090b" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center z-20 pointer-events-none whitespace-nowrap">
        <h1 className="text-3xl sm:text-5xl font-bold text-white">
          จาก Raw → <span className="text-[#CCFF00]">Viral</span>
        </h1>
        <p className="mt-2 text-zinc-400 text-sm">WarpClip ตัดต่อ TikTok · Reels · Shorts</p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center z-20">
        <p className="text-zinc-600 text-xs tracking-widest uppercase mb-4 pointer-events-none">ลากเพื่อดูความต่าง</p>
        <a href={LINE_OA_URL} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-6 py-3 text-sm font-bold text-zinc-950 hover:bg-[#b8e600] transition-colors">
          เริ่มต้นใช้งาน
        </a>
      </div>
    </section>
  );
}
