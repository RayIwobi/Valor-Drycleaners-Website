import React from 'react'
import image1 from '../components/assets/galleryimg/pic1.jpg';
import image2 from '../components/assets/galleryimg/pic2.jpg';
import image3 from '../components/assets/galleryimg/pic3.jpg';
import image4 from '../components/assets/galleryimg/pic4.jpg';
import image5 from '../components/assets/galleryimg/pic5.jpg';
import image6 from '../components/assets/galleryimg/pic6.jpg';
import image7 from '../components/assets/galleryimg/pic8.jpg';
import image8 from '../components/assets/galleryimg/pic9.jpg';
import image9 from '../components/assets/galleryimg/pic10.jpg';

function Gallery() {
  return (
    <div>
      <div>
        <img src={image1} alt='pic1'/>
        <img src={image2} alt='pic2'/>
        <img src={image3} alt='pic3'/>
      </div>
      <div>
        <img src={image4} alt='pic4'/>
        <img src={image5} alt='pic5'/>
        <img src={image6} alt='pic6'/>
      </div>

      <div>
        <img src={image7} alt='pic7'/>
        <img src={image8} alt='pic8'/>
        <img src={image9} alt='pic9'/>
      </div>

    </div>
  )
}

export default Gallery
