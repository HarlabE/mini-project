import React from 'react';
import images from '../assets/Mag22.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Home = () => {
  return (
    <div  className=''>

<img className='container-image' src={images} alt="assets/Log2.jpg"/>


<div className='nav-txt text-center text-dark'>
<h1 >Global Shipping for African Businesses</h1>
<p>We link businesses, e-Commerce merchants, and individuals to efficient global shipping</p>
<button className='btn btn-outline-dark'>Book Now</button>   

</div>


    </div>
  )
}

export default Home