import React from 'react'
import Herosection from '../Components/HomeComponents/HeroSection/Herosection'
import Introduce from '../Components/HomeComponents/Introduce/Introduce'
import FProjects from '../Components/HomeComponents/FeaturedProjects/FProjects'
import Routatingbox from '../Components/HomeComponents/RoutatingBox/Routatingbox'
import HappyCustomers from '../Components/HomeComponents/HappyCustomers/HappyCustomers'
import FieldOfWorks from '../Components/HomeComponents/FieldsOfWorks/FieldOfWorks'

const Home = () => {
  return (
    <div>
      
    <Herosection/>
    <Introduce/>
    <FieldOfWorks/>
    <FProjects/>
    <Routatingbox/>
    <HappyCustomers/>
    
    </div>
  )
}

export default Home