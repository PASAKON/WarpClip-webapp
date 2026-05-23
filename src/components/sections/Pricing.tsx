import { LINE_OA_URL } from "@/lib/utils";

const TIERS = [
  {
    name: "Basic",
    price: "990",
    unit: "/คลิป",
    desc: "เริ่มต้นทดลอง",
    features: [
      "ตัดต่อคลิป ≤ 60 วินาที",
      "Sub-title basic",
      "ส่งงาน 48 ชม.",
      "แก้ไขฟรี 1 ครั้ง",
    ],
    accent: false,
  },
  {
    name: "Pro",
    price: "1,990",
    unit: "/คลิป",
    desc: "ใช้บ่อยที่สุด",
    features: [
      "ทุกอย่างของ Basic",
      "Sub-title + sound effect",
      "Color grading",
      "ส่งงาน 24 ชม.",
      "แก้ไขฟรี 3 ครั้ง",
    ],
    accent: true,
  },
  {
    name: "Premium",
    price: "ติดต่อ",
    unit: "",
    desc: "Custom + bulk",
    features: [
      "ทุกอย่างของ Pro",
      "B-roll sourcing",
      "Thumbnail design",
      "Priority delivery",
      "แก้ไขไม่จำกัด",
    ],
    accent: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
            Pricing
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ราคาตรงไปตรงมา
          </h2>
          <p className="mt-4 text-zinc-400">
            ราคา per คลิป. ลด 15% ถ้าจ้างเหมา ≥ 10 คลิป/เดือน.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative overflow-hidden rounded-2xl border p-8 ${
                t.accent
                  ? "border-[#CCFF00]/50 bg-[#CCFF00]/[0.04]"
                  : "border-white/8 bg-zinc-900"
              }`}
            >
              {t.accent && (
                <div className="absolute right-4 top-4 rounded-full bg-[#CCFF00] px-3 py-1 text-xs font-semibold text-zinc-950">
                  ขายดี
                </div>
              )}
              <h3 className="text-xl font-semibold text-white">{t.name}</h3>
              <p className="mt-1 text-sm text-zinc-400">{t.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">฿{t.price}</span>
                {t.unit && <span className="text-sm text-zinc-400">{t.unit}</span>}
              </div>
              <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#CCFF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={LINE_OA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block rounded-full px-4 py-2.5 text-center text-sm font-semibold transition ${
                  t.accent
                    ? "bg-[#CCFF00] text-zinc-950 hover:bg-[#A8D400]"
                    : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                เริ่มเลย
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
