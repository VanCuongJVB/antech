
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useI18n } from '@/utils/i18n'

const Hero = () => {
  const { t } = useI18n()
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section className='relative overflow-hidden z-1'>
      <div className='container mx-auto pt-24 max-w-7xl px-4'>
        <div className='flex flex-col items-center text-center'>
          <motion.div
            {...fadeUp}
            className='py-2 px-5 bg-primary/15 rounded-full mb-6'
          >
            <p className='text-primary text-lg font-bold'>{t('DESIGN_AGENCY')}</p>
          </motion.div>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('HERO_TITLE')}
          </motion.h1>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='mt-10'
          >
            <Link href='#contact'>
              <button className='bg-primary text-white text-xl font-semibold py-5 px-12 rounded-full hover:bg-darkmode hover:cursor-pointer'>
                {t('CONTACT_NOW')}
              </button>
            </Link>
          </motion.div>
        </div>
        {/*
        <div className='xl:col-span-7 lg:col-span-6 lg:block hidden'>
          <Image
            src='/images/hero/banner-image.png'
            alt='banner image'
            width={600}
            height={600}
            className='w-full'
          />
        </div>
        */}
      </div>
    </section>
  )
}

export default Hero
