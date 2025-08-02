'use client'
import React from 'react'
import Link from 'next/link'
import { useI18n } from '@/utils/i18n'

const Join = () => {
  const { t } = useI18n()
  return (
    <section id='Contact' className='overflow-hidden bg-joinus'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center'>
          <p className='text-primary text-lg font-normal tracking-widest uppercase'>
            {t('Contact.TITLE')}
          </p>
          <h2 className='my-6'>{t('Contact.HEADING')}</h2>
          <p className='text-black/50 text-base font-normal max-w-3xl mx-auto'>
            {t('Contact.PARAGRAPH')}
          </p>
        </div>

        <div className='mx-auto max-w-4xl pt-5'>
          <div className='sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-grey sm:rounded-full'>
            <div className='flex-1'>
              <input
                type='text'
                className='w-full my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-transparent pl-1 focus:outline-none bg-emailbg focus:text-black'
                placeholder={t('Contact.INPUT_NAME')}
                autoComplete='off'
              />
            </div>
            <div className='flex-1'>
              <input
                type='email'
                className='w-full my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-transparent focus:outline-none bg-emailbg focus:text-black'
                placeholder={t('Contact.INPUT_EMAIL')}
                autoComplete='off'
              />
            </div>
            <div className='sm:ml-3'>
              <Link
                href='#'
                className='w-full sm:w-auto text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-primary py-5 px-12 hover:bg-darkmode duration-300'
              >
                {t('Contact.BUTTON')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Join
