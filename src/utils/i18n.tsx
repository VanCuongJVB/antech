'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import en from '@/locales/en.json';
import vi from '@/locales/vi.json';
import ja from '@/locales/ja.json';

export type Locale = 'en' | 'vi' | 'ja';

const translations: Record<Locale, Record<string, string>> = { en, vi, ja };

interface I18nContextProps {
  locale: Locale;
  setLocale: (loc: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const params = useSearchParams();
  const initial = (params.get('lang') as Locale) || 'en';
  const [locale, setLocale] = useState<Locale>(initial);

  // Sync URL param when locale changes
  useEffect(() => {
    const url = new URL(window.location.toString());
    url.searchParams.set('lang', locale);
    window.history.replaceState({}, '', url);
  }, [locale]);

  const t = (key: string) => {
    const dict = translations[locale] || {};
    return dict[key] || key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextProps => {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within I18nProvider');
  return context;
};