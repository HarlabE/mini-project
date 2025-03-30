import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import images from '../assets/Pj.jpg';

const Grow = () => {
  return (
    <div className='grow'>
    <div className='grow-text'>
        <h5>Grow Your 3PL Business</h5>
        <p>Attract more customers and increase <br />profits by offering competitive <br /> international shipping rates.</p>
        <button className='btn btn-outline-dark'>Learn More</button>
    </div>

<div>
   <img className='grow-img' src={images} alt="assets/Pj.jpg"/> 
</div>
</div>
    
  )
}

export default Grow