export const ease = {
  outExpo: [0.16, 1, 0.3, 1] as [number, number, number, number],
  outQuart: [0.25, 1, 0.5, 1] as [number, number, number, number],
  inOutCubic: [0.65, 0, 0.35, 1] as [number, number, number, number],
  inOutQuint: [0.83, 0, 0.17, 1] as [number, number, number, number],
} as const;

export const spring = {
  gentle: { type: "spring" as const, stiffness: 100, damping: 20, mass: 1 },
  snappy: { type: "spring" as const, stiffness: 260, damping: 20, mass: 1 },
  bouncy: { type: "spring" as const, stiffness: 300, damping: 12, mass: 1 },
} as const;

export const duration = {
  fast: 0.2,
  base: 0.4,
  slow: 0.8,
  marker: 0.6,
  hero: 1.2,
} as const;

export const stagger = {
  tight: 0.06,
  base: 0.08,
  loose: 0.12,
} as const;
