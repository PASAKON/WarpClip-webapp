type ClassValue = string | number | boolean | undefined | null | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  const push = (v: ClassValue) => {
    if (!v) return;
    if (Array.isArray(v)) {
      v.forEach(push);
      return;
    }
    if (typeof v === "string" || typeof v === "number") {
      out.push(String(v));
    }
  };
  inputs.forEach(push);
  return out.join(" ");
}

export const LINE_OA_URL = "https://line.me/R/ti/p/@warpclip";
