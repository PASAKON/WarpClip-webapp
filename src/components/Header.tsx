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
            className="h-7 w-7 rounded-md ring-1 ring-white/10"
          />
          <span className="text-base font-semibold tracking-tight text-white">
            WarpClip
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
          className="inline-flex items-center gap-1.5 rounded-full bg-[#CCFF00] px-4 py-1.5 text-sm font-semibold text-zinc-950 transition hover:bg-[#A8D400]"
        >
          <span>LINE</span>
          <span className="hidden sm:inline">ติดต่อเรา</span>
        </a>
      </div>
    </header>
  );
}
