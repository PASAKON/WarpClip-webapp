type OEmbedResponse = {
  title: string;
  author_name: string;
  thumbnail_url?: string;
};

export type TikTokMeta = {
  title: string;
  authorName: string;
  thumbnailUrl: string | null;
};

export async function fetchTikTokMeta(tiktokUrl: string): Promise<TikTokMeta | null> {
  try {
    const endpoint = `https://www.tiktok.com/oembed?url=${encodeURIComponent(tiktokUrl)}`;
    const res = await fetch(endpoint, { next: { revalidate: 86400 } });
    if (!res.ok) return null;
    const data: OEmbedResponse = await res.json();
    return {
      title: data.title,
      authorName: data.author_name,
      thumbnailUrl: data.thumbnail_url ?? null,
    };
  } catch {
    return null;
  }
}
