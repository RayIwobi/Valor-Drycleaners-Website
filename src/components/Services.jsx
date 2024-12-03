
import React from 'react'
import image1 from './assets/webimages/drycleaningsuit.png'
import image2 from './assets/webimages/laundry-machine.png'
import image3 from './assets/webimages/cleaning.png'
import image4 from './assets/webimages/industry.png'
import image5 from './assets/webimages/delivery-man.png'
import image6 from './assets/webimages/clothing.png'

function Services() {
  return (
    <div className='featuremain'>
        <div id='Services'>
            <div className='featureheader'>
                <h1>OUR SERVICES</h1>
                <hr className='horizontalrule'/>
                <h3>At Valor Drycleaners, we pride ourselves on offering 
                    a comprehensive range of cleaning and maintenance services 
                    tailored to meet the needs of individuals, families, and 
                    businesses</h3>
            </div>
            <div className='parentContainer'>
            <div className='container'>
                <div className='imagecontent'>
                    <img src={image1} alt='services' width={70} height={70} style={{marginTop:'10px'}}/>
                </div>
                <div className='textcontent'>
                <h2>Dry Cleaning Services</h2>
                <h3>Your clothes deserve professional care, and our dry-cleaning 
                    process is designed to remove tough stains, preserve fabric quality, 
                    and ensure your garments look their best.</h3>
                </div>
            </div>

            <div className='container'>
            <div className='imagecontent'>
                <img src={image2} alt='services' width={70} height={70} style={{marginTop:'10px'}}/>
            </div>
            <div className='textcontent'>
            <h2>Clothes Laundry & Folding Services</h2>
                <h3>We know how overwhelming laundry can be, so let 
                    us handle it for you! Our laundry services ensure your 
                    clothes are fresh, clean, and neatly folded or hung.</h3>
            </div>
            </div>

            <div className='container'>
            <div className='imagecontent'>
                <img src={image3} alt='services' width={70} height={70} style={{marginTop:'10px'}}/>
            </div>
            <div className='textcontent'>
            <h2>Home & Apartment Cleaning Services</h2>
                <h3>A clean home is a happy home. Our professional 
                    cleaning team ensures every corner of your space is 
                    spotless.</h3>
            </div>
            </div>
            </div>

            <div className='parentContainer'>
            <div className='container'>
            <div className='imagecontent'>
                <img src={image4} alt='services' width={70} height={70} style={{marginTop:'10px'}}/>
            </div>
            <div className='textcontent'>
            <h2>Industrial Cleaning Services</h2>
                <h3>We understand that businesses have unique cleaning 
                    challenges, and we are equipped to handle them efficiently.</h3>
            </div>
            </div>

            <div className='container'>
            <div className='imagecontent'>
                <img src={image5} alt='services' width={70} height={70} style={{marginTop:'10px'}}/>
            </div>
            <div className='textcontent'>
            <h2>Pickup & Delivery Services</h2>
                <h3>Enjoy hassle-free cleaning with our convenient pickup and 
                    delivery options. Arrange pickups and deliveries at times 
                    that work best for you.</h3>
            </div>
            </div>

            <div className='container'>
            <div className='imagecontent'>
                <img src={image6} alt='services' width={70} height={70} style={{marginTop:'10px'}}/>
            </div>
            <div className='textcontent'>
            <h2>Alterations & Repairs</h2>
                <h3>Perfect fits are just a stitch away! Our skilled tailors 
                    handle a wide range of alterations and garment repairs.</h3>
            </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Services

