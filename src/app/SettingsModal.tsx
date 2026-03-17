"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import { type Lang, type Theme, langMeta } from "./translations";

const langs: Lang[] = ["en", "ar", "fr", "de", "ja", "zh", "ko"];
const themes: { value: Theme; labelKey: string; icon: JSX.Element }[] = [
  {
    value: "system",
    labelKey: "themeSystem",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    value: "light",
    labelKey: "themeLight",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    value: "dark",
    labelKey: "themeDark",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    ),
  },
];

type Section = null | "language" | "theme";

export default function SettingsButton() {
  const { lang, setLang, t, theme, setTheme } = useLanguage();
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<Section>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSection(null);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (section) {
          setSection(null);
        } else {
          setOpen(false);
        }
      }
    }
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, section]);

  const currentTheme = themes.find((th) => th.value === theme);

  return (
    <div className="relative" ref={modalRef}>
      <button
        onClick={() => {
          setOpen(!open);
          setSection(null);
        }}
        className="p-2 rounded-lg text-gray-500 hover:text-brand-orange hover:bg-brand-orange/5 transition-all dark:text-gray-400 dark:hover:text-brand-orange"
        aria-label={t("settings")}
        aria-expanded={open}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full mt-2 end-0 w-72 bg-white dark:bg-neutral-900 rounded-xl shadow-xl border border-cream-dark/50 dark:border-neutral-700 overflow-hidden z-50 animate-fade-in-up">
          <div className="px-4 py-3 border-b border-cream-dark/50 dark:border-neutral-700 flex items-center gap-2">
            {section && (
              <button
                onClick={() => setSection(null)}
                className="p-1 -ms-1 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <svg className="w-4 h-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
            )}
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {section === "language" ? t("language") : section === "theme" ? t("theme") : t("settings")}
            </h3>
          </div>

          {!section && (
            <div className="p-2">
              <button
                onClick={() => setSection("language")}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-cream dark:hover:bg-neutral-800 transition-all"
              >
                <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                </svg>
                <div className="flex-1 text-start">
                  <span>{t("language")}</span>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500">{langMeta[lang].flag} {langMeta[lang].label}</span>
                <svg className="w-4 h-4 text-gray-400 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              <button
                onClick={() => setSection("theme")}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-cream dark:hover:bg-neutral-800 transition-all"
              >
                <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                </svg>
                <div className="flex-1 text-start">
                  <span>{t("theme")}</span>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500">{currentTheme ? t(currentTheme.labelKey) : ""}</span>
                <svg className="w-4 h-4 text-gray-400 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          )}

          {section === "language" && (
            <div className="p-2 max-h-80 overflow-y-auto">
              <div className="flex flex-col gap-0.5">
                {langs.map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setSection(null);
                    }}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                      lang === l
                        ? "bg-brand-orange/10 text-brand-orange font-medium"
                        : "text-gray-700 dark:text-gray-300 hover:bg-cream dark:hover:bg-neutral-800"
                    }`}
                  >
                    <span className="text-lg">{langMeta[l].flag}</span>
                    <span>{langMeta[l].label}</span>
                    {lang === l && (
                      <svg className="w-4 h-4 ms-auto text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {section === "theme" && (
            <div className="p-2">
              <div className="flex flex-col gap-0.5">
                {themes.map((th) => (
                  <button
                    key={th.value}
                    onClick={() => {
                      setTheme(th.value);
                      setSection(null);
                    }}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                      theme === th.value
                        ? "bg-brand-orange/10 text-brand-orange font-medium"
                        : "text-gray-700 dark:text-gray-300 hover:bg-cream dark:hover:bg-neutral-800"
                    }`}
                  >
                    {th.icon}
                    <span>{t(th.labelKey)}</span>
                    {theme === th.value && (
                      <svg className="w-4 h-4 ms-auto text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
