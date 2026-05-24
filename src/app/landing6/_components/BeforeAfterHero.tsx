"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LINE_OA_URL } from "@/lib/utils";

export function BeforeAfterHero() {
  const [split, setSplit] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSplit = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = Math.min(90, Math.max(10, ((clientX - rect.left) / rect.width) * 100));
    setSplit(pct);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (dragging.current) updateSplit(e.clientX); };
    const onUp = () => { dragging.current = false; };
    const onTouchMove = (e: TouchEvent) => {
      if (dragging.current && e.touches[0]) updateSplit(e.touches[0].clientX);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [updateSplit]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden select-none cursor-col-resize"
      onMouseDown={(e) => { dragging.current = true; updateSplit(e.clientX); }}
      onTouchStart={(e) => { dragging.current = true; if (e.touches[0]) updateSplit(e.touches[0].clientX); }}
    >
      {/* BEFORE panel */}
      <div className="absolute inset-0 bg-zinc-900 flex flex-col items-center justify-center">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.03) 2px,rgba(255,255,255,0.03) 4px)" }} />
        <span className="text-zinc-700 font-mono text-xs tracking-[0.4em] uppercase mb-6">Before</span>
        <div className="w-[200px] h-[340px] rounded-2xl bg-zinc-800 border border-zinc-700 flex flex-col overflow-hidden shadow-xl">
          <div className="flex-1 bg-zinc-800 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-zinc-700 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[18px] border-l-zinc-500 ml-1" />
              </div>
            </div>
            <div className="absolute bottom-3 left-3 right-3 flex gap-1">
              {[40,60,80,45,70,55,90].map((h,i) => (
                <div key={i} className="flex-1 bg-zinc-700 rounded-sm" style={{ height: h/5 }} />
              ))}
            </div>
          </div>
          <div className="h-14 bg-zinc-900 px-3 flex flex-col justify-center gap-1">
            <div className="h-2 w-3/4 bg-zinc-700 rounded" />
            <div className="h-1.5 w-1/2 bg-zinc-800 rounded" />
          </div>
        </div>
        <p className="mt-6 text-zinc-600 text-xs max-w-[200px] text-center">Raw footage — ไม่มี hook ไม่มีใครดู</p>
      </div>

      {/* AFTER panel */}
      <div
        className="absolute inset-0 bg-zinc-950 flex flex-col items-center justify-center"
        style={{ clipPath: `inset(0 0 0 ${split}%)` }}
      >
        <span className="text-[#CCFF00] font-mono text-xs tracking-[0.4em] uppercase mb-6">After</span>
        <div className="w-[200px] h-[340px] rounded-2xl bg-zinc-900 border border-[#CCFF00]/30 flex flex-col overflow-hidden shadow-2xl shadow-[#CCFF00]/10">
          <div className="flex-1 bg-zinc-900 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#CCFF00]/20 border border-[#CCFF00]/40 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[18px] border-l-[#CCFF00] ml-1" />
              </div>
            </div>
            <div className="absolute bottom-6 left-3 right-3">
              <div className="rounded bg-[#CCFF00] px-2 py-1 text-zinc-950 text-[10px] font-bold text-center">
                นี่คือ hook ที่ทำให้คนหยุดดู
              </div>
            </div>
          </div>
          <div className="h-14 bg-zinc-900 border-t border-[#CCFF00]/10 px-3 flex flex-col justify-center gap-1">
            <div className="h-2 w-3/4 bg-[#CCFF00]/30 rounded" />
            <div className="h-1.5 w-1/2 bg-zinc-800 rounded" />
          </div>
        </div>
        <p className="mt-6 text-zinc-400 text-xs max-w-[200px] text-center">Edited by WarpClip — hook · subtitle · color grade</p>
      </div>

      {/* Divider handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-[#CCFF00] z-10 pointer-events-none"
        style={{ left: `${split}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#CCFF00] flex items-center justify-center shadow-lg shadow-[#CCFF00]/30">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 8H2M11 8h3M2 8l2-2M2 8l2 2M14 8l-2-2M14 8l-2 2" stroke="#09090b" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Top label */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center pointer-events-none z-20 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          คลิปคุณ <span className="text-[#CCFF00]">เปลี่ยนได้</span>
        </h1>
        <p className="mt-3 text-zinc-400 text-sm">WarpClip ตัดต่อ Short-Form ส่งใน 24 ชม.</p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20">
        <a
          href={LINE_OA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-7 py-3 text-sm font-bold text-zinc-950 hover:bg-[#b8e600] transition-colors"
        >
          เริ่มเลย — ฟรี
        </a>
        <p className="text-zinc-600 text-xs tracking-widest uppercase">ลากเพื่อเปรียบเทียบ</p>
      </div>
    </section>
  );
}

export function VariantChip() {
  return (
    <Link
      href="/landing7"
      className="fixed right-4 top-4 z-50 rounded-full border border-white/10 bg-zinc-900/90 px-3 py-1.5 text-xs text-zinc-400 backdrop-blur transition hover:border-[#CCFF00]/40 hover:text-white"
    >
      Variant 6 / 10 · ดูแบบอื่น →
    </Link>
  );
}
