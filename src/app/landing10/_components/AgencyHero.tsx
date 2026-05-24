"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { LINE_OA_URL } from "@/lib/utils";
import { ease, duration as dur } from "@/lib/motion-tokens";

const STATS = [
  { value: "24–48", label: "ชม. ส่งงาน" },
  { value: "100+", label: "คลิป/เดือน" },
  { value: "98%", label: "ลูกค้ากลับมาใช้ซ้ำ" },
];

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

  const slant = 5;
  const beforeClip = `polygon(0 0, ${split}% 0, calc(${split}% - ${slant}vw) 100%, 0 100%)`;
  const afterClip  = `polygon(${split}% 0, 100% 0, 100% 100%, calc(${split}% - ${slant}vw) 100%)`;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden select-none cursor-col-resize"
      onMouseDown={(e) => { dragging.current = true; updateSplit(e.clientX); }}
      onTouchStart={(e) => { dragging.current = true; if (e.touches[0]) updateSplit(e.touches[0].clientX); }}
    >
      {/* BEFORE — lime diagonal panel */}
      <div className="absolute inset-0 bg-[#CCFF00]" style={{ clipPath: beforeClip }}>
        <div className="absolute inset-0 flex flex-col justify-center pl-4 sm:pl-10" style={{ paddingRight: `calc(100% - ${split}% + 6vw + 16px)` }}>
          <span className="font-mono text-[10px] text-zinc-700/70 tracking-[0.3em] uppercase mb-4 block">Before</span>
          <p className="text-4xl sm:text-6xl font-black text-zinc-700/40 leading-none">~200</p>
          <p className="text-zinc-600 text-xs mt-1">avg views / clip</p>
          <p className="text-2xl sm:text-3xl font-black text-zinc-700/40 leading-none mt-4">No Hook</p>
          <p className="text-zinc-600 text-xs mt-1">viewers leave fast</p>
        </div>
      </div>

      {/* AFTER — dark diagonal panel */}
      <div className="absolute inset-0 bg-zinc-950" style={{ clipPath: afterClip }}>
        <div
          className="absolute inset-0 flex flex-col justify-center items-end pr-4 sm:pr-10 text-right"
          style={{ paddingLeft: `calc(${split}% - ${slant}vw + 16px)` }}
        >
          <span className="font-mono text-[10px] text-[#CCFF00]/70 tracking-[0.3em] uppercase mb-4 block">After WarpClip</span>
          <p className="text-4xl sm:text-6xl font-black text-[#CCFF00] leading-none">36.5K</p>
          <p className="text-zinc-500 text-xs mt-1">likes in one clip</p>
          <p className="text-2xl sm:text-3xl font-black text-[#CCFF00]/70 leading-none mt-4">3s Hook</p>
          <p className="text-zinc-500 text-xs mt-1">viewers stay + share</p>
        </div>
      </div>

      {/* Drag handle */}
      <div className="absolute top-0 bottom-0 pointer-events-none z-10" style={{ left: `${split}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-zinc-950 border-2 border-[#CCFF00] flex items-center justify-center shadow-xl shadow-[#CCFF00]/10">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 8H2M11 8h3M2 8l2-2M2 8l2 2M14 8l-2-2M14 8l-2 2" stroke="#CCFF00" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Center overlay — production headline */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20 px-4 text-center">
        {/* Status chip */}
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/80 backdrop-blur px-3 py-1 text-xs text-zinc-400 mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur.base, ease: ease.outExpo }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
          เปิดรับงานใหม่ · ลากเพื่อดูผลลัพธ์
        </motion.div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white drop-shadow-2xl">
          {["ตัดต่อ", "Short-Form", "Video"].map((word, i) => (
            <motion.span
              key={word}
              style={{ display: "inline-block" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur.slow, ease: ease.outQuart, delay: 0.15 + i * 0.1 }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
          <br />
          {/* Lime marker line */}
          <span className="relative inline-block whitespace-nowrap px-3 py-1 mt-1">
            <motion.span
              aria-hidden="true"
              className="absolute inset-0 -z-10 -skew-x-2 rounded-[8px_4px_12px_4px] bg-[#CCFF00]"
              style={{ transformOrigin: "left center" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: dur.marker, ease: ease.outExpo, delay: 0.55 }}
            />
            <span className="relative text-zinc-950">
              {["เร็วระดับ", "Warp", "Speed"].map((word, i) => (
                <motion.span
                  key={word}
                  style={{ display: "inline-block" }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: dur.slow, ease: ease.outQuart, delay: 0.45 + i * 0.1 }}
                >
                  {word}{i < 2 ? " " : ""}
                </motion.span>
              ))}
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mt-5 max-w-xl text-sm sm:text-base text-zinc-300/80 drop-shadow leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur.base, ease: ease.outExpo, delay: 0.85 }}
        >
          บริการตัดต่อคลิปสั้นสำหรับ TikTok, Reels, YouTube Shorts.<br className="hidden sm:block" />
          ส่งงาน 24–48 ชม. คุณภาพระดับ agency. ราคาคุยกันได้.
        </motion.p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 pointer-events-auto">
          <motion.a
            href={LINE_OA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-7 py-3 text-sm font-semibold text-zinc-950 hover:bg-[#b8e600] transition-colors"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur.base, ease: ease.outExpo, delay: 0.95 }}
          >
            คุยกับเราใน LINE
          </motion.a>
          <motion.a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-7 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur.base, ease: ease.outExpo, delay: 1.05 }}
          >
            ดูราคา
          </motion.a>
        </div>

        {/* Stats row */}
        <dl className="mt-10 flex gap-8 sm:gap-14">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur.base, ease: ease.outExpo, delay: 1.1 + i * 0.08 }}
            >
              <dt className="text-2xl sm:text-3xl font-bold text-white drop-shadow">{s.value}</dt>
              <dd className="mt-1 text-xs text-zinc-400/80">{s.label}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
