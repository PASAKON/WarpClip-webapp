const ITEMS = [
  { title: "Trader Daily Recap", category: "Finance" },
  { title: "Product Launch Hook", category: "E-commerce" },
  { title: "Talking Head Series", category: "Education" },
  { title: "Lifestyle Vlog Cut", category: "Lifestyle" },
  { title: "Tutorial Walkthrough", category: "How-to" },
  { title: "Brand Story Teaser", category: "Branding" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
            Portfolio
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ผลงานที่เราภูมิใจ
          </h2>
          <p className="mt-4 text-zinc-400">
            คลิปจริงจากลูกค้าจริง (ดูเต็มทาง LINE — เราส่ง portfolio PDF + sample วิดีโอให้).
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/8 bg-zinc-900"
            >
              <div className="absolute inset-0 bg-zinc-800/50 transition group-hover:bg-zinc-800/30" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                  {item.category}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                <div className="rounded-full bg-[#CCFF00] p-4 ring-1 ring-[#CCFF00]/40">
                  <svg className="h-6 w-6 text-zinc-950" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
