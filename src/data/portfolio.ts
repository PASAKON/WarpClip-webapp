export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  tiktokUrl?: string;
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: "1", title: "Trader Daily Recap", category: "Finance" },
  { id: "2", title: "Product Launch Hook", category: "E-commerce" },
  { id: "3", title: "Talking Head Series", category: "Education" },
  { id: "4", title: "Lifestyle Vlog Cut", category: "Lifestyle" },
  { id: "5", title: "Tutorial Walkthrough", category: "How-to" },
  { id: "6", title: "Brand Story Teaser", category: "Branding" },
];

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
