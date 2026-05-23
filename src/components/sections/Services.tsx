const SERVICES = [
  {
    title: "Short-Form Editing",
    desc: "ตัดต่อคลิปสั้น TikTok / Reels / Shorts ตามสไตล์แบรนด์คุณ. Hook แรง, ตัดจังหวะกับเสียง, sub-title อ่านง่าย.",
    icon: "✂️",
  },
  {
    title: "Subtitle & Sound FX",
    desc: "ใส่ sub-title sync เสียง + sound effect ทำให้คลิปไม่ silent. Multi-language ได้ (ไทย/อังกฤษ).",
    icon: "🔊",
  },
  {
    title: "Color Grading",
    desc: "ปรับสีให้ดูพรีเมียม. Match วิดีโอชุดเดียวกันให้ feel เดียวกัน. รองรับ LUT จากคุณได้.",
    icon: "🎨",
  },
  {
    title: "Talking Head Cut",
    desc: "ตัด filler word ('เออ', 'อ่า', 'um') ออกหมด. ทำให้พูดต่อเนื่อง 80-90% ของเวลาคลิป.",
    icon: "🗣️",
  },
  {
    title: "B-Roll Sourcing",
    desc: "หาฟุตเทจ stock + จัดวางเสริมจุด narrative. คุณส่งบทมา เราเสริมภาพให้.",
    icon: "🎬",
  },
  {
    title: "Thumbnail Design",
    desc: "ทำ thumbnail สำหรับ YouTube Shorts + horizontal repost. CTR-optimized.",
    icon: "🖼️",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Services
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ทำให้คลิปของคุณน่าดูจนจบ
          </h2>
          <p className="mt-4 text-zinc-400">
            ทุกบริการเสริมกันได้ — เลือกเฉพาะที่ต้องการ หรือเหมาทั้งหมด.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-zinc-900 p-6 transition hover:border-[#CCFF00]/30"
            >
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
