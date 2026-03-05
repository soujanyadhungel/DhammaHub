"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Play, Pause, Square, Volume2, VolumeX, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatDurationClock, formatDuration } from "@/lib/utils";

interface TimerPreset {
  label: string;
  duration: number; // seconds
}

const PRESETS: TimerPreset[] = [
  { label: "1:05", duration: 65 },
  { label: "10 min", duration: 10 * 60 },
  { label: "30 min", duration: 30 * 60 },
  { label: "45 min", duration: 45 * 60 },
  { label: "1 hour", duration: 60 * 60 },
  { label: "90 min", duration: 90 * 60 },
  { label: "2 hours", duration: 120 * 60 },
];

const SESSION_TYPES = [
  { id: "sit", label: "Vipassana Sit" },
  { id: "anapana", label: "Anapana" },
  { id: "metta", label: "Metta" },
] as const;

type SessionType = (typeof SESSION_TYPES)[number]["id"];

// Simple bell oscillator using Web Audio API (no external files needed)
function playBell(audioCtx: AudioContext, volume: number = 0.5) {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(220, audioCtx.currentTime + 2);

  gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 3);

  oscillator.start(audioCtx.currentTime);
  oscillator.stop(audioCtx.currentTime + 3);
}

interface TimerProps {
  onSessionComplete?: (duration: number, type: SessionType) => void;
}

export function MeditationTimer({ onSessionComplete }: TimerProps) {
  const [selectedDuration, setSelectedDuration] = useState(65);
  const [customMinutes, setCustomMinutes] = useState("");
  const [sessionType, setSessionType] = useState<SessionType>("sit");
  const [timeLeft, setTimeLeft] = useState(65);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [bellInterval, setBellInterval] = useState(0); // 0 = off
  const [showSettings, setShowSettings] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const startTimeRef = useRef<number>(0);

  const getAudioCtx = useCallback(() => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    }
    return audioCtxRef.current;
  }, []);

  const ringBell = useCallback(
    (times: number = 1) => {
      if (isMuted) return;
      const ctx = getAudioCtx();
      for (let i = 0; i < times; i++) {
        setTimeout(() => playBell(ctx, 0.6), i * 800);
      }
    },
    [isMuted, getAudioCtx]
  );

  const handleStart = () => {
    ringBell(1); // starting bell
    setIsRunning(true);
    setIsPaused(false);
    setTimeLeft(selectedDuration);
    setElapsedTime(0);
    startTimeRef.current = Date.now();
  };

  const handlePause = () => {
    setIsPaused(true);
    setIsRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleResume = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const handleStop = () => {
    const elapsed = elapsedTime;
    setIsRunning(false);
    setIsPaused(false);
    setTimeLeft(selectedDuration);
    setElapsedTime(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (elapsed > 60 && onSessionComplete) {
      onSessionComplete(elapsed, sessionType);
    }
  };

  // Countdown tick
  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev - 1;
        setElapsedTime((e) => e + 1);

        // Interval bells
        if (bellInterval > 0 && elapsedTime > 0 && (elapsedTime + 1) % (bellInterval * 60) === 0) {
          ringBell(1);
        }

        if (next <= 0) {
          setIsRunning(false);
          ringBell(3); // ending bells
          if (onSessionComplete) {
            onSessionComplete(selectedDuration, sessionType);
          }
          return 0;
        }
        return next;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, bellInterval, ringBell, sessionType, selectedDuration, onSessionComplete, elapsedTime]);

  const progress = 1 - timeLeft / selectedDuration;
  const circumference = 2 * Math.PI * 110;
  const strokeDashoffset = circumference * (1 - progress);

  const handlePreset = (duration: number) => {
    setSelectedDuration(duration);
    setTimeLeft(duration);
    setCustomMinutes("");
  };

  const handleCustom = (v: string) => {
    setCustomMinutes(v);
    const mins = parseInt(v);
    if (!isNaN(mins) && mins > 0) {
      setSelectedDuration(mins * 60);
      setTimeLeft(mins * 60);
    }
  };

  return (
    <div className="card p-6 md:p-8">
      {/* Session Type */}
      <div className="flex flex-wrap gap-2 mb-6">
        {SESSION_TYPES.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => !isRunning && setSessionType(id)}
            className={cn(
              "px-3 py-1.5 rounded-lg text-sm font-medium transition-all",
              sessionType === id
                ? "bg-rust text-white"
                : "bg-beige-100 dark:bg-brown-300 text-brown-400 dark:text-beige-100 hover:bg-beige-200 dark:hover:bg-brown-200"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Timer Circle */}
      <div className="flex justify-center mb-6">
        <div className="relative w-64 h-64">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 240 240">
            {/* Background circle */}
            <circle
              cx="120"
              cy="120"
              r="110"
              fill="none"
              stroke="currentColor"
              className="text-beige-200 dark:text-brown-400"
              strokeWidth="6"
            />
            {/* Progress circle */}
            <circle
              cx="120"
              cy="120"
              r="110"
              fill="none"
              stroke="currentColor"
              className="text-rust transition-all duration-1000"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>
          {/* Time display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-light text-brown-500 dark:text-cream tabular-nums tracking-tight">
              {formatDurationClock(timeLeft)}
            </span>
            {isRunning && (
              <span className="text-xs text-brown-200 dark:text-beige-300 mt-1">
                Elapsed: {formatDuration(elapsedTime)}
              </span>
            )}
            {!isRunning && !isPaused && (
              <span className="text-sm text-brown-200 dark:text-beige-300 mt-1">
                {SESSION_TYPES.find((t) => t.id === sessionType)?.label}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Duration Presets */}
      {!isRunning && !isPaused && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 justify-center mb-3">
            {PRESETS.map((p) => (
              <button
                key={p.duration}
                onClick={() => handlePreset(p.duration)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-sm transition-all",
                  selectedDuration === p.duration
                    ? "bg-brown-200 dark:bg-brown-200 text-white"
                    : "bg-beige-100 dark:bg-brown-300 text-brown-400 dark:text-beige-100 hover:bg-beige-200"
                )}
              >
                {p.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 max-w-xs mx-auto">
            <input
              type="number"
              placeholder="Custom minutes"
              value={customMinutes}
              onChange={(e) => handleCustom(e.target.value)}
              className="input text-sm text-center"
              min="1"
              max="480"
            />
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        {!isRunning && !isPaused && (
          <button
            onClick={handleStart}
            className="btn-primary flex items-center gap-2 px-8 py-3 rounded-2xl text-base"
          >
            <Play size={18} fill="currentColor" />
            Start
          </button>
        )}

        {isRunning && (
          <>
            <button
              onClick={handlePause}
              className="btn-secondary flex items-center gap-2 px-6 py-3 rounded-2xl"
            >
              <Pause size={18} />
              Pause
            </button>
            <button
              onClick={handleStop}
              className="btn-ghost flex items-center gap-2 px-6 py-3 rounded-2xl border border-beige-200 dark:border-brown-300"
            >
              <Square size={18} />
              Stop
            </button>
          </>
        )}

        {isPaused && (
          <>
            <button
              onClick={handleResume}
              className="btn-primary flex items-center gap-2 px-6 py-3 rounded-2xl"
            >
              <Play size={18} fill="currentColor" />
              Resume
            </button>
            <button
              onClick={handleStop}
              className="btn-ghost flex items-center gap-2 px-6 py-3 rounded-2xl border border-beige-200 dark:border-brown-300"
            >
              <Square size={18} />
              Stop
            </button>
          </>
        )}

        <button
          onClick={() => setIsMuted((m) => !m)}
          className="btn-ghost p-3 rounded-xl"
          title={isMuted ? "Unmute bells" : "Mute bells"}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>

        <button
          onClick={() => setShowSettings((s) => !s)}
          className="btn-ghost p-3 rounded-xl"
          title="Bell settings"
        >
          <Settings size={18} />
        </button>
      </div>

      {/* Bell interval settings */}
      {showSettings && (
        <div className="mt-4 p-4 rounded-xl bg-beige-100 dark:bg-brown-300 animate-slide-up">
          <p className="text-sm font-medium text-brown-400 dark:text-beige-100 mb-3">
            Interval Bell
          </p>
          <div className="flex flex-wrap gap-2">
            {[0, 5, 10, 15, 20, 30].map((min) => (
              <button
                key={min}
                onClick={() => setBellInterval(min)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-sm transition-all",
                  bellInterval === min
                    ? "bg-rust text-white"
                    : "bg-white dark:bg-brown-400 text-brown-400 dark:text-beige-100"
                )}
              >
                {min === 0 ? "Off" : `Every ${min}m`}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
