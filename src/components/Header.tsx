"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";
import { LINE_OA_URL } from "@/lib/utils";
import { DURATIONS, EASE, STAGGER } from "@/lib/motion-tokens";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#pricing", label: "Pricing" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const shouldAnimate = !useReducedMotion();

  useLenis((lenis) => {
    setScrolled(lenis.scroll > 80);
  });

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/5 transition-[background-color,backdrop-filter] duration-[400ms] ease-in-out ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-md"
          : "bg-transparent backdrop-blur-none"
      }`}
      initial={shouldAnimate ? { opacity: 0, y: -16 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATIONS.fast, ease: EASE.outExpo, delay: 0.8 }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group" aria-label="WarpClip home">
          <Image
            src="/brand/mark.svg"
            alt=""
            width={28}
            height={28}
            priority
            className="h-7 w-7 rounded-md ring-1 ring-white/10"
          />
          <span className="text-base font-semibold tracking-tight text-white">
            WarpClip
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-400 sm:flex">
          {NAV_LINKS.map(({ href, label }, i) => (
            <motion.div
              key={href}
              initial={shouldAnimate ? { opacity: 0, y: -8 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: DURATIONS.fast,
                ease: EASE.outExpo,
                delay: 0.8 + i * STAGGER.tight,
              }}
            >
              <Link href={href} className="hover:text-white transition">
                {label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <a
          href={LINE_OA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#CCFF00] px-4 py-1.5 text-sm font-semibold text-zinc-950 transition hover:bg-[#A8D400]"
        >
          <span>LINE</span>
          <span className="hidden sm:inline">ติดต่อเรา</span>
        </a>
      </div>
    </motion.header>
  );
}
