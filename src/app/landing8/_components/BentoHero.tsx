"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LINE_OA_URL } from "@/lib/utils";

export function VariantChip() {
  return (
    <Link
      href="/landing9"
      className="fixed right-4 top-4 z-50 rounded-full border border-white/10 bg-zinc-900/90 px-3 py-1.5 text-xs text-zinc-400 backdrop-blur transition hover:border-[#CCFF00]/40 hover:text-white"
    >
      Variant 8 / 10 · ดูแบบอื่น →
    </Link>
  );
}

export function BentoSplitHero() {
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
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden rounded-3xl select-none cursor-col-resize"
      style={{ minHeight: 280 }}
      onMouseDown={(e) => { dragging.current = true; updateSplit(e.clientX); }}
      onTouchStart={(e) => { dragging.current = true; if (e.touches[0]) updateSplit(e.touches[0].clientX); }}
    >
      {/* BEFORE */}
      <div className="absolute inset-0 bg-zinc-800 flex flex-col items-center justify-center gap-3 p-4 text-center">
        <span className="font-mono text-[10px] text-zinc-600 tracking-[0.3em] uppercase">Raw footage</span>
        <div className="w-12 h-20 rounded-lg bg-zinc-700 flex items-center justify-center">
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-zinc-500 ml-0.5" />
        </div>
        <p className="text-zinc-600 text-xs">~200 views</p>
      </div>

      {/* AFTER */}
      <div
        className="absolute inset-0 bg-zinc-900 flex flex-col items-center justify-center gap-3 p-4 text-center"
        style={{ clipPath: `inset(0 0 0 ${split}%)` }}
      >
        <span className="font-mono text-[10px] text-[#CCFF00] tracking-[0.3em] uppercase">After WarpClip</span>
        <div className="w-12 h-20 rounded-lg bg-zinc-800 border border-[#CCFF00]/30 flex items-center justify-center relative">
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-[#CCFF00] ml-0.5" />
          <div className="absolute bottom-1 left-1 right-1 rounded bg-[#CCFF00] h-3 flex items-center px-1">
            <div className="h-1 bg-zinc-950 w-full rounded-full" />
          </div>
        </div>
        <p className="text-[#CCFF00] text-xs font-bold">36.5K likes</p>
      </div>

      {/* Divider */}
      <div className="absolute top-0 bottom-0 pointer-events-none z-10" style={{ left: `${split}%` }}>
        <div className="h-full w-0.5 bg-[#CCFF00]" />
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#CCFF00] flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M4 6H1M8 6h3M1 6l1.5-1.5M1 6l1.5 1.5M11 6l-1.5-1.5M11 6l-1.5 1.5" stroke="#09090b" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      <div className="absolute inset-x-0 top-3 text-center pointer-events-none z-20">
        <h2 className="text-base font-bold text-white drop-shadow">
          <span className="text-[#CCFF00]">ลาก</span>เพื่อดูความต่าง
        </h2>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20">
        <a
          href={LINE_OA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#CCFF00] px-5 py-2 text-xs font-bold text-zinc-950 hover:bg-[#b8e600] transition-colors"
        >
          เริ่มเลย
        </a>
      </div>
    </div>
  );
}
