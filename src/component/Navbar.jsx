import React from 'react'
import images from '../assets/logo.png';
import '../App.css'

const Navbar = () => {
  return (
    <div  className='nav-container'>
    
 <img   className='logo' src={images} alt="assets/logo.png"/>
    
    
    <div>
    <ul className='navbar-li'>
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Contact</li>
    
    </ul>
    
    </div>
    
        </div>
        

  )
}

export default Navbar