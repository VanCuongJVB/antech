'use client'
import React from 'react'
import { useI18n } from '@/utils/i18n'

const Contact = () => {
  const { t } = useI18n()
  return (
    <section id='contact' className='py-20'>
      <div className='container mx-auto max-w-7xl px-4 text-center'>
        <p className='text-primary text-lg font-normal tracking-widest uppercase'>{t('CONTACT')}</p>
        <h2 className='my-6'>{t('CONTACT_TAGLINE')}</h2>
        <p className='text-black/50 text-base max-w-3xl mx-auto mb-8'>
          {t('CONTACT_DESC')}
        </p>
        <div className='max-w-3xl mx-auto'>
          <form className='grid gap-6'>
            <input
              type='text'
              className='w-full py-4 px-6 rounded-md bg-grey focus:outline-hidden'
              placeholder={t('NAME_PLACEHOLDER')}
              autoComplete='off'
            />
            <input
              type='email'
              className='w-full py-4 px-6 rounded-md bg-grey focus:outline-hidden'
              placeholder={t('EMAIL_PLACEHOLDER')}
              autoComplete='off'
            />
            <textarea
              className='w-full py-4 px-6 rounded-md bg-grey focus:outline-hidden h-40'
              placeholder={t('MESSAGE_PLACEHOLDER')}
              autoComplete='off'
            />
            <button
              type='submit'
              className='bg-primary text-white text-xl font-semibold py-5 px-12 rounded-full hover:bg-darkmode duration-300 w-fit mx-auto'
            >
              {t('SEND_MESSAGE')}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
