'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useI18n } from '@/utils/i18n'

const Hero = () => {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden z-10" style={{ height: '100vh' }}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="
      pt-16                      
      min-h-[calc(100vh-6rem)]   
      flex items-center justify-center
      text-center
    ">
          <div className="flex flex-col items-center text-center">
            {/* DESIGN_AGENCY */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="py-2 px-5 bg-primary/15 rounded-full mb-6"
            >
              <p className="text-primary text-lg font-bold">{t('DESIGN_AGENCY')}</p>
            </motion.div>

            {/* TAGLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
            >
              {t('TAGLINE')}
            </motion.h1>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <Link href="#">
                <button className="bg-primary text-white text-xl font-semibold py-5 px-12 rounded-full hover:bg-darkmode transition-colors duration-300">
                  {t('contact_now')}
                </button>
              </Link>
            </motion.div>

            <Link
              href="#About"
              aria-label={t('SCROLL_DOWN') || 'Scroll down'}
              className="group absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/60 bg-white/80 dark:bg-slate-900/60 backdrop-blur shadow-md ring-1 ring-primary/10 transition-colors group-hover:bg-primary group-hover:text-white animate-bounce">
                {/* chevron icon */}
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary group-hover:text-white transition-colors">
                  <path fill="currentColor" d="M12 16a1 1 0 0 1-.7-.29l-6-6a1 1 0 1 1 1.4-1.42L12 13.59l5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6A1 1 0 0 1 12 16z" />
                </svg>
              </span>
            </Link>
          </div>
        </div></div>
    </section>
  )
}

export default Hero
