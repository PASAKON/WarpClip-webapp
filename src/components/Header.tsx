import Image from "next/image";
import Link from "next/link";
import { LINE_OA_URL } from "@/lib/utils";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group" aria-label="WarpClip home">
          <Image
            src="/brand/mark.svg"
            alt=""
            width={28}
            height={28}
            priority
            className="h-7 w-7 rounded-md"
          />
          <span className="text-base tracking-tight text-white">
            <span className="font-bold">Warp</span>
            <span className="relative inline-block">
              <span
                aria-hidden
                className="absolute inset-x-[-3px] top-[35%] bottom-[2px] -z-10 bg-[#CCFF00]"
                style={{
                  transform: "skewX(-3deg) rotate(-0.4deg)",
                  borderRadius: "8px 4px 12px 6px",
                }}
              />
              <span className="font-serif font-medium italic text-black relative">Clip</span>
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-zinc-400 sm:flex">
          <Link href="#services" className="hover:text-white transition">Services</Link>
          <Link href="#portfolio" className="hover:text-white transition">Portfolio</Link>
          <Link href="#pricing" className="hover:text-white transition">Pricing</Link>
        </nav>
        <a
          href={LINE_OA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#CCFF00] px-4 py-1.5 text-sm font-semibold text-black transition hover:bg-[#A8D400]"
        >
          <span>LINE</span>
          <span className="hidden sm:inline">ติดต่อเรา</span>
        </a>
      </div>
    </header>
  );
}
