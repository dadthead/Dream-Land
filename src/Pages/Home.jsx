import React from 'react'
import Herosection from '../Components/HomeComponents/HeroSection/Herosection'
import Introducing from '../Components/HomeComponents/IntroducingSection/Introducing'
import FProjects from '../Components/HomeComponents/FeaturedProjects/FProjects'

const Home = () => {
  return (
    <div>
    <Herosection/>
    <Introducing/>
    <FProjects/>
    </div>
  )
}

export default Home