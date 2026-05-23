"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useReducedMotion,
} from "motion/react";
import { DURATIONS, EASE } from "@/lib/motion-tokens";

const ITEMS = [
  { title: "Trader Daily Recap", category: "Finance" },
  { title: "Product Launch Hook", category: "E-commerce" },
  { title: "Talking Head Series", category: "Education" },
  { title: "Lifestyle Vlog Cut", category: "Lifestyle" },
  { title: "Tutorial Walkthrough", category: "How-to" },
  { title: "Brand Story Teaser", category: "Branding" },
];

function PortfolioCard({
  item,
  index,
  sectionRef,
}: {
  item: (typeof ITEMS)[0];
  index: number;
  sectionRef: React.RefObject<HTMLElement | null>;
}) {
  const shouldAnimate = !useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const isOdd = index % 2 !== 0;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldAnimate ? (isOdd ? [60, -60] : [-60, 60]) : [0, 0]
  );

  return (
    <motion.div
      style={{ y }}
      className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/8 bg-zinc-900"
      whileHover={shouldAnimate ? "hovered" : undefined}
    >
      <div className="absolute inset-0 bg-zinc-800/50 transition group-hover:bg-zinc-800/30" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
          {item.category}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
      </div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        variants={{ hovered: { opacity: 1 } }}
        initial={{ opacity: shouldAnimate ? 0 : 1 }}
        transition={{ duration: DURATIONS.fast, ease: EASE.outExpo }}
      >
        <motion.div
          className="rounded-full bg-[#CCFF00] p-4 ring-1 ring-[#CCFF00]/40"
          variants={
            shouldAnimate ? { hovered: { scale: 1, opacity: 1 } } : undefined
          }
          initial={
            shouldAnimate ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }
          }
          transition={{ type: "spring", stiffness: 260, damping: 20, mass: 1 }}
        >
          <svg
            className="h-6 w-6 text-zinc-950"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-10% 0px" });
  const shouldAnimate = !useReducedMotion();

  return (
    <section ref={sectionRef} id="portfolio" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          ref={headingRef}
          className="mx-auto max-w-2xl text-center"
          initial={shouldAnimate ? { opacity: 0, y: 40 } : false}
          animate={headingInView || !shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: DURATIONS.base, ease: EASE.outExpo }}
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

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <PortfolioCard
              key={item.title}
              item={item}
              index={i}
              sectionRef={sectionRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
