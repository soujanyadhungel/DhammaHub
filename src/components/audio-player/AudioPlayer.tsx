"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatDurationClock } from "@/lib/utils";

export interface AudioTrack {
  id: string;
  title: string;
  subtitle?: string;
  audioUrl: string;
  externalUrl?: string; // link to source if can't embed
  duration?: string;
}

interface AudioPlayerProps {
  tracks: AudioTrack[];
  className?: string;
  compact?: boolean;
}

export function AudioPlayer({ tracks, className, compact }: AudioPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [error, setError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const track = tracks[currentIndex];

  useEffect(() => {
    setError(false);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [currentIndex]);

  const handlePlayPause = async () => {
    if (!audioRef.current) return;
    if (error) {
      // Open external link if audio can't be loaded
      if (track.externalUrl) {
        window.open(track.externalUrl, "_blank");
      }
      return;
    }
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      try {
        await audioRef.current.play();
      } catch {
        setError(true);
      }
    }
  };

  const handlePrev = () => {
    setCurrentIndex((i) => Math.max(0, i - 1));
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((i) => Math.min(tracks.length - 1, i + 1));
    setIsPlaying(false);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = parseFloat(e.target.value);
    setCurrentTime(t);
    if (audioRef.current) audioRef.current.currentTime = t;
  };

  if (compact) {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <button
          onClick={handlePlayPause}
          className="w-9 h-9 rounded-full bg-rust flex items-center justify-center text-white flex-shrink-0 hover:bg-rust-dark transition-colors"
        >
          {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
        </button>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-brown-500 dark:text-cream truncate">{track.title}</p>
          {track.subtitle && (
            <p className="text-xs text-brown-200 dark:text-beige-300 truncate">{track.subtitle}</p>
          )}
        </div>
        {error && track.externalUrl && (
          <a
            href={track.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-rust hover:underline flex-shrink-0"
          >
            Open →
          </a>
        )}
        <audio
          ref={audioRef}
          src={track.audioUrl}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={handleNext}
          onError={() => setError(true)}
          onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime ?? 0)}
          onLoadedMetadata={() => setDuration(audioRef.current?.duration ?? 0)}
          preload="metadata"
        />
      </div>
    );
  }

  return (
    <div className={cn("card p-6", className)}>
      <audio
        ref={audioRef}
        src={track.audioUrl}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={handleNext}
        onError={() => setError(true)}
        onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime ?? 0)}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration ?? 0)}
        preload="metadata"
      />

      {/* Track info */}
      <div className="text-center mb-6">
        <p className="text-base font-semibold text-brown-500 dark:text-cream">{track.title}</p>
        {track.subtitle && (
          <p className="text-sm text-brown-200 dark:text-beige-300 mt-1">{track.subtitle}</p>
        )}
        {error && (
          <div className="mt-2 text-xs text-rust bg-rust/10 px-3 py-1.5 rounded-lg inline-block">
            Audio not embeddable.{" "}
            {track.externalUrl && (
              <a href={track.externalUrl} target="_blank" rel="noopener noreferrer" className="underline">
                Open on dhamma.org →
              </a>
            )}
          </div>
        )}
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <input
          type="range"
          min={0}
          max={duration || 100}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-1.5 bg-beige-200 dark:bg-brown-400 rounded-full appearance-none cursor-pointer accent-rust"
        />
        <div className="flex justify-between text-xs text-brown-200 dark:text-beige-300 mt-1">
          <span>{formatDurationClock(Math.floor(currentTime))}</span>
          <span>{duration > 0 ? formatDurationClock(Math.floor(duration)) : track.duration ?? "--:--"}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="btn-ghost p-2 disabled:opacity-30"
        >
          <SkipBack size={20} />
        </button>

        <button
          onClick={handlePlayPause}
          className="w-14 h-14 rounded-full bg-rust hover:bg-rust-dark transition-colors flex items-center justify-center text-white shadow-md"
        >
          {isPlaying ? (
            <Pause size={22} fill="currentColor" />
          ) : (
            <Play size={22} fill="currentColor" className="ml-1" />
          )}
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === tracks.length - 1}
          className="btn-ghost p-2 disabled:opacity-30"
        >
          <SkipForward size={20} />
        </button>
      </div>

      {/* Volume */}
      <div className="flex items-center gap-2 mt-4">
        <Volume2 size={14} className="text-brown-200 dark:text-beige-300 flex-shrink-0" />
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={volume}
          onChange={(e) => {
            const v = parseFloat(e.target.value);
            setVolume(v);
            if (audioRef.current) audioRef.current.volume = v;
          }}
          className="w-24 h-1 bg-beige-200 dark:bg-brown-400 rounded-full appearance-none cursor-pointer accent-rust"
        />
      </div>

      {/* Track list */}
      {tracks.length > 1 && (
        <div className="mt-4 border-t border-beige-200 dark:border-brown-300 pt-4 space-y-1 max-h-48 overflow-y-auto">
          {tracks.map((t, i) => (
            <button
              key={t.id}
              onClick={() => {
                setCurrentIndex(i);
                setIsPlaying(false);
              }}
              className={cn(
                "w-full text-left px-3 py-2 rounded-lg text-sm transition-all",
                i === currentIndex
                  ? "bg-rust/10 text-rust font-medium"
                  : "text-brown-400 dark:text-beige-200 hover:bg-beige-100 dark:hover:bg-brown-300"
              )}
            >
              <span className="font-mono text-xs mr-2 text-brown-200 dark:text-beige-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              {t.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
