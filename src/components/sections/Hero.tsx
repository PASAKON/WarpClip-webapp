"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView, useReducedMotion, animate } from "motion/react";
import { LINE_OA_URL } from "@/lib/utils";
import { DURATIONS, EASE, STAGGER } from "@/lib/motion-tokens";

const LINE1 = ["ตัดต่อ", "Short-Form", "Video"];
const LINE2 = ["เร็วระดับ", "Warp", "Speed"];

const STATS = [
  { num: 24, suffix: "–48", label: "ชม. ส่งงาน" },
  { num: 100, suffix: "+", label: "คลิป/เดือน" },
  { num: 98, suffix: "%", label: "ลูกค้ากลับมาใช้ซ้ำ" },
];

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.slow, ease: EASE.outQuart },
  },
};

function StatItem({
  num,
  suffix,
  label,
  delay,
}: {
  num: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [count, setCount] = useState(0);
  const shouldAnimate = !useReducedMotion();
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (!shouldAnimate || isTouch) {
      setCount(num);
      return;
    }
    const ctrl = animate(0, num, {
      duration: DURATIONS.hero,
      ease: EASE.outExpo,
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => ctrl.stop();
  }, [inView, num, shouldAnimate, isTouch]);

  return (
    <motion.div
      ref={ref}
      initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
      animate={inView || !shouldAnimate ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: DURATIONS.base, ease: EASE.outExpo, delay }}
    >
      <dt className="text-2xl font-bold text-white sm:text-4xl">
        {count}
        {suffix}
      </dt>
      <motion.dd
        className="mt-1 text-xs text-zinc-400 sm:text-sm"
        initial={shouldAnimate ? { opacity: 0 } : false}
        animate={inView || !shouldAnimate ? { opacity: 1 } : {}}
        transition={{
          duration: DURATIONS.base,
          ease: EASE.outExpo,
          delay: delay + 0.2,
        }}
      >
        {label}
      </motion.dd>
    </motion.div>
  );
}

export function Hero() {
  const shouldAnimate = !useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        {/* Chip */}
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400"
          initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATIONS.base, ease: EASE.outExpo }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
          เปิดรับงานใหม่ · Powered by MoonieX
        </motion.div>

        {/* Headline */}
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {/* Line 1 — word stagger */}
          <motion.span
            className="block"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: STAGGER.loose,
                  delayChildren: 0.2,
                },
              },
            }}
            initial={shouldAnimate ? "hidden" : "show"}
            animate="show"
          >
            {LINE1.map((word) => (
              <motion.span
                key={word}
                className="inline-block mr-[0.25em]"
                variants={shouldAnimate ? wordVariants : {}}
              >
                {word}
              </motion.span>
            ))}
          </motion.span>

          {/* Line 2 — lime marker + word stagger */}
          <span className="relative inline-block whitespace-nowrap px-3 py-1">
            <motion.span
              aria-hidden="true"
              className="absolute inset-0 -z-10 -skew-x-3 rounded-[8px_4px_12px_4px] bg-[#CCFF00]"
              style={{ transformOrigin: "left center" }}
              initial={shouldAnimate ? { scaleX: 0 } : { scaleX: 1 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: DURATIONS.marker,
                ease: EASE.outExpo,
                delay: 0.4,
              }}
            />
            <motion.span
              className="relative inline"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: STAGGER.loose,
                    delayChildren: 0.2 + LINE1.length * STAGGER.loose,
                  },
                },
              }}
              initial={shouldAnimate ? "hidden" : "show"}
              animate="show"
            >
              {LINE2.map((word) => (
                <motion.span
                  key={word}
                  className="inline-block mr-[0.25em] text-zinc-950"
                  variants={shouldAnimate ? wordVariants : {}}
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
          </span>
        </h1>

        {/* Subheading */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base text-zinc-400 sm:text-lg"
          initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATIONS.base, ease: EASE.outExpo, delay: 0.9 }}
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
            transition={{ duration: DURATIONS.base, ease: EASE.outExpo, delay: 1.0 }}
          >
            คุยกับเราใน LINE
          </motion.a>
          <motion.a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white transition hover:bg-white/10"
            initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.base, ease: EASE.outExpo, delay: 1.1 }}
          >
            ดูราคา
          </motion.a>
        </div>

        {/* Stats */}
        <dl className="mt-16 grid grid-cols-3 gap-4 text-center sm:gap-8">
          {STATS.map((s, i) => (
            <StatItem
              key={s.label}
              num={s.num}
              suffix={s.suffix}
              label={s.label}
              delay={i * STAGGER.base}
            />
          ))}
        </dl>
      </div>
    </section>
  );
}
