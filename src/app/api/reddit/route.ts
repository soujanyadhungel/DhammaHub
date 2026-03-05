import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sort = searchParams.get("sort") || "hot";
  const validSorts = ["hot", "new", "top"];
  const safeSort = validSorts.includes(sort) ? sort : "hot";

  try {
    const res = await fetch(
      `https://www.reddit.com/r/vipassana/${safeSort}.json?limit=25`,
      {
        headers: {
          "User-Agent": "DhammaHub/1.0 (web app; vipassana resources)",
          Accept: "application/json",
        },
        next: { revalidate: 300 }, // cache for 5 min
      }
    );

    if (!res.ok) {
      return NextResponse.json({ error: "Reddit API error" }, { status: 502 });
    }

    const data = await res.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const posts = data.data.children.map((child: any) => {
      const p = child.data;
      return {
        id: p.id,
        title: p.title,
        author: p.author,
        score: p.score,
        num_comments: p.num_comments,
        url: p.url,
        permalink: p.permalink,
        created_utc: p.created_utc,
        selftext: p.selftext?.slice(0, 300),
        thumbnail:
          p.thumbnail?.startsWith("http") ? p.thumbnail : undefined,
        flair: p.link_flair_text,
      };
    });

    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Reddit proxy error:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}
