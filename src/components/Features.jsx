import React from 'react'
import eco from './assets/webimages/ecocleaning.png'
import expertise from './assets/webimages/expertise2.png'
import advancement from './assets/webimages/advancement2.png'
import pickupdelivery from './assets/webimages/delivery2.png'

function Features() {
  return (
    <div className='featuremain'>
        <div className='featureheader'>
            <h1>FEATURES</h1>
            <hr className='horizontalrule'/>
            <h3>Our dry-cleaning business website offers a user-friendly 
                and visually appealing experience designed to showcase our 
                services and engage with customers effectively.</h3>
        </div>
    
    <div className='parentContainer'>
        
        <div className='container'>
            <div className='imagecontent'>
                <img src={eco} alt='features' width={70} height={70} style={{marginTop:'10px'}}/>
            </div>
            <div className='textcontent'>
            <h2>Eco-Friendly Cleaning</h2>
                <h3>We use environmentally safe cleaning methods and 
                    detergents to protect your clothes and the planet.</h3>
            </div>
        </div>
        <div className='container'>
            <div className='imagecontent'>
            <img src={expertise} alt='features' width={70} height={70} style={{marginTop:'10px'}}/>
            </div>
            <div className='textcontent'>
            <h2>Professional Expertise</h2>
                <h3> Over 10 years of experience handling delicate 
                    fabrics, special materials, and complex stains.</h3>
            </div>
        </div>
        <div className='container'>
            <div className='imagecontent'>
            <img src={advancement} alt='features' width={70} height={70} style={{marginTop:'10px'}}/>
            </div>
            <div className='textcontent'>
            <h2>Advanced Technology</h2>
                <h3>State-of-the-art equipment ensures your garments 
                    are cleaned thoroughly and efficiently.</h3>
            </div>
        </div>
        <div className='container'>
            <div className='imagecontent'>
            <img src={pickupdelivery} alt='features' width={70} height={70} style={{marginTop:'10px'}}/>
            </div>
            <div className='textcontent'>
                <h2>Free Pickup & Delivery</h2>
                <h3>Enjoy hassle-free service with door-to-door 
                    garment care that makes life easy for our customers.</h3>
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default Features
