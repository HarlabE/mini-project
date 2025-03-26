import React from 'react'
import Main from '../assets/main.png'
import Slider from "react-slick"

const Home = () => {
  return (
    
    <div >
      <img className='main-1' src={Main} alt="" />
            <div className='head-txt mt-3'>
                <div>
              <h1>Global Shipping for Businesses</h1>
               <h6>Delivering with Care, Delivering with Speed</h6>
               <br />
               <button className='bk1 btn btn-dark' type='button'>Book bow</button>
               </div>
    </div>

              <br />
             <div className='mt-5'>
                <h5 className='pa2'>Get instant access to 20+ local & international delivery partners</h5>
                
          

             </div>
    </div>
  )
}

export default Home
