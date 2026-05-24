"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll, useReducedMotion } from "motion/react";
import { LINE_OA_URL } from "@/lib/utils";
import { ease, duration as dur } from "@/lib/motion-tokens";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#pricing", label: "Pricing" },
];

export function Header() {
  const prefersReduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (y) => setScrolled(y > 80));
  }, [scrollY]);

  const shouldAnimate = !prefersReduced;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5">
      {/* Scroll-driven background */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          backgroundColor: scrolled ? "rgba(9,9,11,0.9)" : "rgba(9,9,11,0)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: dur.base, ease: ease.inOutCubic }}
      />

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: -16 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur.fast, ease: ease.outExpo, delay: 0.8 }}
        >
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
        </motion.div>

        {/* Nav — stagger 60ms */}
        <nav className="hidden items-center gap-6 text-sm text-zinc-400 sm:flex">
          {NAV_LINKS.map(({ href, label }, i) => (
            <motion.div
              key={href}
              initial={shouldAnimate ? { opacity: 0, y: -16 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: dur.fast,
                ease: ease.outExpo,
                delay: 0.8 + i * 0.06,
              }}
            >
              <Link href={href} className="hover:text-white transition">
                {label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: -16 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: dur.fast,
            ease: ease.outExpo,
            delay: 0.8 + NAV_LINKS.length * 0.06,
          }}
        >
          <a
            href={LINE_OA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#CCFF00] px-4 py-1.5 text-sm font-semibold text-zinc-950 transition hover:bg-[#A8D400]"
          >
            <span>LINE</span>
            <span className="hidden sm:inline">ติดต่อเรา</span>
          </a>
        </motion.div>
      </div>
    </header>
  );
}
