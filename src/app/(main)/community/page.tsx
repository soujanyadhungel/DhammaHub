"use client";

import { useState, useEffect } from "react";
import {
  ArrowUp,
  MessageSquare,
  ExternalLink,
  RefreshCw,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface RedditPost {
  id: string;
  title: string;
  author: string;
  score: number;
  num_comments: number;
  url: string;
  permalink: string;
  created_utc: number;
  selftext?: string;
  thumbnail?: string;
  flair?: string;
}

type SortType = "hot" | "new" | "top";

function timeAgo(utc: number): string {
  const diff = Date.now() / 1000 - utc;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

export default function CommunityPage() {
  const [posts, setPosts] = useState<RedditPost[]>([]);
  const [sort, setSort] = useState<SortType>("hot");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPosts = async (sortType: SortType) => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(`/api/reddit?sort=${sortType}`);
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setPosts(data.posts);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(sort);
  }, [sort]);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Sort tabs */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {(["hot", "new", "top"] as SortType[]).map((s) => (
            <button
              key={s}
              onClick={() => setSort(s)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-all",
                sort === s
                  ? "bg-rust text-white"
                  : "bg-beige-100 dark:bg-brown-300 text-brown-400 dark:text-beige-100 hover:bg-beige-200"
              )}
            >
              {s}
            </button>
          ))}
        </div>
        <button
          onClick={() => fetchPosts(sort)}
          className="btn-ghost p-2 rounded-lg"
          title="Refresh"
        >
          <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
        </button>
      </div>

      {/* Reddit attribution */}
      <div className="flex items-center gap-2 text-sm text-brown-200 dark:text-beige-300">
        <Users size={14} />
        <span>
          Posts from{" "}
          <a
            href="https://www.reddit.com/r/vipassana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rust hover:underline"
          >
            r/vipassana
          </a>
        </span>
      </div>

      {/* Posts */}
      {loading && (
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="card p-5 animate-pulse"
            >
              <div className="h-4 bg-beige-200 dark:bg-brown-400 rounded w-3/4 mb-2" />
              <div className="h-3 bg-beige-100 dark:bg-brown-300 rounded w-1/3" />
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="card p-6 text-center">
          <p className="text-brown-300 dark:text-beige-200 mb-3">
            Could not load posts. Reddit may be blocking the request.
          </p>
          <a
            href="https://www.reddit.com/r/vipassana"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Visit r/vipassana directly <ExternalLink size={14} />
          </a>
        </div>
      )}

      {!loading && !error && posts.length > 0 && (
        <div className="space-y-3">
          {posts.map((post) => (
            <div key={post.id} className="card p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                {/* Score */}
                <div className="flex flex-col items-center min-w-[40px]">
                  <ArrowUp size={14} className="text-rust" />
                  <span className="text-sm font-medium text-brown-400 dark:text-cream tabular-nums">
                    {post.score > 999
                      ? `${(post.score / 1000).toFixed(1)}k`
                      : post.score}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <a
                    href={`https://reddit.com${post.permalink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-brown-500 dark:text-cream hover:text-rust dark:hover:text-rust transition-colors leading-snug block"
                  >
                    {post.title}
                  </a>
                  {post.flair && (
                    <Badge variant="default" className="mt-1 mb-2">
                      {post.flair}
                    </Badge>
                  )}
                  <div className="flex items-center gap-3 mt-2 text-xs text-brown-200 dark:text-beige-300">
                    <span>u/{post.author}</span>
                    <span>{timeAgo(post.created_utc)}</span>
                    <span className="flex items-center gap-1">
                      <MessageSquare size={11} />
                      {post.num_comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Group sittings link */}
      <div className="card p-5">
        <h3 className="font-medium text-brown-500 dark:text-cream mb-1">
          Group Sittings
        </h3>
        <p className="text-sm text-brown-300 dark:text-beige-200 mb-3">
          Join old students worldwide for daily group sitting sessions.
        </p>
        <a
          href="https://www.dhamma.org/en/os/sitting"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-sm inline-flex items-center gap-2"
        >
          View schedule on dhamma.org <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
