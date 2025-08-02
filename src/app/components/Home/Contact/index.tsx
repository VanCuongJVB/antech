'use client'
import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='py-20'>
      <div className='container mx-auto max-w-7xl px-4 text-center'>
        <p className='text-primary text-lg font-normal tracking-widest uppercase'>Contact</p>
        <h2 className='my-6'>Let\'s build something great together</h2>
        <p className='text-black/50 text-base max-w-3xl mx-auto mb-8'>
          We\'d love to hear from you. Send us a message and we will respond as soon as possible.
        </p>
        <div className='max-w-3xl mx-auto'>
          <form className='grid gap-6'>
            <input
              type='text'
              className='py-4 px-6 rounded-md bg-grey focus:outline-hidden'
              placeholder='Your name'
              autoComplete='off'
            />
            <input
              type='email'
              className='py-4 px-6 rounded-md bg-grey focus:outline-hidden'
              placeholder='Your email'
              autoComplete='off'
            />
            <textarea
              className='py-4 px-6 rounded-md bg-grey focus:outline-hidden h-40'
              placeholder='Your message'
              autoComplete='off'
            />
            <button
              type='submit'
              className='bg-primary text-white text-xl font-semibold py-5 px-12 rounded-full hover:bg-darkmode duration-300 w-fit mx-auto'
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
