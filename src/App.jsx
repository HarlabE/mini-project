import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
// import Header from './Components/Header'
import About from './Pages/About'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Login  from './Pages/Login'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from 'react-slick'
import Nip from './Components/Nip'

const App = () => {
  return (
    <div>
     
        
        <Navbar/>
        <Home/>
        <About/>
        <Services/>
        <Login/>
       
      {/* <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Nip/> */}

    </div>
  )
}

export default App
