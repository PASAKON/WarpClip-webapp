<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:brand-truth -->
# Brand asset rule (READ BEFORE BRIEFING ANY VISUAL)

Brand source of truth = **running code**, not wiki:
- Color tokens: `src/app/globals.css`
- Body theme: `src/app/layout.tsx` (`bg-zinc-950 text-zinc-100`)
- Signature visual: `src/components/sections/Hero.tsx` (lime skewed marker)
- Mark: `public/brand/mark.svg` (lime tile + W stroke dark)

**Canonical doc:** [`WarpClip-wikis / 10-Architecture / Brand-Truth.md`](https://github.com/PASAKON/WarpClip-wikis/blob/main/10-Architecture/Brand-Truth.md)

**TL;DR theme:**
- Base: `#09090b` zinc-950 dark
- Accent: `#CCFF00` neon lime (NOT sage, NOT cyan, NOT gradient)
- Signature: lime skewed marker `skewX(-3deg) rounded[8px 4px 12px 4px]`
- Mark: lime tile, dark W stroke

**Stale — do NOT use:**
- `WarpClip-wikis/40-Decisions/0006-brand-v2-bw-premium.md` (deferred B&W pivot)
- `WarpClip-design/WarpClip-Brand-Brief.md` § 4 (v1.0 tri-color)
- `public/brand/mark-512.png` (v1.0 indigo gradient W)

**For brand-strict creative:** NO image gen API (fal.ai / gpt-image-2 / midjourney
hallucinate hex codes). Use manual composition only: HTML→Playwright OR PIL/cairo
OR rsvg-convert. Commit composition source alongside output.
<!-- END:brand-truth -->
