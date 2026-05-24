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
