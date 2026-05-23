import { LINE_OA_URL } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute right-1/4 top-2/3 h-[20rem] w-[20rem] rounded-full bg-violet-500/10 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          เปิดรับงานใหม่ · Powered by MoonieX
        </div>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          ตัดต่อ Short-Form Video<br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            เร็วระดับ Warp Speed
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-400 sm:text-lg">
          บริการตัดต่อคลิปสั้นสำหรับ TikTok, Reels, YouTube Shorts.
          ส่งงาน 24–48 ชม. คุณภาพระดับ agency. ราคาคุยกันได้.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={LINE_OA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
          >
            คุยกับเราใน LINE
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white transition hover:bg-white/10"
          >
            ดูราคา
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-3 gap-4 text-center sm:gap-8">
          {[
            { k: "24-48", v: "ชม. ส่งงาน" },
            { k: "100+", v: "คลิป/เดือน" },
            { k: "98%", v: "ลูกค้ากลับมาใช้ซ้ำ" },
          ].map((s) => (
            <div key={s.v}>
              <dt className="bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-2xl font-bold text-transparent sm:text-4xl">
                {s.k}
              </dt>
              <dd className="mt-1 text-xs text-zinc-500 sm:text-sm">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
