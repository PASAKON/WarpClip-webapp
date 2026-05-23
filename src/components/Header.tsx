import Link from "next/link";
import { LINE_OA_URL } from "@/lib/utils";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-7 w-7 overflow-hidden rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 ring-1 ring-white/10">
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">W</span>
          </div>
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
          className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-4 py-1.5 text-sm font-medium text-zinc-950 transition hover:bg-emerald-400"
        >
          <span>LINE</span>
          <span className="hidden sm:inline">ติดต่อเรา</span>
        </a>
      </div>
    </header>
  );
}
