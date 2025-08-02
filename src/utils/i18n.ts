'use client'

import { useSearchParams } from 'next/navigation'

import en from '@/lang/en'
import vi from '@/lang/vi'
import ja from '@/lang/ja'

const resources = { en, vi, ja } as const

type Lang = keyof typeof resources

export function useI18n() {
  const params = useSearchParams()
  const lang = (params.get('lang') || 'en') as Lang

  const t = (key: keyof typeof en) => {
    return resources[lang][key] || key
  }

  return { t, lang }
}
