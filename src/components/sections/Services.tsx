import { Scissors, Volume2, Wand2, UserCheck, Film, LayoutTemplate } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  title: string;
  desc: string;
  Icon: LucideIcon;
};

const SERVICES: Service[] = [
  {
    title: "Short-Form Editing",
    desc: "ตัดต่อคลิปสั้น TikTok / Reels / Shorts ตามสไตล์แบรนด์คุณ. Hook แรง, ตัดจังหวะกับเสียง, sub-title อ่านง่าย.",
    Icon: Scissors,
  },
  {
    title: "Subtitle & Sound FX",
    desc: "ใส่ sub-title sync เสียง + sound effect ทำให้คลิปไม่ silent. Multi-language ได้ (ไทย/อังกฤษ).",
    Icon: Volume2,
  },
  {
    title: "Color Grading",
    desc: "ปรับสีให้ดูพรีเมียม. Match วิดีโอชุดเดียวกันให้ feel เดียวกัน. รองรับ LUT จากคุณได้.",
    Icon: Wand2,
  },
  {
    title: "Talking Head Cut",
    desc: "ตัด filler word ('เออ', 'อ่า', 'um') ออกหมด. ทำให้พูดต่อเนื่อง 80-90% ของเวลาคลิป.",
    Icon: UserCheck,
  },
  {
    title: "B-Roll Sourcing",
    desc: "หาฟุตเทจ stock + จัดวางเสริมจุด narrative. คุณส่งบทมา เราเสริมภาพให้.",
    Icon: Film,
  },
  {
    title: "Thumbnail Design",
    desc: "ทำ thumbnail สำหรับ YouTube Shorts + horizontal repost. CTR-optimized.",
    Icon: LayoutTemplate,
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
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
          {SERVICES.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-zinc-900 p-6 transition hover:border-[#CCFF00]/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800 text-[#CCFF00] transition group-hover:bg-[#CCFF00]/10">
                <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
