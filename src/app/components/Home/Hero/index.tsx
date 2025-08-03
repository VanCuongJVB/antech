'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useI18n } from '@/utils/i18n'

const Hero = () => {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden z-10">
      <div className="container mx-auto max-w-7xl px-4" style={{ paddingTop: '5rem' }}>
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
        </div>
      </div>
    </section>
  )
}

export default Hero
