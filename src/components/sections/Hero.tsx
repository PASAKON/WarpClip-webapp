"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, animate } from "motion/react";
import { LINE_OA_URL } from "@/lib/utils";
import { ease, duration as dur } from "@/lib/motion-tokens";

const LINE1_WORDS = ["ตัดต่อ", "Short-Form", "Video"];
const LINE2_WORDS = ["เร็วระดับ", "Warp", "Speed"];

const STATS = [
  { to: 24, suffix: "–48", label: "ชม. ส่งงาน" },
  { to: 100, suffix: "+", label: "คลิป/เดือน" },
  { to: 98, suffix: "%", label: "ลูกค้ากลับมาใช้ซ้ำ" },
];

function StatItem({
  to,
  suffix,
  label,
  delay,
  prefersReduced,
}: {
  to: number;
  suffix: string;
  label: string;
  delay: number;
  prefersReduced: boolean | null;
}) {
  const [val, setVal] = useState(prefersReduced ? to : 0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (prefersReduced || isTouch) {
      setVal(to);
      return;
    }
    const controls = animate(0, to, {
      duration: dur.hero,
      ease: ease.outExpo,
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return controls.stop;
  }, [inView, to, prefersReduced, isTouch]);

  const shouldAnimate = !prefersReduced;

  return (
    <motion.div
      ref={ref}
      initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: dur.base, ease: ease.outExpo, delay }}
    >
      <dt className="text-2xl font-bold text-white sm:text-4xl">
        {val}{suffix}
      </dt>
      <motion.dd
        className="mt-1 text-xs text-zinc-400 sm:text-sm"
        initial={shouldAnimate ? { opacity: 0 } : false}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: dur.base, ease: ease.outExpo, delay: delay + 0.2 }}
      >
        {label}
      </motion.dd>
    </motion.div>
  );
}

export function Hero() {
  const prefersReduced = useReducedMotion();
  const shouldAnimate = !prefersReduced;

  const wordTransition = (i: number) => ({
    duration: dur.slow,
    ease: ease.outQuart,
    delay: 0.2 + i * 0.12,
  });

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

        {/* Chip */}
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400"
          initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur.base, ease: ease.outExpo }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
          เปิดรับงานใหม่ · Powered by MoonieX
        </motion.div>

        {/* Headline — word stagger */}
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {LINE1_WORDS.map((word, i) => (
            <motion.span
              key={word}
              style={{ display: "inline-block" }}
              initial={shouldAnimate ? { opacity: 0, y: 40 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={wordTransition(i)}
            >
              {word}&nbsp;
            </motion.span>
          ))}
          <br />
          <span className="relative inline-block whitespace-nowrap px-3 py-1">
            {/* Lime marker — scaleX from left */}
            <motion.span
              aria-hidden="true"
              className="absolute inset-0 -z-10 -skew-x-3 rounded-[8px_4px_12px_4px] bg-[#CCFF00]"
              style={{ transformOrigin: "left center" }}
              initial={shouldAnimate ? { scaleX: 0 } : { scaleX: 1 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: dur.marker, ease: ease.outExpo, delay: 0.4 }}
            />
            <span className="relative text-zinc-950">
              {LINE2_WORDS.map((word, i) => (
                <motion.span
                  key={word}
                  style={{ display: "inline-block" }}
                  initial={shouldAnimate ? { opacity: 0, y: 40 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={wordTransition(LINE1_WORDS.length + i)}
                >
                  {word}{i < LINE2_WORDS.length - 1 ? " " : ""}
                </motion.span>
              ))}
            </span>
          </span>
        </h1>

        {/* Subheading */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base text-zinc-400 sm:text-lg"
          initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur.base, ease: ease.outExpo, delay: 0.9 }}
        >
          บริการตัดต่อคลิปสั้นสำหรับ TikTok, Reels, YouTube Shorts.
          ส่งงาน 24–48 ชม. คุณภาพระดับ agency. ราคาคุยกันได้.
        </motion.p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.a
            href={LINE_OA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#CCFF00] px-6 py-3 text-base font-semibold text-zinc-950 transition hover:bg-[#A8D400]"
            initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur.base, ease: ease.outExpo, delay: 1.0 }}
          >
            คุยกับเราใน LINE
          </motion.a>
          <motion.a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white transition hover:bg-white/10"
            initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur.base, ease: ease.outExpo, delay: 1.1 }}
          >
            ดูราคา
          </motion.a>
        </div>

        {/* Stats — counter on scroll */}
        <dl className="mt-16 grid grid-cols-3 gap-4 text-center sm:gap-8">
          {STATS.map((s, i) => (
            <StatItem
              key={s.label}
              to={s.to}
              suffix={s.suffix}
              label={s.label}
              delay={i * 0.08}
              prefersReduced={prefersReduced}
            />
          ))}
        </dl>
      </div>
    </section>
  );
}
