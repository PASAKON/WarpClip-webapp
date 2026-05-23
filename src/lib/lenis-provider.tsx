"use client";
import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <ReactLenis
      root
      options={
        reduced
          ? { lerp: 1, duration: 0, smoothWheel: false }
          : { lerp: 0.1, duration: 1.2, smoothWheel: true }
      }
    >
      {children}
    </ReactLenis>
  );
}
