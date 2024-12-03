import React from 'react';
import './style.css'
//import { Link } from 'react-router-dom';
import cleaner from './assets/webimages/women.png';
import {HashLink as Link} from 'react-router-hash-link';


function Navigation() {

  const scrollWithOffset = (el) => {
    const yOffset = -100; // Adjust based on your header height
    const yPosition = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yPosition, behavior: 'smooth' });
  };
  return (
    <div className='navigationtop' >
        <div className='titlebar'>
            <Link to='/'><h3><img src={cleaner} alt='cleaning' width={40} height={40}/>
            Valor Drycleaners</h3></Link>
        </div>
        <div className='navigation'>
        <ul>
            <Link  scroll={scrollWithOffset} to='#featuressection' smooth>Features</Link>
            <Link to='#About' scroll={scrollWithOffset} smooth>About</Link>
            <Link scroll={scrollWithOffset} to='#Services' smooth>Services</Link>
            <Link scroll={scrollWithOffset}  to='#Gallery' smooth>Gallery</Link>
            <Link to='#Testimonial' scroll={scrollWithOffset}  smooth>Testimonial</Link>
            <Link scroll={scrollWithOffset}  to='#Team' smooth>Team</Link>
            <Link to='#Contact' smooth>Contact</Link>
        </ul>
        </div>
    </div>
  )
}

export default Navigation;
