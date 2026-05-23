import { LINE_OA_URL } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
          เปิดรับงานใหม่ · Powered by MoonieX
        </div>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          ตัดต่อ Short-Form Video
          <br />
          <span className="relative inline-block whitespace-nowrap px-3 py-1">
            <span
              aria-hidden="true"
              className="absolute inset-0 -z-10 -skew-x-3 rounded-[8px_4px_12px_4px] bg-[#CCFF00]"
            />
            <span className="relative text-zinc-950">เร็วระดับ Warp Speed</span>
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
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#CCFF00] px-6 py-3 text-base font-semibold text-zinc-950 transition hover:bg-[#A8D400]"
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
            { k: "24–48", v: "ชม. ส่งงาน" },
            { k: "100+", v: "คลิป/เดือน" },
            { k: "98%", v: "ลูกค้ากลับมาใช้ซ้ำ" },
          ].map((s) => (
            <div key={s.v}>
              <dt className="text-2xl font-bold text-white sm:text-4xl">{s.k}</dt>
              <dd className="mt-1 text-xs text-zinc-400 sm:text-sm">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
