export const DURATIONS = {
  fast: 0.2,
  base: 0.4,
  slow: 0.8,
  hero: 1.2,
  marker: 0.6,
} as const;

export const STAGGER = {
  tight: 0.06,
  base: 0.08,
  loose: 0.12,
} as const;

export const EASE = {
  outExpo: [0.16, 1, 0.3, 1] as [number, number, number, number],
  outQuart: [0.25, 1, 0.5, 1] as [number, number, number, number],
  inOutCubic: [0.65, 0, 0.35, 1] as [number, number, number, number],
  inOutQuint: [0.83, 0, 0.17, 1] as [number, number, number, number],
};

export const SPRING = {
  gentle: { type: "spring" as const, stiffness: 100, damping: 20, mass: 1 },
  snappy: { type: "spring" as const, stiffness: 260, damping: 20, mass: 1 },
};
