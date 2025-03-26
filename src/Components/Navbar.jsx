import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
       <img className='logo1' src={Logo} alt="logo" />
        <ul>
        {/* <Link to='/'><li>Home</li></Link> */}
            {/* <Link to='/about'><li>About</li></Link>
            <Link to='/services' ><li>Services</li></Link> 
            <Link to='/login' ><li>Login</li></Link>  */}
        </ul>
      
    </div>
  )
}

export default Navbar
