import React from 'react'
import Navbar from './component/Navbar'
import Home from './Pages/Home'
import Slick from './component/Slick'
import Grow from './component/Grow'
import Logistics from './component/Logistics'
import Faq from './component/Faq'
import { Form } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Slick/>
      <Grow/>
      <Logistics/>
      <Faq/>
    
      
      
      

    </div>
  )
}

export default App