# Task task-39fcb925

Project: WarpClip Webapp (warpclip-webapp)
Stack: next.js, typescript, tailwind
Repo path (your worktree, work ONLY here): /Users/gob/Projects/Agents/worktrees/warpclip-webapp__web_designer__task-39fcb925
Branch: agent/web_designer-task-39fcb925
Default branch (do NOT touch): main

## Description

## Context

CEO reviewed /landing1-5 (already live) and **REJECTED ALL 5**. Direction unclear. Designer needs to **ask CEO clarifying questions FIRST** before designing this round.

## Protocol — STEP 1: Ask before design

**Before writing any code**, send 3-5 focused questions back to CTO via your report. CTO will relay to CEO. Don't guess CEO's preferences — ask.

Example question categories (pick what's most useful, designer judgment):

- **Tone:** ทันสมัย / luxe / playful / minimal / bold / professional?
- **Target audience:** content creator solo / agency / SMB / corporate brand / influencer?
- **Hero direction:** big video showcase / static headline / interactive demo / split-screen comparison?
- **Reference sites:** มี sites ที่ CEO ชอบ + อยากให้คล้ายมั้ย? (Linear, Vercel, Apple, Stripe, Framer, etc.)
- **What rejected in 1-5:** มีอะไรเฉพาะที่ทำให้ทั้ง 5 fail? (too plain / too busy / wrong vibe / wrong layout?)
- **Motion preference:** subtle / dramatic / 3D / scroll-driven / hover-only?
- **Imagery:** real videos embedded / illustrations / abstract motion / typography only?

ส่งคำถาม → submit_report status `blocked_human` พร้อม questions list. รอ CTO ตอบ แล้วค่อย design.

## Protocol — STEP 2: Design after answers

After CEO answers via CTO:

- Build 5 new variants at `/landing6`, `/landing7`, `/landing8`, `/landing9`, `/landing10`
- Each = full standalone page
- Each MUST be **dramatically different** from 1-5 + from each other
- Designer has **broad creative freedom** — can use images, video, 3D, advanced motion, illustrations, asymmetric layouts, full-bleed media, split sections, sticky pin, etc.
- Use latest motion library (Lenis + motion/react now installed) creatively

## Brand constraints (still locked)

ห้ามเปลี่ยน:
- Color tokens: lime `#CCFF00`, zinc-950 base, zinc-900 surface, zinc-100 fg
- Logo Wc lime tile + wordmark "Warp" sans + "Clip" italic
- ห้าม emoji
- ห้าม indigo/violet/fuchsia gradient (v1.0 archived)
- Geist Sans + Newsreader Italic (per wordmark)

อนุญาตเพิ่ม:
- Lime opacity / tint shifts (e.g., `bg-[#CCFF00]/20`, `text-[#CCFF00]/60`)
- Subtle gradient combining lime + zinc only
- Custom illustrations / abstract shapes in lime+zinc
- Image overlays
- Video backgrounds (if asset available, otherwise skip)

## Required sections (per variant)

ครอบเรื่องเดียวกัน แต่ presentation ต่างกัน:
- Hero
- Services / Value props
- Portfolio (use real TikTok data — reuse oembed)
- Pricing (use PRICING_TIERS from `@/data/portfolio`)
- LINE CTA

## Implementation rules

- Each variant standalone — own `_components/` ใต้ `src/app/landingN/`
- Reuse: `src/data/portfolio.ts`, `src/lib/utils.ts`, `src/lib/tiktok-oembed.ts`, motion library
- ห้าม import production sections (`src/components/sections/*`)
- `noindex` meta on each
- Top-right floating chip: "Variant N / 10 · ดูแบบอื่น →" linking to `/landing(N+1)` (wraps 10→6)
- Thesis comment ที่ top of each page.tsx (3-5 sentences ว่า design ทำไม)

## Acceptance criteria

- [ ] Q&A round complete first (blocked_human submit → CTO answer → designer iter)
- [ ] 5 variants /landing6-10 each dramatically different
- [ ] Brand tokens respected
- [ ] noindex meta per route
- [ ] Real TikTok oEmbed thumbnails render
- [ ] LINE CTA preserved
- [ ] Mobile responsive
- [ ] `pnpm build` passes

## Don't touch

- Production / route
- Existing /landing1-5
- Brand tokens / logo
- src/components/sections/*

## Push

After Q&A + design done → branch + PR ที่ WarpClip-webapp.

## Reference

- Production: https://warpclip.com
- 5 rejected variants: /landing1 (Minimal Editorial), /landing2 (Magazine), /landing3 (Terminal), /landing4 (Lime-heavy), /landing5 (Apple) — CEO rejected all
- Motion library + spec: `design-systems/warpclip-landing/motion/MOTION-SPEC.md`

## Priority

P1 — CEO blocked on direction; needs broader exploration.

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
