import React from 'react'
import assets from '../../../assets/assets'
import { motion } from 'framer-motion'

const FlexBox = () => {
  return (
    <>
      <div className='flex justify-between sm:flex-row flex-col  sm:mt-10 md:px-10  gap-10 md:w-[50%] ' >
        <div
      
          className='py-10  space-y-6 text-[13px] text-white ml-5'>
          <h1 className='text-xl font-semibold underline underline-offset-4'>Our Expertise Spans Across Four Powerful Platforms</h1>

          <p>With 10,000+ happy clients, we take pride in being part of countless success stories. Every family that steps into their Dream Land finds not just property, but security, prosperity, and a legacy for generations to come.</p>

          <p>At Dream Land Projects, we don’t just sell land — we align our dreams with yours, and deliver more than promises… we deliver trust, growth, and happiness.</p>
          <div>
            <button className='bg-orange-400 text-white py-2 px-4'>Contact Us</button>
          </div>

        </div>

        {/* <div>
          <img
            className='w-full h-full object-cover shadow-2xl rounded-lg'
            src={assets.img3} alt="FlexBox"  />
        </div> */}

      </div>

    </>
  )
}

export default FlexBox