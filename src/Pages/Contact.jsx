import React from 'react'
import ContactHero from '../Components/ContactComponents/ContacHero'
import ContactForm from '../Components/ContactComponents/ContactForm'
import Adress from '../Components/ContactComponents/Adress'
import Map from '../Components/ContactComponents/Map'

const Contact = () => {
  return (
    <div>
      <ContactHero/>
      <ContactForm/>
      <Adress/>
      <Map/>
    </div>
  )
}

export default Contact