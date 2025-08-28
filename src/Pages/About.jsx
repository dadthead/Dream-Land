import React from 'react'
import AboutHero from '../Components/AboutComponents/AboutHero'
import Aboutcontent from '../Components/AboutComponents/Aboutcontent'
import RealEstate from '../Components/AboutComponents/RealEstate'
import ExceptionalMastery from '../Components/AboutComponents/ExceptionalMastery'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <Aboutcontent/> 
      <RealEstate/>
      <ExceptionalMastery/>
    </div>
  )
}

export default About