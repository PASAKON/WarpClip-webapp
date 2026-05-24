"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LINE_OA_URL } from "@/lib/utils";

export function VariantChip() {
  return (
    <Link
      href="/landing6"
      className="fixed right-4 top-4 z-50 rounded-full border border-white/10 bg-zinc-900/90 px-3 py-1.5 text-xs text-zinc-400 backdrop-blur transition hover:border-[#CCFF00]/40 hover:text-white"
    >
      Variant 10 / 10 · ดูแบบอื่น →
    </Link>
  );
}

export function AgencyHero() {
  const [split, setSplit] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSplit = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSplit(Math.min(85, Math.max(15, ((clientX - rect.left) / rect.width) * 100)));
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

  const slant = 6;
  const beforeClip = `polygon(0 0, ${split}% 0, calc(${split}% - ${slant}vw) 100%, 0 100%)`;
  const afterClip = `polygon(${split}% 0, 100% 0, 100% 100%, calc(${split}% - ${slant}vw) 100%)`;

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden select-none cursor-col-resize"
      onMouseDown={(e) => { dragging.current = true; updateSplit(e.clientX); }}
      onTouchStart={(e) => { dragging.current = true; if (e.touches[0]) updateSplit(e.touches[0].clientX); }}
    >
      {/* BEFORE — lime panel */}
      <div className="absolute inset-0 bg-[#CCFF00]" style={{ clipPath: beforeClip }}>
        <div className="absolute inset-0 flex flex-col justify-center pl-6 sm:pl-14 pr-[15%]">
          <span className="font-mono text-[10px] text-zinc-700 tracking-[0.3em] uppercase mb-6 block">Before Editing</span>
          <div className="space-y-5">
            <div>
              <p className="text-5xl sm:text-7xl font-black text-zinc-700/50 leading-none">~200</p>
              <p className="text-zinc-600 text-sm mt-1">avg views / clip</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-zinc-700/50 leading-none">No Hook</p>
              <p className="text-zinc-600 text-sm mt-1">viewers leave in 1s</p>
            </div>
          </div>
        </div>
      </div>

      {/* AFTER — dark panel */}
      <div className="absolute inset-0 bg-zinc-950" style={{ clipPath: afterClip }}>
        <div className="absolute inset-0 flex flex-col justify-center items-end pr-6 sm:pr-14 pl-[15%] text-right">
          <span className="font-mono text-[10px] text-[#CCFF00] tracking-[0.3em] uppercase mb-6 block">After WarpClip</span>
          <div className="space-y-5">
            <div>
              <p className="text-5xl sm:text-7xl font-black text-[#CCFF00] leading-none">36.5K</p>
              <p className="text-zinc-500 text-sm mt-1">likes in one clip</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-[#CCFF00]/80 leading-none">3s Hook</p>
              <p className="text-zinc-500 text-sm mt-1">viewers stay and share</p>
            </div>
          </div>
        </div>
      </div>

      {/* Handle */}
      <div className="absolute top-0 bottom-0 pointer-events-none z-10" style={{ left: `${split}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-zinc-950 border-2 border-[#CCFF00] flex items-center justify-center shadow-xl">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M6 9H2M12 9h4M2 9l2.5-2.5M2 9l2.5 2.5M16 9l-2.5-2.5M16 9l-2.5 2.5" stroke="#CCFF00" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Centered wordmark */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center pointer-events-none z-20 px-4">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-none drop-shadow-2xl tracking-tight">WARPCLIP</h1>
        <p className="mt-3 text-zinc-300/80 text-xs sm:text-sm tracking-[0.3em] uppercase">Short-Form Video Studio</p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-center">
        <p className="text-zinc-500 text-xs tracking-widest uppercase mb-4 pointer-events-none">ลากเพื่อเปรียบเทียบ</p>
        <a href={LINE_OA_URL} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-7 py-3 text-sm font-black text-zinc-950 hover:bg-[#b8e600] transition-colors tracking-wide">
          START NOW
        </a>
      </div>
    </section>
  );
}
