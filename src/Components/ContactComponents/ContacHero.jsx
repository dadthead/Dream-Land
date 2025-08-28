import React from 'react'
import assets from '../../assets/assets'
import ContactForm from './ContactForm'

const ContactHero = () => {
  return (
    <>
    <div
      className="w-full h-[60vh]  bg-center bg-cover relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${assets.aboutimg})`,
    }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl">
          We’d love to hear from you! Get in touch with us today.
        </p>
      </div>
    </div>
   

    </>
  )
}

export default ContactHero
