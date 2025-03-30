import React from 'react';
import Slider from 'react-slick';
import images from '../assets/Dhl.jpg';
import images1 from '../assets/Exp.jpg';
import images2 from '../assets/Fedex.jpg';
import images3 from '../assets/Evri.jpg';
import images4 from '../assets/Fez.jpg';
import images5 from '../assets/Mg1.jpg';
import images6 from '../assets/Mg.jpg';
import images7 from '../assets/Gig.jpg';

import '../App.css';

const Slick = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
  
  };
  return (
    
    <div className='slider-container slick'  >

<div className='text-center slick-header'>
  <h3>Get instant access to 20+ local & international delivery partners</h3>
</div>


<Slider {...settings}>
  
  <div>
   <img  className='slick-img' src={images} alt="" />
  </div>
  <div>
   <img className='slick-img' src={images1} alt="" />
  </div>
  <div>
   <img className='slick-img' src={images2} alt="" />
  </div>
  <div>
   <img className='slick-img' src={images3} alt="" />
  </div>
  <div>
   <img className='slick-img' src={images4} alt="" />
  </div>
  <div>
   <img className='slick-img' src={images5} alt="" />
  </div>
  <div>
   <img className='slick-img' src={images6} alt="" />
  </div>
  <div>
   <img className='slick-img' src={images7} alt="" />
  </div>
</Slider>



    </div>
  )
}

export default Slick






