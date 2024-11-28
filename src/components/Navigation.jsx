import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import cleaner from './assets/women.png';

function Navigation() {
  return (
    <div className='navigationtop'>
        <div className='titlebar'>
            <Link to='/'><h3><img src={cleaner} alt='cleaning' width={40} height={40}/>
            Valor Drycleaners</h3></Link>
        </div>
        <div className='navigation'>
        <ul>
            <Link to='/Features'>Features</Link>
            <Link to='/About'>About</Link>
            <Link to='/Services'>Services</Link>
            <Link to='/Gallery'>Gallery</Link>
            <Link to='/Testimonial'>Testimonial</Link>
            <Link to='/Team'>Team</Link>
            <Link to='/Contact'>Contact</Link>
        </ul>
        </div>
    </div>
  )
}

export default Navigation;
