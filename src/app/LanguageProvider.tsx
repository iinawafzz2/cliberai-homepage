"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { type Lang, type Theme, translations, langMeta } from "./translations";

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
  theme: Theme;
  setTheme: (t: Theme) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (key) => key,
  dir: "ltr",
  theme: "system",
  setTheme: () => {},
});

export function useLanguage() {
  return useContext(LanguageContext);
}

function getSystemDark() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyDarkClass(theme: Theme) {
  const isDark = theme === "dark" || (theme === "system" && getSystemDark());
  if (theme === "light") {
    document.documentElement.classList.remove("dark");
    return;
  }
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [theme, setThemeState] = useState<Theme>("system");

  useEffect(() => {
    const saved = localStorage.getItem("cliber-lang") as Lang | null;
    if (saved && translations[saved]) {
      setLangState(saved);
    }
    const savedTheme = localStorage.getItem("cliber-theme") as Theme | null;
    if (savedTheme && (savedTheme === "system" || savedTheme === "light" || savedTheme === "dark")) {
      setThemeState(savedTheme);
      applyDarkClass(savedTheme);
    } else {
      applyDarkClass("system");
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("cliber-lang", l);
  };

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    localStorage.setItem("cliber-theme", t);
    applyDarkClass(t);
  }, []);

  const t = (key: string) => translations[lang]?.[key] ?? translations.en[key] ?? key;
  const dir = langMeta[lang].dir;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  useEffect(() => {
    applyDarkClass(theme);

    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => applyDarkClass("system");
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, [theme]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir, theme, setTheme }}>
      {children}
    </LanguageContext.Provider>
  );
}
