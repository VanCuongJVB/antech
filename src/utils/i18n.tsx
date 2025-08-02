'use client'
import { createContext, useContext, useState, ReactNode } from 'react'
import en from '@/locales/en.json'
import vi from '@/locales/vi.json'
import ja from '@/locales/ja.json'

export type Locale = 'en' | 'vi' | 'ja'

const translations = { en, vi, ja }

interface I18nContextProps {
  locale: Locale
  setLocale: (loc: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined)

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('en')

  const t = (key: string) => {
    const dict = translations[locale] as Record<string, string>
    return dict[key] || key
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}
