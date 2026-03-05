import { quotes, getDailyQuote } from "@/data/quotes";
import { paliWords, getDailyPaliWord } from "@/data/pali-words";
import { ExternalLink, Volume2 } from "lucide-react";

export default function DailyPage() {
  const todayQuote = getDailyQuote();
  const todayPaliWord = getDailyPaliWord();

  // Get a few more quotes/words to show
  const moreQuotes = quotes.slice(0, 5).filter((q) => q.text !== todayQuote.text);
  const moreWords = paliWords.filter((w) => w.word !== todayPaliWord.word).slice(0, 4);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Today's quote */}
      <section>
        <p className="text-xs font-medium uppercase tracking-widest text-brown-200 dark:text-beige-300 mb-4">
          Today&apos;s Quote
        </p>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brown-200 to-brown-300 dark:from-brown-400 dark:to-brown-500 p-8 shadow-md">
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/3" />
          <blockquote className="relative text-xl md:text-2xl font-light text-cream leading-relaxed mb-4 max-w-2xl">
            &ldquo;{todayQuote.text}&rdquo;
          </blockquote>
          <p className="relative text-sm text-beige-200 opacity-90">
            — {todayQuote.author}
            {todayQuote.source && (
              <span className="ml-1 opacity-70">· {todayQuote.source}</span>
            )}
          </p>
        </div>
      </section>

      {/* Pali word of the day */}
      <section>
        <p className="text-xs font-medium uppercase tracking-widest text-brown-200 dark:text-beige-300 mb-4">
          Pali Word of the Day
        </p>
        <div className="card p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-rust/10 flex items-center justify-center flex-shrink-0">
              <Volume2 size={20} className="text-rust" />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-brown-500 dark:text-cream">
                {todayPaliWord.word}
              </h2>
              <p className="text-sm text-brown-200 dark:text-beige-300 mt-1">
                /{todayPaliWord.pronunciation}/
              </p>
              <p className="text-lg font-medium text-rust mt-3">
                {todayPaliWord.meaning}
              </p>
              <p className="text-sm text-brown-300 dark:text-beige-200 mt-2 leading-relaxed max-w-lg">
                {todayPaliWord.context}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More quotes */}
      <section>
        <p className="text-xs font-medium uppercase tracking-widest text-brown-200 dark:text-beige-300 mb-4">
          More Teachings
        </p>
        <div className="space-y-3">
          {moreQuotes.map((q, i) => (
            <div key={i} className="card p-5">
              <blockquote className="text-sm text-brown-400 dark:text-cream leading-relaxed">
                &ldquo;{q.text}&rdquo;
              </blockquote>
              <p className="text-xs text-rust mt-2">
                — {q.author}
                {q.source && <span className="text-brown-200 dark:text-beige-300 ml-1">· {q.source}</span>}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pali dictionary */}
      <section>
        <p className="text-xs font-medium uppercase tracking-widest text-brown-200 dark:text-beige-300 mb-4">
          Pali Glossary
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {moreWords.map((word) => (
            <div key={word.word} className="card p-4">
              <p className="font-semibold text-brown-500 dark:text-cream">{word.word}</p>
              <p className="text-xs text-brown-200 dark:text-beige-300">/{word.pronunciation}/</p>
              <p className="text-sm text-rust mt-1">{word.meaning}</p>
              <p className="text-xs text-brown-300 dark:text-beige-200 mt-1 line-clamp-2">
                {word.context}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pariyatti Treasures */}
      <div className="card p-5 flex items-center justify-between">
        <div>
          <p className="font-medium text-brown-500 dark:text-cream">Pariyatti Treasures</p>
          <p className="text-sm text-brown-200 dark:text-beige-300 mt-0.5">
            Weekly Dhamma content, stories, and insights.
          </p>
        </div>
        <a
          href="https://pariyatti.org/Treasures"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-sm flex items-center gap-1.5 flex-shrink-0"
        >
          Visit <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
}
