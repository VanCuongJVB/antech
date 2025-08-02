// src/components/Dedicated.tsx
'use client'
import React from 'react'
import Image from 'next/image'
import { useI18n } from '@/utils/i18n'

const Dedicated: React.FC = () => {
  const { t } = useI18n()

  return (
    <section className='relative bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-5'>

          <Image
            src='/images/dedicated/spiral.svg'
            height={272}
            width={686}
            alt='spiral-design'
            className='absolute left-0 top-0 hidden lg:block -z-10'
          />

          <div className='col-span-12 lg:col-span-6 lg:col-start-4 text-center'>
            <div className='relative'>
              <Image
                src='/images/dedicated/comma.svg'
                alt='comma-image'
                width={200}
                height={106}
                className='absolute -top-16 -left-32 hidden lg:block'
              />
            </div>

            <h2 className='text-3xl md:text-4xl font-semibold mb-4'>
              {t('Dedicated.TITLE')}
            </h2>

            <p className='text-lg md:text-xl text-black/55 mb-6 max-w-2xl mx-auto'>
              {t('Dedicated.DESCRIPTION')}
            </p>

            <h5 className='text-base md:text-lg font-medium'>
              {t('Dedicated.AUTHOR')}
            </h5>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Dedicated
