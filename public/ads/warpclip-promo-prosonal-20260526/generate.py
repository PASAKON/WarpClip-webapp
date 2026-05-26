"""
WarpClip Meta Ad Generation — 3 ratio variants
Model: openai/gpt-image-2 via fal.ai
Budget: ≤ $1.50
"""

import os, json, time, urllib.request
import fal_client

FAL_KEY = os.environ.get("FAL_KEY") or os.environ.get("FAL_API_KEY") or os.environ.get("MOONIEX_FAL_KEY")
if not FAL_KEY:
    raise RuntimeError("Set FAL_KEY / FAL_API_KEY / MOONIEX_FAL_KEY in env")
os.environ["FAL_KEY"] = FAL_KEY

OUT = "/Users/gob/Projects/Agents/worktrees/warpclip-webapp__web_designer__task-0946ad82/public/ads/warpclip-promo-prosonal-20260526"

SHARED_STYLE = """
Overall aesthetic: premium editorial advertisement. Strict two-tone palette: near-black (#0a0a0a) background with pure white typography. One accent color only: sage green (#6B8E6F) used sparingly on the "Pro" letters in "Prosonal" and the final pipeline node "Ready".
No gradients. No rainbow colors. No sparkles. No neon glow. No competitor-style overlays.
Font style: clean geometric sans-serif for Thai text, bold condensed for English emphasis words.
Layout is crisp, minimal, professional. Finance / life-coach influencer style: polished, authoritative, readable at a glance on mobile.
""".strip()

PROMPT_1_9x16 = f"""
Design a vertical 9:16 social media advertisement (Reels / Stories format) for WarpClip, a Thai video editing service.

{SHARED_STYLE}

LAYOUT top to bottom:

[TOP SECTION 35% of height]
Large bold headline in two lines:
Line 1 Thai: "เปลี่ยน Personal Video ให้เป็น" white text large
Line 2: "Prosonal Video" where the letters "Pro" are in sage green #6B8E6F bold and "sonal Video" is in white bold. Wordplay must be readable at a glance.
Below headline: smaller subtitle in light gray: "Trader. นักลงทุน. Life Coach content."

[MIDDLE SECTION 35% of height]
Vertical three-stage pipeline diagram centered:
Box 1: "Raw video" white border white text
Arrow down with label "research + theme" in gray
Box 2: "Design" white border white text
Arrow down with label "effects + subtitle" in gray
Box 3: "Ready" sage green #6B8E6F filled background white text bold. This is the only colored box.
Clean minimal boxes with rounded corners.

[BOTTOM SECTION 30% of height]
Pricing row: "฿900" large bold white, beside it "฿1,590" with a clear strikethrough line in gray
Feature row separated by middle dots: "≤ 3 นาที  .  แก้ฟรี 3 ครั้ง  .  ส่งใน 3 วัน" small white text
Bottom bar: black square tile with "Wc" monogram in white, then wordmark "WarpClip" beside it
CTA right side: "ทักผ่าน Messenger" with arrow, white outline pill button, small Messenger chat-bubble icon outline

Thai script and numbers must render crisp and accurate.
""".strip()

PROMPT_2_1x1 = f"""
Design a square 1:1 social media advertisement for Facebook Feed for WarpClip, a Thai video editing service.

{SHARED_STYLE}

LAYOUT adapted for square format:

[TOP BAND 25% of height]
Headline stacked tight:
"เปลี่ยน Personal Video ให้เป็น"
"Prosonal Video" where "Pro" is in sage green #6B8E6F bold and "sonal Video" is white bold
Subtitle: "Trader. นักลงทุน. Life Coach content." small gray text

[MIDDLE SECTION 40% of height]
Horizontal three-stage pipeline compressed for square:
[Raw video] right arrow research + theme right arrow [Design] right arrow effects + subtitle right arrow [Ready]
Boxes are small rounded-corner labels. Raw video and Design: white outline white text. Ready: sage green #6B8E6F filled white text.
Connecting arrows and process labels in light gray, compact and legible.

[BOTTOM SECTION 35% of height]
Two columns:
Left column: "฿900" large bold white, "฿1,590" strikethrough gray below, then "≤ 3 นาที . แก้ฟรี 3 ครั้ง . ส่งใน 3 วัน" small
Right column: black tile "Wc" monogram, CTA "ทักผ่าน Messenger" with arrow and Messenger icon

Clean compact no wasted space. Thai text and numbers crisp.
""".strip()

PROMPT_3_4x5 = f"""
Design a 4:5 vertical social media advertisement for Facebook Feed mobile for WarpClip, a Thai video editing service.

{SHARED_STYLE}

LAYOUT:

[TOP SECTION 30% of height]
Bold headline:
"เปลี่ยน Personal Video ให้เป็น"
"Prosonal Video" where "Pro" is in sage green #6B8E6F bold, "sonal Video" white bold. Clear wordplay treatment.
Subtitle: "Trader. นักลงทุน. Life Coach content." light gray smaller

[MIDDLE SECTION 40% of height]
Vertical pipeline slightly compact:
[Raw video] white box
arrow down with "research + theme" gray label
[Design] white box
arrow down with "effects + subtitle" gray label
[Ready] sage #6B8E6F filled box sole colored element
Pipeline centered minimal styling

[BOTTOM SECTION 30% of height]
"฿900" large bold white and "฿1,590" strikethrough gray on same line
"≤ 3 นาที . แก้ฟรี 3 ครั้ง . ส่งใน 3 วัน" small white text
Footer row: "Wc" black tile monogram, "WarpClip" wordmark, "ทักผ่าน Messenger" CTA with arrow and Messenger icon

Sage ONLY on "Pro" in Prosonal and "Ready" node. All else B&W.
Thai text and numbers render correctly and legibly.
""".strip()

VARIANTS = [
    {
        "n": 1,
        "ratio": "9:16",
        "width": 1088,
        "height": 1920,
        "placement": "Reels / Stories",
        "prompt": PROMPT_1_9x16,
    },
    {
        "n": 2,
        "ratio": "1:1",
        "width": 1088,
        "height": 1088,
        "placement": "Feed square",
        "prompt": PROMPT_2_1x1,
    },
    {
        "n": 3,
        "ratio": "4:5",
        "width": 1088,
        "height": 1360,
        "placement": "Feed mobile-tall",
        "prompt": PROMPT_3_4x5,
    },
]


def generate_image(variant, attempt=1):
    n = variant["n"]
    print(f"\n[Variant {n} | {variant['ratio']} | attempt {attempt}] Submitting to fal.ai…")
    result = fal_client.subscribe(
        "openai/gpt-image-2",
        arguments={
            "prompt": variant["prompt"],
            "image_size": {
                "width": variant["width"],
                "height": variant["height"],
            },
            "quality": "medium",
            "num_images": 1,
        },
        with_logs=True,
    )
    return result


def download_image(url, dest_path):
    print(f"  Downloading {url[:70]}…")
    urllib.request.urlretrieve(url, dest_path)
    size_kb = os.path.getsize(dest_path) // 1024
    print(f"  Saved {dest_path} ({size_kb} KB)")
    return size_kb


def main():
    total_cost = 0.0
    for v in VARIANTS:
        n = v["n"]
        prompt_path = os.path.join(OUT, f"{n}-prompt.txt")
        image_path  = os.path.join(OUT, f"{n}-image.png")
        meta_path   = os.path.join(OUT, f"{n}-meta.json")

        with open(prompt_path, "w", encoding="utf-8") as f:
            f.write(v["prompt"])
        print(f"[{n}] Prompt saved.")

        result = None
        iterations = 0
        for attempt in range(1, 4):
            iterations = attempt
            try:
                result = generate_image(v, attempt)
                break
            except Exception as e:
                print(f"  ! Attempt {attempt} failed: {e}")
                if attempt < 3:
                    time.sleep(5)

        if result is None:
            print(f"  !! Variant {n} failed after 3 attempts — skipping")
            continue

        images = result.get("images") or []
        if not images:
            print(f"  !! No images in result: {result}")
            continue

        first = images[0]
        img_url = first.get("url") if isinstance(first, dict) else first
        size_kb = download_image(img_url, image_path)

        pixels = v["width"] * v["height"]
        est_cost = round(pixels / 1_000_000 * 0.07, 4)
        total_cost += est_cost

        meta = {
            "ratio": v["ratio"],
            "accent_hex_used": "#6B8E6F",
            "placement": v["placement"],
            "file_size_kb": size_kb,
            "gen_model": "openai/gpt-image-2",
            "gen_cost_usd": est_cost,
            "image_size": {"width": v["width"], "height": v["height"]},
            "iteration_count": iterations,
        }
        with open(meta_path, "w") as f:
            json.dump(meta, f, indent=2)
        print(f"  Meta saved: {meta_path}")

    print(f"\nDone. Estimated total cost: ${total_cost:.4f} / budget $1.50")


if __name__ == "__main__":
    main()
