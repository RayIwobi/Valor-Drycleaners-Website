import React from 'react';
import './style.css';
import image from './assets/femaledry.jpg';

function Home() {
  return (
    <div>
        <div className='homeimage'>
            <img src={image} alt='home-image' />
        </div>
        <div className='homewritep'>
            <h4>Welcome to Valor DryCleaners </h4>
            <h5>
            At Valor DryCleaners, we provide professional, reliable, 
            and eco-friendly dry-cleaning and laundry services designed to 
            fit your busy lifestyle. Located in the heart of Port Harcourt, 
            we specialize in preserving the quality and longevity of your garments 
            with cutting-edge cleaning methods and a customer-focused approach.<br/><br/>

            Since our founding in 2001, we have proudly served individuals, 
            families, and businesses in Port Harcourt with unmatched care and convenience. 
            Our services range from standard dry cleaning and stain removal to specialty 
            garment care, alterations, and free pickup and delivery.<br/><br/>

            We believe that exceptional service goes beyond just cleaning clothes—it’s 
            about building trust and creating a seamless experience that makes life easier 
            for our customers. Whether it’s your favorite everyday shirt, an heirloom wedding 
            gown, or a delicate designer piece, we treat every item as if it were our own.<br/><br/>

            Choose Valor DryCleaners for professional garment care that combines tradition 
            with innovation.</h5>
        </div>

      
    </div>
  )
}

export default Home
