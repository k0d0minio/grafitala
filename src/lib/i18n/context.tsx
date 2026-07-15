"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { defaultLocale, isLocale, type Locale } from "./config";
import { dictionaries, type Dictionary } from "./dictionaries";

const STORAGE_KEY = "grafitala.locale";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

/**
 * Detect the visitor's preferred locale from a previous choice (localStorage)
 * or the browser language, falling back to the default. Runs on the client
 * only — the server always renders `defaultLocale` to keep hydration stable.
 */
function detectLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    // localStorage can throw in private mode — fall through to language check.
  }
  const browser = window.navigator.language?.toLowerCase() ?? "";
  if (browser.startsWith("pt")) return "pt";
  return defaultLocale;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // Resolve the real preference after mount to avoid a hydration mismatch.
  useEffect(() => {
    const detected = detectLocale();
    if (detected !== locale) setLocaleState(detected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep <html lang> in sync so assistive tech and search engines see the
  // language the visitor is actually reading.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Persisting is best-effort; ignore storage failures.
    }
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}
