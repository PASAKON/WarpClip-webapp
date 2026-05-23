import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="relative h-6 w-6 overflow-hidden rounded-md bg-gradient-to-br from-indigo-500 to-violet-600">
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">W</span>
            </div>
            <span className="text-sm font-medium text-zinc-300">WarpClip</span>
          </div>

          <nav className="flex items-center gap-6 text-xs text-zinc-500">
            <Link href="#services" className="hover:text-zinc-300 transition">Services</Link>
            <Link href="#portfolio" className="hover:text-zinc-300 transition">Portfolio</Link>
            <Link href="#pricing" className="hover:text-zinc-300 transition">Pricing</Link>
            <Link href="#contact" className="hover:text-zinc-300 transition">Contact</Link>
          </nav>

          <p className="text-xs text-zinc-600">
            © {year} MoonieX Company · WarpClip is a service of MoonieX
          </p>
        </div>
      </div>
    </footer>
  );
}
