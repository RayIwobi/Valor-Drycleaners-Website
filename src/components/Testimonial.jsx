import React from 'react';
import testimg1 from '../components/assets/testimonies/test1.jpg';
import testimg2 from '../components/assets/testimonies/test2.jpg';
import testimg3 from '../components/assets/testimonies/test3.jpg';
import testimg4 from '../components/assets/testimonies/test4.jpg';
import testimg5 from '../components/assets/testimonies/test5.jpg';
import testimg6 from '../components/assets/testimonies/test6.jpg';


function Testimonial() {
  return (
    <div className='testimonialmain'>
        <div>
        <div className='featureheader'>
            <h1>WHAT OUR CLIENTS SAY</h1>
            <hr className='horizontalrule'/>
        </div>
        <div className='testimonials'>
        <div className='individualtestimonies'>
            <div className='testimonyimg'>
                <img src={testimg1} alt='img 1'/>
            </div>
            <div className='testimonytext'>
                <h3>“I’ve been using Valor Drycleaners for years, 
                    and they never disappoint. My clothes always 
                    come back looking brand new!”</h3><br/>
                <h4>- Grace mensah</h4>
           </div>
        </div>

        <div className='individualtestimonies'>
            <div className='testimonyimg'>
                <img src={testimg2} alt='img 1'/>
            </div>
            <div className='testimonytext'>
                <h3>“The free pickup and delivery service is a game 
                    changer! I don’t have to worry about squeezing dry 
                    cleaning into my schedule.”</h3><br/>
                <h4>- Angela Christian</h4>
           </div>
        </div>

        <div className='individualtestimonies'>
            <div className='testimonyimg'>
                <img src={testimg3} alt='img 1'/>
            </div>
            <div className='testimonytext'>
                <h3>“They did an amazing job cleaning and preserving
                    my wedding gown. Highly recommend!”</h3><br/>
                <h4>- Jonny Perterson</h4>
           </div>
        </div>

        <div className='individualtestimonies'>
            <div className='testimonyimg'>
                <img src={testimg4} alt='img 1'/>
            </div>
            <div className='testimonytext'>
                <h3>“The team at Valor Drycleaners is friendly, professional, 
                    and always goes the extra mile.”</h3><br/>
                <h4>- Brian Efe</h4>
           </div>
        </div>

        <div className='individualtestimonies'>
            <div className='testimonyimg'>
                <img src={testimg5} alt='img 1'/>
            </div>
            <div className='testimonytext'>
                <h3>“Affordable prices and top-notch quality. 
                    I wouldn’t trust anyone else with my clothes.”</h3><br/>
                <h4>- Rachel Morris</h4>
           </div>
        </div>

        <div className='individualtestimonies'>
            <div className='testimonyimg'>
                <img src={testimg6} alt='img 1' />
            </div>
            <div className='testimonytext'>
                <h3>"I’ve been using Valor drycleaners for over a year now, 
                    and they’ve never disappointed.”</h3><br/>
                <h4>- Sarah Chukwu</h4>
           </div>
        </div>
        </div>





        </div>
      
    </div>
  )
}

export default Testimonial
