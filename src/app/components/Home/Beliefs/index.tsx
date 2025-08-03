'use client'
import React from 'react'
import Link from 'next/link'
import { useI18n } from '@/utils/i18n'

const Beliefs = () => {
  const { t } = useI18n()

  return (
    <section className='bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>

          {/* COLUMN-1 */}
          <div className="bg-purple pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl bg-[url('/images/beliefs/swirls.svg')] bg-no-repeat bg-right-bottom">
            <p className='text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start uppercase'>
              {t('Beliefs.TITLE')}  {/* ví dụ key = "TITLE" */}
            </p>
            <h3 className='text-white mb-5 text-center sm:text-start'>
              {t('Beliefs.HEADING_MAIN')}{' '}
              <span className='text-white/60'>
                {t('Beliefs.HEADING_SUB')}
              </span>
            </h3>
            <p className='text-lg text-white/75 pt-2 mb-16 text-center sm:text-start'>
              {t('Beliefs.PARAGRAPH')}
            </p>
            <div className='text-center sm:text-start'>
              <Link
                href='#'
                className='text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full duration-300 bg-primary border border-primary hover:bg-darkmode hover:border-darkmode'>
                {t('Beliefs.GET_STARTED')}
              </Link>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div>
            <div className="bg-[#D6FFEB] pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl bg-[url('/images/beliefs/bg.svg')] bg-no-repeat bg-bottom" style={{ height: '100%' }}>
              <p className='text-lg font-normal text-primary tracking-widest mb-5 text-center sm:text-start uppercase'>
                {t('Beliefs.BUILD_TITLE')}
              </p>
              <h3 className='text-black mb-5 text-center sm:text-start'>
                <span className='text-primary'>{t('Beliefs.BUILD_HIGHLIGHT')}</span>{' '}
                {t('Beliefs.BUILD_SUBHEADING')}
              </h3>
              <p className='pt-2 mb-16 text-center sm:text-start text-black/75 text-lg'>
                {t('Beliefs.BUILD_PARAGRAPH')}
              </p>
              <div className='text-center sm:text-start'>
                <Link
                  href='#'
                  className='text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-primary border border-primary hover:bg-darkmode hover:border-darkmode'>
                  {t('Beliefs.LEARN_MORE')}
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
export default Beliefs
