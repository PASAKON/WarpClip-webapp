/**
 * WarpClip landing data layer.
 *
 * - PORTFOLIO_ITEMS: real TikTok clips from editor Oikill (PR #12)
 * - PRICING_TIERS: 3 service tiers
 * - SERVICES_DATA: 6 service offerings (used by landing variants)
 */

export const PORTFOLIO_ITEMS = [
  {
    title: "Elon จะเอา AI บนดินยกขึ้นอวกาศ",
    creator: "NewWorldFinance",
    category: "Tech / Crypto",
    engagement: "36.5K likes",
    url: "https://vt.tiktok.com/ZSx5g5YKy/",
  },
  {
    title: "Exness vs IUS",
    creator: "กอล์ฟ พัสกร",
    category: "Finance / Trading",
    engagement: "3.5K likes",
    url: "https://vt.tiktok.com/ZSx5bo6vW/",
  },
  {
    title: "ทำไม Big4 คือทางผ่านของคนมีฝัน",
    creator: "RonNy BBA ตัวตึง",
    category: "Career / Education",
    engagement: "3.4K likes",
    url: "https://vt.tiktok.com/ZSx5p2kaD/",
  },
  {
    title: "Itdellik channel",
    creator: "Itdellik",
    category: "Lifestyle / Tech",
    engagement: "15K followers · 266K likes",
    url: "https://www.tiktok.com/@itdellik_",
  },
  {
    title: "GAP คืออะไร",
    creator: "กอล์ฟ พัสกร",
    category: "Finance / Trading",
    engagement: "362 likes",
    url: "https://vt.tiktok.com/ZSx5bGQXb/",
  },
] as const;

export type PortfolioItem = (typeof PORTFOLIO_ITEMS)[number];

export const PRICING_TIERS = [
  {
    name: "Basic",
    price: "990",
    unit: "/คลิป",
    desc: "เริ่มต้นทดลอง",
    features: [
      "ตัดต่อคลิป ≤ 60 วินาที",
      "Sub-title basic",
      "ส่งงาน 48 ชม.",
      "แก้ไขฟรี 1 ครั้ง",
    ],
    accent: false,
  },
  {
    name: "Pro",
    price: "1,990",
    unit: "/คลิป",
    desc: "ใช้บ่อยที่สุด",
    features: [
      "ทุกอย่างของ Basic",
      "Sub-title + sound effect",
      "Color grading",
      "ส่งงาน 24 ชม.",
      "แก้ไขฟรี 3 ครั้ง",
    ],
    accent: true,
  },
  {
    name: "Premium",
    price: "ติดต่อ",
    unit: "",
    desc: "Custom + bulk",
    features: [
      "ทุกอย่างของ Pro",
      "B-roll sourcing",
      "Thumbnail design",
      "Priority delivery",
      "แก้ไขไม่จำกัด",
    ],
    accent: false,
  },
];

export const SERVICES_DATA = [
  {
    key: "editing",
    title: "Short-Form Editing",
    desc: "ตัดต่อคลิปสั้น TikTok / Reels / Shorts ตามสไตล์แบรนด์คุณ. Hook แรง, ตัดจังหวะกับเสียง, sub-title อ่านง่าย.",
  },
  {
    key: "subtitle",
    title: "Subtitle & Sound FX",
    desc: "ใส่ sub-title sync เสียง + sound effect ทำให้คลิปไม่ silent. Multi-language ได้ (ไทย/อังกฤษ).",
  },
  {
    key: "color",
    title: "Color Grading",
    desc: "ปรับสีให้ดูพรีเมียม. Match วิดีโอชุดเดียวกันให้ feel เดียวกัน. รองรับ LUT จากคุณได้.",
  },
  {
    key: "talking",
    title: "Talking Head Cut",
    desc: "ตัด filler word ('เออ', 'อ่า', 'um') ออกหมด. ทำให้พูดต่อเนื่อง 80-90% ของเวลาคลิป.",
  },
  {
    key: "broll",
    title: "B-Roll Sourcing",
    desc: "หาฟุตเทจ stock + จัดวางเสริมจุด narrative. คุณส่งบทมา เราเสริมภาพให้.",
  },
  {
    key: "thumbnail",
    title: "Thumbnail Design",
    desc: "ทำ thumbnail สำหรับ YouTube Shorts + horizontal repost. CTR-optimized.",
  },
];
