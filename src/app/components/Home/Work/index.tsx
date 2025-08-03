// src/components/Work.tsx
'use client'
import React from 'react'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { workdata } from '@/app/types/workdata'
import { useI18n } from '@/utils/i18n'
import PleasanterIntro from './PleasanterIntro'

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 3 } },
    { breakpoint: 800, settings: { slidesToShow: 2 } },
    { breakpoint: 450, settings: { slidesToShow: 1 } },
  ],
}

const Work: React.FC = () => {
  const { t } = useI18n()
  const work = t('WorkData') as workdata[]

  return (
    <section
      id='Team'
      className="
        relative dark:bg-darkmode py-8 bg-cover bg-center overflow-hidden
        before:absolute before:w-full before:h-full before:bg-[url('/images/wework/elipse.svg')]
        before:bg-no-repeat before:bg-center
        after:absolute after:w-1/3 after:h-1/3 after:bg-[url('/images/wework/vector.svg')]
        after:bg-no-repeat after:top-28 after:-right-12 after:-z-10
      "
    >
      <div className='container mx-auto max-w-7xl px-4'>
        <h3 className='text-center text-black dark:text-white text-2xl mb-8'>
          {t('we_work_in_several_verticals')}
        </h3>

        {/* GRID: intro | slider */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
          {/* LEFT: PleasanterIntro */}
          <div className='flex justify-center lg:justify-start'>
            <PleasanterIntro />
          </div>

          {/* RIGHT: Carousel */}
          <div>
            <Slider {...settings}>
              {work.map((item, i) => (
                <div key={i} className='px-3'>
                  <div className='bg-white dark:bg-darkHeroBg py-14 my-10 text-center shadow-xl rounded-3xl'>
                    <div className='relative mb-4'>
                      <Image
                        src={item.imgSrc}
                        alt={item.name}
                        width={182}
                        height={182}
                        className='inline-block m-auto'
                      />
                    </div>
                    <h6 className='text-xl font-bold text-black dark:text-white'>
                      {item.name}
                    </h6>
                    <p className='text-base dark:text-white/75 mt-2'>
                      {item.profession}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
