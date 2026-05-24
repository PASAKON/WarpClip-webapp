'use client';

import { useRef, useState, useCallback, useEffect } from 'react';

// TODO: Replace placeholder panels with real before/after thumbnails/images once CEO provides
// the raw clip (before) and WarpClip-edited clip (after). Use next/image with fill for real media.

export function BeforeAfter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [split, setSplit] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const updateSplit = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    setSplit(Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  return (
    <section id="before-after" className="relative py-20 sm:py-28">
      <div ref={sectionRef} className="mx-auto max-w-6xl px-4 sm:px-6">

        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
            Before / After
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ดูความแตกต่างของก่อนกับหลังตัดต่อ
          </h2>
          <p className="mt-4 text-zinc-400">
            ลากตรงกลางซ้าย-ขวาเพื่อดูความเปลี่ยนแปลง · Raw footage → WarpClip edited
          </p>
        </div>

        <div
          className={`mx-auto mt-12 max-w-sm transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div
            ref={sliderRef}
            className="relative aspect-[9/16] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl border border-white/8"
            onMouseDown={() => setIsDragging(true)}
            onMouseMove={(e) => { if (isDragging) updateSplit(e.clientX); }}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchMove={(e) => { if (isDragging) updateSplit(e.touches[0].clientX); }}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* After panel — visible on right side */}
            {/* TODO: swap bg-zinc-900 placeholder with real "after" thumbnail (next/image fill) */}
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#CCFF00]/20">
                  <svg className="h-7 w-7 text-[#CCFF00]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#CCFF00]">After</p>
                <p className="mt-1 text-xs text-zinc-400">WarpClip Edited</p>
              </div>
            </div>

            {/* Before panel — clipped to left of divider */}
            {/* TODO: swap bg-zinc-800 placeholder with real "before" thumbnail (next/image fill) */}
            <div
              className="absolute inset-0 flex items-center justify-center overflow-hidden bg-zinc-800"
              style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
            >
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                  <svg className="h-7 w-7 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Before</p>
                <p className="mt-1 text-xs text-zinc-500">Raw Footage</p>
              </div>
            </div>

            {/* Lime divider */}
            <div
              className="pointer-events-none absolute inset-y-0 w-0.5 bg-[#CCFF00]"
              style={{ left: `${split}%` }}
            />

            {/* Drag handle */}
            <div
              className="pointer-events-none absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${split}%` }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CCFF00] shadow-lg ring-2 ring-[#CCFF00]/40">
                <svg className="h-5 w-5 text-zinc-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
                </svg>
              </div>
            </div>

            {/* Corner labels */}
            <span className="pointer-events-none absolute bottom-4 left-3 rounded bg-black/60 px-2 py-1 text-xs font-medium text-zinc-300 backdrop-blur-sm">
              Before
            </span>
            <span className="pointer-events-none absolute bottom-4 right-3 rounded bg-[#CCFF00]/90 px-2 py-1 text-xs font-medium text-zinc-950 backdrop-blur-sm">
              After
            </span>
          </div>

          <p className="mt-3 text-center text-xs text-zinc-500">← ลากเพื่อดูเปรียบเทียบ →</p>
        </div>

      </div>
    </section>
  );
}
