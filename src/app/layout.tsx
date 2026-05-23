import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LenisProvider } from "@/lib/lenis-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://warpclip.com"),
  title: {
    default: "WarpClip — ตัดต่อ Short-Form Video เร็วระดับ Warp Speed",
    template: "%s · WarpClip",
  },
  description:
    "บริการตัดต่อคลิปสั้น TikTok / Reels / YouTube Shorts. ส่งงาน 24-48 ชม. คุณภาพระดับ agency. Sub-brand ของ MoonieX.",
  keywords: [
    "ตัดต่อ video",
    "ตัดต่อคลิปสั้น",
    "TikTok editing",
    "Reels editing",
    "Shorts editing",
    "WarpClip",
    "MoonieX",
  ],
  authors: [{ name: "MoonieX Company" }],
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://warpclip.com",
    siteName: "WarpClip",
    title: "WarpClip — ตัดต่อ Short-Form Video เร็วระดับ Warp Speed",
    description: "บริการตัดต่อคลิปสั้น TikTok / Reels / Shorts. ส่งงาน 24-48 ชม.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "WarpClip — ตัดต่อ Short-Form Video เร็วระดับ Warp Speed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WarpClip — Short-Form Video Editing",
    description: "ตัดต่อคลิปสั้น คุณภาพ agency ส่งงาน 24-48 ชม.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-zinc-950 text-zinc-100">
        <LenisProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LenisProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
