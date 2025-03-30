import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import images from '../assets/Log2.jpg';

const Logistics = () => {
  return (
    
    <div className='logistics'>

<div>
   <img className='logistics-img' src={images} alt="assets/Log2.jpg"/> 
</div>

 <div className='logistics-text'>
        <h5>Logistics For E-Commerce</h5>
        <p>Make seamless deliveries to your <br /> customers worldwide</p>
        <button className='btn btn-outline-dark'>Learn More</button>
    </div>


</div>
    




    
  )
}

export default Logistics