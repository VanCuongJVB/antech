// src/components/Join.tsx
'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useI18n } from '@/utils/i18n'

const Join: React.FC = () => {
  const { t } = useI18n()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      })
      const data = await res.json()
      if (data.ok) {
        setStatus('success')
        setName(''); setEmail('')
      } else {
        throw new Error(data.error || 'Unknown')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id='Contact' className='overflow-hidden bg-joinus py-12'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center mb-8'>
          <p className='text-primary text-lg font-normal tracking-widest uppercase'>
            {t('Contact.TITLE')}
          </p>
          <h2 className='my-6'>{t('Contact.HEADING')}</h2>
          <p className='text-black/50 text-base font-normal max-w-3xl mx-auto'>
            {t('Contact.PARAGRAPH')}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className='mx-auto max-w-4xl pt-5'
        >
          <div className='sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-grey sm:rounded-full'>
            <input
              type='text'
              className='flex-1 my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-transparent pl-1 focus:outline-none bg-emailbg focus:text-black'
              placeholder={t('Contact.INPUT_NAME')}
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <input
              type='email'
              className='flex-1 my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-transparent focus:outline-none bg-emailbg focus:text-black'
              placeholder={t('Contact.INPUT_EMAIL')}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button
              type='submit'
              disabled={status === 'sending'}
              className='sm:ml-3 w-full sm:w-auto text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-primary py-5 px-12 hover:bg-darkmode duration-300 disabled:opacity-50'
            >
              {status === 'sending'
                ? t('Contact.BUTTON_SENDING')
                : t('Contact.BUTTON')}
            </button>
          </div>
          {status === 'success' && (
            <p className="mt-4 text-center text-green-600">
              {t('Contact.SUCCESS_MESSAGE')}
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-center text-red-600">
              {t('Contact.ERROR_MESSAGE')}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Join
