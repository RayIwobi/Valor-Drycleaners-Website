import React from 'react';
import Navigation from './components/Navigation';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonial from './components/Testimonial';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
      <Navigation />
      <Home/>
      <Features/>
      <About/>
      <Services/>
      <Gallery/>
      <Testimonial/>
      <Team/>
      <Contact/>
      <Footer />
      </Router>
    </div>
  )
}

export default App;