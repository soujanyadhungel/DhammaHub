"use client";

import { useState } from "react";
import Link from "next/link";
import { Flower2 } from "lucide-react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Something went wrong.");
        return;
      }
      window.location.href = "/login";
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream dark:bg-brown-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 mb-8">
          <div className="w-10 h-10 rounded-xl bg-rust flex items-center justify-center shadow-sm">
            <Flower2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-brown-500 dark:text-cream leading-none text-lg">
              Dhamma Hub
            </p>
          </div>
        </div>

        <div className="card p-8">
          <h1 className="text-xl font-semibold text-brown-500 dark:text-cream mb-6 text-center">
            Create account
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 rounded-xl bg-rust/10 text-rust text-sm text-center">
                {error}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-brown-400 dark:text-beige-200 mb-1.5">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brown-400 dark:text-beige-200 mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brown-400 dark:text-beige-200 mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                placeholder="At least 8 characters"
                minLength={8}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3 disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>

          <p className="text-center text-sm text-brown-200 dark:text-beige-300 mt-5">
            Already have an account?{" "}
            <Link href="/login" className="text-rust hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
