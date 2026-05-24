"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LINE_OA_URL } from "@/lib/utils";

export function VariantChip() {
  return (
    <Link
      href="/landing10"
      className="fixed right-4 top-4 z-50 rounded-full border border-white/10 bg-zinc-900/90 px-3 py-1.5 text-xs text-zinc-400 backdrop-blur transition hover:border-[#CCFF00]/40 hover:text-white"
    >
      Variant 9 / 10 · ดูแบบอื่น →
    </Link>
  );
}

export function CinematicHero() {
  const [split, setSplit] = useState(50);
  const dragging = useRef(false);
  const dragZoneRef = useRef<HTMLDivElement>(null);

  const updateSplit = useCallback((clientX: number) => {
    const parent = dragZoneRef.current?.parentElement;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
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
    <div className="relative" style={{ height: "180vh" }}>
      {/* Sticky background visual */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* BEFORE */}
        <div className="absolute inset-0 bg-zinc-900">
          <div className="absolute inset-0 flex items-center" style={{ paddingRight: `${100 - split}%`, paddingLeft: "6%" }}>
            <div className="text-left min-w-0">
              <span className="font-mono text-xs text-zinc-600 tracking-[0.3em] uppercase block mb-5">Before</span>
              <div className="space-y-2.5">
                {["ไม่มี hook", "ไม่มี subtitle", "view ต่ำ"].map((t) => (
                  <div key={t} className="flex items-center gap-3 text-zinc-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/40 shrink-0" />
                    <span className="text-sm truncate">{t}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-4xl sm:text-5xl font-bold text-zinc-700">~200</div>
              <div className="text-zinc-600 text-sm mt-1">views / clip</div>
            </div>
          </div>
        </div>

        {/* AFTER */}
        <div
          className="absolute inset-0 bg-zinc-950"
          style={{ clipPath: `inset(0 0 0 ${split}%)` }}
        >
          <div className="absolute inset-0 flex items-center justify-end" style={{ paddingLeft: `${split + 4}%`, paddingRight: "6%" }}>
            <div className="text-right min-w-0">
              <span className="font-mono text-xs text-[#CCFF00] tracking-[0.3em] uppercase block mb-5">After WarpClip</span>
              <div className="space-y-2.5">
                {["Hook 3 วินาที", "Subtitle sync", "Color graded"].map((t) => (
                  <div key={t} className="flex items-center justify-end gap-3 text-zinc-300">
                    <span className="text-sm truncate">{t}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] shrink-0" />
                  </div>
                ))}
              </div>
              <div className="mt-8 text-4xl sm:text-5xl font-bold text-[#CCFF00]">36.5K</div>
              <div className="text-zinc-500 text-sm mt-1">engagement / clip</div>
            </div>
          </div>
        </div>

        {/* Drag divider */}
        <div className="absolute top-0 bottom-0 pointer-events-none z-10" style={{ left: `${split}%` }}>
          <div className="h-full w-px bg-[#CCFF00]/70" />
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#CCFF00] flex items-center justify-center shadow-xl shadow-[#CCFF00]/20">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5 8H2M11 8h3M2 8l2-2M2 8l2 2M14 8l-2-2M14 8l-2 2" stroke="#09090b" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Drag zone */}
        <div
          ref={dragZoneRef}
          className="absolute top-0 bottom-0 w-20 z-20 cursor-col-resize"
          style={{ left: `calc(${split}% - 40px)` }}
          onMouseDown={(e) => { dragging.current = true; updateSplit(e.clientX); }}
          onTouchStart={(e) => { dragging.current = true; if (e.touches[0]) updateSplit(e.touches[0].clientX); }}
        />

        {/* Center headline */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 pointer-events-none z-30">
          <p className="text-zinc-600 text-xs tracking-widest uppercase mb-2">ลากเพื่อดู · scroll ต่อไป</p>
          <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
        </div>
      </div>

      {/* Overlaid content scrolling over sticky */}
      <div className="absolute inset-x-0 top-0 flex flex-col items-center justify-start pt-[10vh] pointer-events-none px-6">
        <div className="text-center max-w-lg">
          <h1 className="text-5xl sm:text-7xl font-bold text-white leading-tight">
            เห็น<br /><span className="text-[#CCFF00]">ความต่าง?</span>
          </h1>
          <p className="mt-6 text-zinc-400 text-base sm:text-lg">WarpClip ทำให้คลิปคุณดูพรีเมียม ส่งงาน 24 ชม.</p>
          <a href={LINE_OA_URL} target="_blank" rel="noopener noreferrer"
            className="pointer-events-auto mt-8 inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-8 py-4 text-base font-bold text-zinc-950 hover:bg-[#b8e600] transition-colors">
            เริ่มต้นเลย
          </a>
        </div>
      </div>
    </div>
  );
}
