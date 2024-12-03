import React from 'react'
import './style.css'
import aboutimg from './assets/webimages/gali1.jpg'
function About() {
  return (
    <div className='aboutcontainer' id='About'>
        <div className='aboutimg'>
            <img src={aboutimg} alt='aboutimg'/>
        </div>
        <div className='aboutwriteup'>
            <h1 >ABOUT US</h1>
            <h3>Welcome to Valor Drycleaners, your trusted dry-cleaning partner. 
                Founded in 2014, we have proudly served the Port Harcourt area with 
                a commitment to quality, convenience, and exceptional customer 
                service.<br/><br/>

                Our mission is to provide a seamless dry-cleaning experience that 
                saves you time while ensuring your garments receive the utmost care. 
                We are passionate about maintaining the integrity of your valuables, 
                from everyday items to cherished keepsakes.<br/><br/>.</h3>

                {/* With a skilled team of professionals and cutting-edge technology, 
                we have built a reputation for excellence. At Valor Drycleaners, 
                every garment tells a story, and we’re here to ensure it continues 
                in pristine condition */}
        </div>
      
    </div>
  )
}

export default About
