"use client";

import { useLanguage } from "./LanguageProvider";
import SettingsButton from "./SettingsModal";

export default function Home() {
  const { t, dir } = useLanguage();

  return (
    <div className="min-h-screen bg-cream dark:bg-neutral-950" dir={dir}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-cream-dark/50 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/favicon.svg"
              alt="Cliber AI logo"
              className="w-10 h-10 rounded-xl shadow-sm"
            />
            <span className="text-xl font-heading font-medium tracking-tight text-gray-900 dark:text-gray-100">
              Cliber AI
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-green transition-colors"
            >
              {t("contact")}
            </a>
            <SettingsButton />
          </div>
        </div>
      </header>

      <main>
        <section className="relative pt-32 pb-16 overflow-hidden grid-pattern">
          <div className="absolute top-20 right-[15%] w-72 h-72 bg-brand-green/5 dark:bg-brand-green/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-32 left-[10%] w-96 h-96 bg-brand-orange/5 dark:bg-brand-orange/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-gray-900 dark:text-gray-100 leading-[0.95] mb-6 animate-fade-in-up-delay-1">
              {t("heroTitle1")}
              <br />
              <span className="text-brand-orange">{t("heroTitle2")}</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-arabic animate-fade-in-up-delay-2">
              {t("heroDesc")}
            </p>
          </div>
        </section>

        <section className="relative px-6 pt-10 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up-delay-2">
              <span className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green text-sm font-medium rounded-full mb-4">
                {t("featuredProduct")}
              </span>
              <h2 className="font-arabic text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 dark:text-gray-100 mb-4" dir="rtl" lang="ar">
                {t("saudiJudge")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-arabic">
                {t("featuredDesc")}
              </p>
            </div>

            <div className="flex flex-col items-center gap-8 animate-fade-in-up-delay-3">
              <div className="relative group w-full max-w-4xl">
                <div className="absolute -inset-1 bg-gradient-to-br from-brand-green/20 via-brand-green/5 to-brand-orange/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-cream-dark/50 dark:border-neutral-700">
                  <img
                    src="/saudi-judge-preview.png"
                    alt="Saudi Judge — AI legal judgment prediction interface"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <a
                href="https://www.saudi-judge.cliberai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-brand-green-dark hover:bg-brand-green text-white rounded-xl text-sm font-medium transition-all duration-300 shadow-[0_4px_20px_rgba(0,84,48,0.3)] hover:shadow-[0_4px_30px_rgba(0,84,48,0.45)] hover:scale-[1.02]"
              >
                <span>{t("trySaudiJudge")}</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-24 bg-white dark:bg-neutral-900 border-t border-cream-dark/50 dark:border-neutral-800"
        >
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-medium text-gray-900 dark:text-gray-100 mb-4">
              {t("getInTouch")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-10 font-arabic">
              {t("contactDesc")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:contact@cliberai.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cream dark:bg-neutral-800 border border-cream-dark dark:border-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-cream-dark dark:hover:bg-neutral-700 transition-all duration-200"
              >
                <svg
                  className="w-5 h-5 text-brand-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                contact@cliberai.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-cream dark:bg-neutral-950 border-t border-cream-dark/50 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/favicon.svg"
              alt=""
              className="w-7 h-7 rounded-lg"
              aria-hidden="true"
            />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Cliber AI
            </span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {t("tagline")}
          </p>
        </div>
      </footer>
    </div>
  );
}
