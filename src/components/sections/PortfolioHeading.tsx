"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { ease, duration as dur } from "@/lib/motion-tokens";

export function PortfolioHeading() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const shouldAnimate = !prefersReduced;

  return (
    <motion.div
      ref={ref}
      className="mx-auto max-w-2xl text-center"
      initial={shouldAnimate ? { opacity: 0, y: 40 } : false}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: dur.base, ease: ease.outExpo }}
    >
      <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
        Portfolio
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        ผลงานที่เราภูมิใจ
      </h2>
      <p className="mt-4 text-zinc-400">
        คลิปจริงจากลูกค้าจริง (ดูเต็มทาง LINE — เราส่ง portfolio PDF + sample วิดีโอให้).
      </p>
    </motion.div>
  );
}
