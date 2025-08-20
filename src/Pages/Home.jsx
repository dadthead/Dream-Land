import React from 'react'
import Herosection from '../Components/HomeComponents/HeroSection/Herosection'
import Introduce from '../Components/HomeComponents/Introduce/Introduce'
import Introducing from '../Components/HomeComponents/IntroducingSection/Introducing'
import FProjects from '../Components/HomeComponents/FeaturedProjects/FProjects'
import Routatingbox from '../Components/HomeComponents/RoutatingBox/Routatingbox'
import HappyCustomers from '../Components/HomeComponents/HappyCustomers/HappyCustomers'

const Home = () => {
  return (
    <div>
      
    <Herosection/>
    <Introduce/>
    <Introducing/>
    <FProjects/>
    <Routatingbox/>
    <HappyCustomers/>
    </div>
  )
}

export default Home