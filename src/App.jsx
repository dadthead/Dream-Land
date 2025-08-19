import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'

// Pages
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Clients from './Pages/Clients'
import Gallery from './Pages/Gallery'
import Ourprojects from './Pages/Ourprojects'
import Careers from './Pages/Careers'
import Header from './Components/Header/Header'



function App() {

  return (
    <div>
    
  <Header/>
  <Routes>

    {/* Pages */}
    <Route path='/' element={ <Home/> }/>
    <Route path='/about' element={ <About/> }/>
    <Route path='/contact' element={ <Contact/> }/>
    <Route path='/clients' element={ <Clients/> }/>
    <Route path='/careers' element={ <Careers/> }/>
    <Route path='/gallery' element={ <Gallery/> }/>
    <Route path='/ourprojects' element={ <Ourprojects/> }/>
  
  </Routes> 
  </div>    
    
  )
}

export default App
