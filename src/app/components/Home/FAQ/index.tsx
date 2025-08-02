// src/app/components/Home/FAQ/index.tsx
'use client'
import React from 'react'
import { useI18n } from '@/utils/i18n'
import { Icon } from '@iconify/react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

interface FaqEntry {
  QUESTION: string
  ANSWER: string
}
interface FaqData {
  TITLE: string
  HEADING: string
  Q1: FaqEntry
  Q2: FaqEntry
  Q3: FaqEntry
}

const FAQ: React.FC = () => {
  const { t } = useI18n()
  // Grab the entire FAQ object from your locale
  const faqData = t('FAQ') as FaqData
  // List out the question keys
  const questionKeys: Array<keyof Omit<FaqData, 'TITLE' | 'HEADING'>> = ['Q1', 'Q2', 'Q3']

  return (
    <section
      id='FAQ'
      className='relative py-1 bg-cover bg-center overflow-hidden dark:bg-darkmode'
    >
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='relative rounded-2xl py-24 bg-faq-bg bg-no-repeat bg-cover bg-primary'>
          <p className='text-lg font-normal text-white text-center mb-6'>
            {faqData.TITLE}
          </p>
          <h2 className='text-white text-center max-w-3xl mx-auto'>
            {faqData.HEADING}
          </h2>
          <div className='w-full px-4 pt-16 space-y-5'>
            {questionKeys.map((key) => {
              const entry = faqData[key]
              return (
                <div
                  key={key}
                  className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white'
                >
                  {/* Make Disclosure render as a real <div>, not a fragment */}
                  <Disclosure as='div'>
                    {({ open }) => (
                      <>
                        <DisclosureButton className='flex w-full justify-between items-center text-left text-2xl font-medium focus:outline-none hover:cursor-pointer'>
                          <span className='text-black'>
                            {entry.QUESTION}
                          </span>
                          <div
                            className={`h-5 w-5 transform transition-transform duration-300 ${
                              open ? 'rotate-180' : ''
                            }`}
                          >
                            <Icon
                              icon='lucide:chevron-up'
                              width='20'
                              height='20'
                            />
                          </div>
                        </DisclosureButton>
                        <DisclosurePanel className='text-base text-black/50 pt-4 mt-6 text-left border-t border-border'>
                          <div className='lg:max-w-70%'>
                            {entry.ANSWER}
                          </div>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
