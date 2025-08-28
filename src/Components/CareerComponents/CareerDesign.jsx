import React from 'react'

const CareerDesign = () => {
  return (
    <div className='w-full'>
      <div className='relative z-50 w-full h-[50vh]'>
      <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=80" alt="" className='w-full h-full object-cover' />

      
      <div className='absolute inset-0 bg-black/80 w-80 md:w-[50%] space-x-2'>
      <h1 className='absolute z-50 text-xl text-white top-20 left-20 md:top-35 md:left-80 -translate-x-1/2 -translate-y-1/2'>Dream Land</h1>
      <p className='absolute z-50 text-sm text-white top-40 left-20 md:top-50 md:left-80 -translate-x-1/2 -translate-y-2/2'>Grow Your Future with Dream Land</p>
      <p className='absolute z-50 text-sm text-white top-58 left-28  md:top-68 md:left-97 -translate-x-1/2 -translate-y-2/2'> Join us in creating premium real estate, sustainable red wood projects, and open plots that inspire growth and opportunity</p>

      <button className='absolute z-50 text-sm text-white top-80 left-20 md:top-75 md:left-68 -translate-x-1/2 -translate-y-1/2 bg-orange-400 py-2 px-4'>Explore Careers</button>
      </div>

      </div>
    </div>
  )
}

export default CareerDesign