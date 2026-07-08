"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink, Code, Mail, Globe, Feather, Home, MapPinSearch } from "lucide-react";

function Interpunct() {
  return <span className="text-neutral-300 dark:text-neutral-700">·</span>;
}

export default function Footer() {
  const pathname = usePathname();

  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-emerald-300 dark:border-emerald-800/40 bg-emerald-100 dark:bg-neutral-900">
      {/* CTA Section */}
      <section className="px-6 py-20 text-center">
        <p className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
          Discover Your Wings
        </p>
        <p className="mt-2 text-neutral-500 dark:text-neutral-400">
          A sacred space for healing, transformation, and the journey home.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://www.findyourfeathers.org/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-600 dark:text-neutral-400 transition-all shadow-sm hover:shadow-md hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800 hover:-translate-y-0.5"
          >
            <Mail className="h-3.5 w-3.5" />
            Contact
            <ExternalLink className="h-3.5 w-3.5" />
          </a>

          <Link
            href="/404"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 px-6 py-3 text-sm font-medium text-emerald-700 dark:text-emerald-300 transition-all shadow-sm hover:shadow-md hover:bg-emerald-100 dark:hover:bg-emerald-950/50 hover:-translate-y-0.5"
          >
            <MapPinSearch className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
            Explore the 404
          </Link>
        </div>
      </section>

      {/* Bottom bar */}
      <div className="border-t border-emerald-200 dark:border-emerald-800/30 px-6 py-8">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 dark:text-neutral-600">
          <p className="inline-flex items-center gap-1">
            &copy; {new Date().getFullYear()} <Feather className="h-3 w-3 text-emerald-500" /> Find Your Feathers
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              onClick={handleHomeClick}
              className="inline-flex items-center gap-1 transition-all hover:text-emerald-600 dark:hover:text-emerald-400 hover:-translate-y-0.5"
            >
              <Home className="h-3 w-3" />
              Dev Portal
            </Link>
            <Interpunct />
            <a
              href="https://www.findyourfeathers.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-all hover:text-emerald-600 dark:hover:text-emerald-400 hover:-translate-y-0.5"
            >
              <Globe className="h-3 w-3" />
              Wix Site
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <a
            href="https://github.com/drasticstatic/findyourfeathers-public-preview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-all hover:text-neutral-600 dark:hover:text-neutral-400 hover:-translate-y-0.5"
          >
            <Code className="h-3.5 w-3.5" />
            GitHub Source Repo
          </a>
        </div>
      </div>
    </footer>
  );
}
