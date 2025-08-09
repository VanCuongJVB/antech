'use client'
import { aboutdata } from '@/app/types/aboutdata'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useI18n } from '@/utils/i18n'

const Aboutus = () => {
  const { t } = useI18n()
  const about = t('Aboutdata') as aboutdata[]
  const taxCode = t('HQ.TAX_CODE_VALUE');
  const taxCodeLabel = t('HQ.TAX_CODE_LINK_TEXT');

  return (
    <section id='About' className=' bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4 relative z-1'>
        <div className='bg-grey rounded-3xl p-4 sm:p-12'>
          <Image
            src='/images/aboutus/dots.svg'
            width={100}
            height={100}
            alt='dots-image'
            className='absolute bottom-1 -left-20'
          />
          <p className='text-center text-primary text-lg tracking-widest uppercase mt-10'>
            {t('ABOUT_US')}
          </p>
          <h2 className='text-center pb-12'>{t('KNOW_MORE_ABOUT_US')}</h2>
          <div className="mt-16">
            <div className="mx-auto max-w-3xl relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm shadow-xl">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-blue-500 to-emerald-500" />
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold tracking-wide">
                      {t('HQ.BADGE')}
                    </span>
                    <h3 className="text-2xl font-semibold tracking-tight">{t('HQ.TITLE')}</h3>
                  </div>
                  <Icon icon="twemoji:flag-vietnam" width="28" height="28" />
                </div>

                <dl className="mt-6 grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-x-6 gap-y-4">
                  <div className="contents">
                    <dt className="text-sm font-medium text-slate-500">{t('HQ.COMPANY_NAME_LABEL')}</dt>
                    <dd className="text-sm sm:text-[15px] text-slate-900 dark:text-slate-100">
                      {t('HQ.COMPANY_NAME_VALUE')}
                    </dd>
                  </div>

                  <div className="contents">
                    <dt className="text-sm font-medium text-slate-500">{t('HQ.TAX_CODE_LABEL')}</dt>
                    <dd className="text-sm sm:text-[15px] text-slate-900 dark:text-slate-100">
                      <a
                        className="inline-flex items-center gap-2 text-primary underline underline-offset-4 hover:opacity-80 transition"
                        href="https://thuvienphapluat.vn/ma-so-thue/cong-ty-tnhh-cong-nghe-va-dich-vu-an-tech-mst-3200753609.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t('HQ.TAX_CODE_LINK_TEXT')}
                        title={t('HQ.TAX_CODE_LINK_TEXT')}
                      >
                        <Icon icon="mdi:shield-check-outline" width="18" height="18" />
                        {t('HQ.TAX_CODE_VALUE')}
                      </a>
                    </dd>
                  </div>

                  <div className="contents">
                    <dt className="text-sm font-medium text-slate-500">{t('HQ.ADDRESS_LABEL')}</dt>
                    <dd className="text-sm sm:text-[15px] text-slate-900 dark:text-slate-100">
                      <span className="inline-flex items-center gap-2">
                        <Icon icon="mdi:map-marker" width="18" height="18" />
                        {t('HQ.ADDRESS_VALUE')}
                      </span>
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 text-sm text-slate-600 dark:text-slate-300">
                  {t('HQ.REMOTE_NOTE')}
                </p>
              </div>
            </div>
          </div>


          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-10'>
            {about.map((item, i) => (
              <div
                key={i}
                className='hover:bg-darkmode bg-white rounded-3xl p-8 shadow-xl group'>
                <h5 className='group-hover:text-white mb-5'>
                  {item.heading}
                </h5>
                <Image
                  src={item.imgSrc}
                  alt={item.imgSrc}
                  width={100}
                  height={100}
                  className='mb-5'
                />
                <p className='text-lg font-normal text-black group-hover:text-white mb-5'>
                  {item.paragraph}
                </p>
                <Link
                  href='#'
                  className='text-18 font-semibold text-primary hover-underline flex items-center'>
                  {item.link}
                  <Icon
                    icon='tabler:chevron-right'
                    width='20'
                    height='20'
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus
