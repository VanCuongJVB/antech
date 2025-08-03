'use client'
import Image from 'next/image'
import { useI18n } from '@/utils/i18n'

const PleasanterIntro = () => {
  const { t } = useI18n()
  return (
    <div className='flex flex-col items-center text-center z-20'>
      <h5 className='font-medium text-center pt-10 text-black/50 max-w-3xl mx-auto mb-8'>
        {t('pleasanter_intro_title')}
      </h5>
      <Image
        src='/images/pleasanter/pleasanter.png'
        alt='Pleasanter'
        width={300}
        height={100}
        className='mb-4'
      />
      <p className='max-w-2xl text-base text-black dark:text-white'>
        {t('pleasanter_intro_description')}
      </p>
    </div>
  )
}

export default PleasanterIntro
