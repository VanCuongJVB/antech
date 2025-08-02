// src/components/Team.tsx
'use client'
import React from 'react'
import Image from 'next/image'
import { useI18n } from '@/utils/i18n'

const Team = () => {
  const { t } = useI18n()

  return (
    <section className='overflow-x-hidden'>
      <div className='container mx-auto max-w-7xl px-4 relative'>
        <h2 className='text-center max-w-5xl mx-auto'>
          {t('TEAM.TITLE')}
        </h2>
        <h5 className='font-medium text-center pt-10 text-black/50 max-w-3xl mx-auto'>
          {t('TEAM.SUBTITLE')}
        </h5>
        <div className='grid grid-cols-1 mt-16'>
          <Image
            src='/images/team/team.webp'
            alt={t('TEAM.IMAGE_ALT')}
            height={684}
            width={1296}
            className='relative z-1 rounded-3xl'
          />
        </div>
      </div>
    </section>
  )
}

export default Team
