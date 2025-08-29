import React from 'react'
import assets from '../../assets/assets'

const ClientsHero = () => {
  return (
    
        <div className='h-screen w-full relative '>
              <img src={assets.clients} alt="" className='w-full h-full object-cover'/>
              <div className='absolute inset-0 bg-black/50'></div>
              <div className='absolute left-10 top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 '>
                <h2 className='text-5xl  text-white sm:text-4xl md:text-6xl font-bold'>Coming Soon!</h2>
              </div>
        
            </div>
    
  )
}

export default ClientsHero