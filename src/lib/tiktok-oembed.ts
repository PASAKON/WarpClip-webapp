export interface OEmbedResult {
  thumbnail_url: string;
  title: string;
}

export async function fetchOEmbed(url: string): Promise<OEmbedResult | null> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(
      `https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`,
      {
        signal: controller.signal,
        next: { revalidate: 86400 },
      },
    );
    clearTimeout(timer);
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.thumbnail_url) return null;
    return { thumbnail_url: data.thumbnail_url, title: data.title ?? "" };
  } catch {
    return null;
  }
}
