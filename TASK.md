# Task task-2a1b81bf

Project: WarpClip Webapp (warpclip-webapp)
Stack: next.js, typescript, tailwind
Repo path (your worktree, work ONLY here): /Users/gob/Projects/Agents/worktrees/warpclip-webapp__developer__task-2a1b81bf
Branch: agent/developer-task-2a1b81bf
Default branch (do NOT touch): main

## Description

## Context

Phase 2 implementation of WarpClip scroll-driven motion. CEO approved spec.

**Spec source-of-truth:** `design-systems/warpclip-landing/motion/MOTION-SPEC.md` ใน mooniex-claudesign repo (just merged).

Local copy at: `/Users/gob/Projects/mooniex-claudesign/design-systems/warpclip-landing/motion/MOTION-SPEC.md`

GitHub URL: https://github.com/PASAKON/mooniex-claudesign/blob/mooniex-main/design-systems/warpclip-landing/motion/MOTION-SPEC.md

## Stack (locked)

- **Lenis** ~3KB — smooth momentum scroll, wrapped at root layout
- **motion/react** (formerly framer-motion) ~8KB — scroll triggers, useInView, useScroll, useTransform

```bash
pnpm add lenis motion
```

## Implementation order (per spec sections)

### Step 1: Foundation

1. `pnpm add lenis motion`
2. Create `src/lib/lenis-provider.tsx` — client component wrapping `<Lenis>` from `lenis/react` with options `{ lerp: 0.1, duration: 1.2, smoothWheel: true }`
3. Create `src/lib/motion-tokens.ts` — TypeScript export of easing functions + duration constants matching `motion.json` (e.g., `EASE_OUT_EXPO = [0.16, 1, 0.3, 1]`, `DURATIONS.fast = 0.2`)
4. Wrap `<body>` children in `<LenisProvider>` ใน `src/app/layout.tsx`
5. Verify Lenis works — no console errors, scroll feels smooth

### Step 2: Hero (highest priority per spec §3)

- "Powered by MoonieX" chip — fade+y on load
- Headline word stagger (split words, motion.span per word)
- Lime marker scaleX 0→1 from left after word 1 (preserve `-skew-x-3` + `inset-0`)
- CTAs fade-in after marker
- Stats counter — useInView trigger, animate number 0→24/100/98

### Step 3: Services (§4)

- 6 cards stagger 80ms fade+y on scroll-in
- Hover tilt 2deg

### Step 4: Portfolio (§5)

- 9:16 cards parallax-y via useScroll+useTransform (slower than page scroll)
- Lime play button scale-in on hover

### Step 5: Pricing (§6)

- 3 tier cards sequential fade+scale-up on scroll-in
- Pro card lime glow loop animation

### Step 6: Contact (§7) + Header (§2)

- Contact: lime CTA pulse loop, chip slide-up
- Header: fade+y on load delay 800ms, scroll bg blur (>80px)

### Step 7: reduce-motion guard

Use `useReducedMotion()` from motion/react. If true, snap-in (no animation, instant final state).

## Acceptance criteria

- [ ] `pnpm build` passes, no TypeScript errors
- [ ] Bundle delta ≤ 15KB gzip increase (Lenis + Motion ≈ 11KB)
- [ ] LCP unchanged (≤ 2.5s mobile) — hero LCP element visible BEFORE animations
- [ ] All 7 sections animated per spec
- [ ] `prefers-reduced-motion: reduce` → all animations snap to final state
- [ ] No layout property animations (transform/opacity only)
- [ ] Lighthouse Performance ≥ 90 mobile after deploy
- [ ] Visual smoke test mobile (375) + desktop (1440)

## Don't touch

- Brand colors / tokens (locked v3.0)
- Logo / wordmark
- Copy text
- Section structure (only add motion wrappers)

## Push

Branch `agent/developer-task-XXX` → PR ที่ `PASAKON/WarpClip-webapp`. Reference motion spec PR mooniex-claudesign#2 in description.

## Priority

P1 — modernization layer; landing already functional but motion = next-gen feel.

## Reference

- Spec: https://github.com/PASAKON/mooniex-claudesign/blob/mooniex-main/design-systems/warpclip-landing/motion/MOTION-SPEC.md
- Tokens: https://github.com/PASAKON/mooniex-claudesign/blob/mooniex-main/design-systems/warpclip-landing/tokens/motion.json
- Motion docs: https://motion.dev/docs
- Lenis docs: https://github.com/darkroomengineering/lenis
- Live current: https://warpclip.com

---

## Instructions

1. Read your role doc (already in your system prompt).
2. Read relevant wiki pages (use mcp__org__wiki_read).
3. Inspect the codebase you've been given (your cwd is the worktree).
4. Implement the task incrementally with commits inside your worktree.
5. Run tests if patterns exist.
6. When done, call `mcp__org__submit_report` with your final report
   (files changed, tests run, blockers). This is how the CTO learns
   you finished — without it the task stays in_progress forever.

Begin.
