const ITEMS = [
  { title: "Trader Daily Recap", category: "Finance", color: "from-indigo-500/40 to-purple-600/40" },
  { title: "Product Launch Hook", category: "E-commerce", color: "from-emerald-500/40 to-teal-600/40" },
  { title: "Talking Head Series", category: "Education", color: "from-amber-500/40 to-orange-600/40" },
  { title: "Lifestyle Vlog Cut", category: "Lifestyle", color: "from-pink-500/40 to-rose-600/40" },
  { title: "Tutorial Walkthrough", category: "How-to", color: "from-cyan-500/40 to-blue-600/40" },
  { title: "Brand Story Teaser", category: "Branding", color: "from-violet-500/40 to-fuchsia-600/40" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-violet-400">
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
              className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/5"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
              <div className="absolute inset-0 bg-zinc-950/40 transition group-hover:bg-zinc-950/20" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-white/60">
                  {item.category}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                <div className="rounded-full bg-white/10 p-4 backdrop-blur-sm ring-1 ring-white/20">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
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
