"use client";

import { useState, useEffect } from "react";
import { faqData } from "@/data/faq";
import {
  Search,
  Bird,
  Feather,
  Sparkles,
  HandHeart,
  Hourglass,
  Gem,
  Flower2,
  Globe,
  Radio,
  CalendarHeart,
  Mail,
  CircleArrowDown,
  X,
  BookOpen,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";

// Per-category accent color + framing icons. Emerald anchors the brand
// categories (About, Reiki, Booking); sky / rose / violet give visual rhythm.
const categoryMeta: Record<string, { color: string; leftIcon: LucideIcon; rightIcon: LucideIcon }> = {
  "About Heather & Find Your Feathers": { color: "emerald", leftIcon: Bird, rightIcon: Feather },
  "What Is Reiki?": { color: "emerald", leftIcon: Sparkles, rightIcon: HandHeart },
  "Sessions & What to Expect": { color: "sky", leftIcon: HandHeart, rightIcon: Hourglass },
  "Services & Modalities": { color: "rose", leftIcon: Gem, rightIcon: Flower2 },
  "Distance Reiki & Remote Sessions": { color: "violet", leftIcon: Globe, rightIcon: Radio },
  "Booking, Pricing & Location": { color: "emerald", leftIcon: CalendarHeart, rightIcon: Mail },
};

const colorClasses: Record<string, { text: string; bg: string; border: string }> = {
  emerald: { text: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-950/30", border: "border-emerald-200 dark:border-emerald-800" },
  sky: { text: "text-sky-600 dark:text-sky-400", bg: "bg-sky-50 dark:bg-sky-950/30", border: "border-sky-200 dark:border-sky-800" },
  violet: { text: "text-violet-600 dark:text-violet-400", bg: "bg-violet-50 dark:bg-violet-950/30", border: "border-violet-200 dark:border-violet-800" },
  rose: { text: "text-rose-600 dark:text-rose-400", bg: "bg-rose-50 dark:bg-rose-950/30", border: "border-rose-200 dark:border-rose-800" },
  neutral: { text: "text-neutral-600 dark:text-neutral-400", bg: "bg-neutral-50 dark:bg-neutral-800/50", border: "border-neutral-200 dark:border-neutral-800" },
};

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [highlightId, setHighlightId] = useState<string | null>(null);
  const [showExamples, setShowExamples] = useState(false);

  // Reiki-specific example searches for the dropdown
  const exampleTerms = ["Reiki", "distance", "crystals", "colors", "disentanglement", "oracle", "recovery", "booking", "Heather"];

  const lc = search.toLowerCase();

  // Highlight matching text in FAQ answers / questions when searching
  function highlightText(text: string): { __html: string } {
    if (!lc.trim()) return { __html: text };
    const escaped = lc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escaped})`, "gi");
    const highlighted = text.replace(
      regex,
      '<mark class="bg-emerald-200/70 dark:bg-emerald-700/40 text-emerald-900 dark:text-emerald-200 rounded-sm px-0.5">$1</mark>'
    );
    return { __html: highlighted };
  }

  // Slugify a category name for anchor linking
  const slug = (s: string) =>
    s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  // Auto-open a FAQ item when arriving via anchor hash (deep-linking)
  useEffect(() => {
    const openFaqAnchor = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      for (const cat of faqData) {
        for (const item of cat.items) {
          if (item.id === hash) {
            const key = `${cat.category}-${item.question}`;
            setOpenIndex(key);
            setHighlightId(hash);
            requestAnimationFrame(() => {
              const el = document.getElementById(hash);
              if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
            });
            setTimeout(() => setHighlightId(null), 3000);
            return;
          }
        }
      }
    };
    const timer = setTimeout(openFaqAnchor, 100);
    window.addEventListener("hashchange", openFaqAnchor);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", openFaqAnchor);
    };
  }, []);

  const filtered = search
    ? faqData
        .map((cat) => ({
          ...cat,
          items: cat.items.filter(
            (item) =>
              item.question.toLowerCase().includes(lc) ||
              item.answer.toLowerCase().includes(lc)
          ),
        }))
        .filter((cat) => cat.items.length > 0)
    : faqData;

  return (
    <>
      {/* Hero */}
      <section id="faq-hero" className="relative px-6 py-24 mx-auto max-w-4xl text-center scroll-mt-28">
        <div className="inline-flex items-center justify-center gap-2 mb-6 text-emerald-500 dark:text-emerald-400">
          <BookOpen className="h-7 w-7" />
          <Feather className="h-6 w-6 -rotate-12" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
          Find your feathers. Discover your wings.
        </p>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-500">
          Reiki & metaphysical services with Rev. Heather L. Randolph — Buffalo & Western New York.
        </p>
        <div className="mt-6 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

        {/* Search */}
        <div className="mt-8 relative max-w-md mx-auto">
          <div className="relative flex items-center rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus-within:ring-2 focus-within:ring-emerald-500/40 focus-within:border-emerald-400 transition">
            <Search className="ml-3 h-4 w-4 text-neutral-400 flex-shrink-0" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions..."
              aria-label="Search FAQ"
              className="flex-1 bg-transparent pl-2.5 pr-16 py-2.5 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-9 top-1/2 -translate-y-1/2 p-0.5 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
                aria-label="Clear search"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
            <button
              onClick={() => setShowExamples(!showExamples)}
              className={`absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-colors ${showExamples ? "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30" : "text-neutral-400 hover:text-emerald-500"}`}
              aria-label="Show search examples"
            >
              <CircleArrowDown className={`h-4 w-4 transition-transform ${showExamples ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* Example terms dropdown */}
          {showExamples && (
            <div className="absolute top-full mt-2 left-0 right-0 p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-lg z-10">
              <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500 mb-2 uppercase tracking-wider text-center">Try searching</p>
              <div className="flex flex-wrap gap-1.5 justify-center">
                {exampleTerms.map((term) => (
                  <button
                    key={term}
                    onClick={() => { setSearch(term); setShowExamples(false); }}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-950/50 transition-colors"
                  >
                    <Search className="h-2.5 w-2.5" />
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Cross-link to the official practice for live booking */}
          <p className="mt-2 text-center text-[10px] text-neutral-400 dark:text-neutral-600">
            Ready to book? Visit{" "}
            <a
              href="https://www.findyourfeathers.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 dark:text-emerald-400 hover:underline"
            >
              findyourfeathers.org
            </a>
            {" "}or email{" "}
            <a
              href="mailto:Heather@findyourfeathers.org"
              className="text-emerald-500 dark:text-emerald-400 hover:underline"
            >
              Heather
            </a>
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="px-6 pb-16 mx-auto max-w-4xl space-y-8">
        {filtered.map((category) => {
          const meta = categoryMeta[category.category];
          const colors = meta ? colorClasses[meta.color] : colorClasses.neutral;
          const LeftIcon = meta?.leftIcon || BookOpen;
          const RightIcon = meta?.rightIcon || BookOpen;
          return (
            <div key={category.category} id={slug(category.category)} className="flex flex-col items-center scroll-mt-28">
              <div className={`inline-flex items-center gap-2 rounded-lg px-3 py-1.5 mb-3 ${colors.bg} ${colors.border} border`}>
                <LeftIcon className={`h-4 w-4 ${colors.text}`} />
                <h2 className={`text-xl font-semibold ${colors.text} text-center`}>
                  {category.category}
                </h2>
                <RightIcon className={`h-4 w-4 ${colors.text}`} />
              </div>
              {category.description && (
                <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-center max-w-2xl">
                  {category.description}
                </p>
              )}
              <div className="w-full space-y-4">
                {category.items.map((item) => {
                  const key = `${category.category}-${item.question}`;
                  const isOpen = openIndex === key;
                  return (
                    <div
                      key={item.question}
                      id={item.id || undefined}
                      className={`rounded-xl border overflow-hidden transition-colors scroll-mt-24 ${
                        highlightId === item.id
                          ? "border-emerald-400 dark:border-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/20 shadow-md"
                          : "border-neutral-100 dark:border-neutral-800 hover:border-emerald-200 dark:hover:border-emerald-900"
                      }`}
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : key)}
                        className="w-full text-left px-6 py-3.5 flex items-start gap-2.5"
                        aria-expanded={isOpen}
                      >
                        <span
                          className={`mt-0.5 text-emerald-500 transition-transform duration-200 flex-shrink-0 ${
                            isOpen ? "rotate-90" : ""
                          }`}
                        >
                          ▸
                        </span>
                        <span
                          className="text-base font-medium text-neutral-900 dark:text-white"
                          dangerouslySetInnerHTML={highlightText(item.question)}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5 pl-14">
                          <p
                            className="text-neutral-700 dark:text-neutral-300 leading-relaxed [&_a]:text-emerald-600 dark:[&_a]:text-emerald-400 [&_a]:underline [&_a]:underline-offset-2"
                            dangerouslySetInnerHTML={highlightText(item.answer)}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {search && filtered.length === 0 && (
          <div className="text-center py-12 text-neutral-500 dark:text-neutral-400">
            <p>No questions match &ldquo;{search}&rdquo;</p>
            <p className="mt-2 text-sm">Try different keywords or browse all categories.</p>
          </div>
        )}

        {/* Closing CTA */}
        <div className="text-center pt-6">
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            Still have questions, or ready to begin?
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <a
              href="https://www.findyourfeathers.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-emerald-600/25 transition-all hover:bg-emerald-700 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <CalendarHeart className="h-4 w-4" />
              Book a Session
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="mailto:Heather@findyourfeathers.org"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-emerald-300 dark:border-emerald-800 px-5 py-2.5 text-sm font-medium text-emerald-700 dark:text-emerald-300 transition-all shadow-sm hover:shadow-md hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Mail className="h-4 w-4" />
              Email Heather
            </a>
          </div>
        </div>
      </section>

      {/* Hidden Pagefind index — FAQ answers live behind an accordion toggle, so
          they are absent from static HTML at build time. This clipped div keeps
          every Q&A indexable by Pagefind while staying invisible. (Even without
          Pagefind configured it is harmless.) IDs use pf- prefix to avoid
          collision with the visible accordion items; data-pagefind-anchor creates
          deep-linkable sub-results. */}
      <div style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }} data-pagefind-body>
        {faqData.flatMap((cat) => cat.items).map((item) => (
          <div key={item.id || item.question} id={item.id ? `pf-${item.id}` : undefined} data-pagefind-anchor={item.id || undefined}>
            <h3>{item.question}</h3>
            <p>{item.answer.replace(/<[^>]*>/g, "")}</p>
          </div>
        ))}
      </div>
    </>
  );
}
