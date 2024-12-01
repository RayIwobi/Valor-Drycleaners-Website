import React, { useState } from 'react';
//import Masonry from "react-responsive-masonry";
import image1 from '../components/assets/galleryimg/pic1.jpg';
import image2 from '../components/assets/galleryimg/pic2.jpg';
import image3 from '../components/assets/galleryimg/pic3.jpg';
import image4 from '../components/assets/galleryimg/pic4.jpg';
import image5 from '../components/assets/galleryimg/pic5.jpg';
import image6 from '../components/assets/galleryimg/pic6.jpg';
import image7 from '../components/assets/galleryimg/pic8.jpg';
import image8 from '../components/assets/galleryimg/pic9.jpg';
import image9 from '../components/assets/galleryimg/pic10.jpg';
//import { ResponsiveMasonry } from 'react-responsive-masonry';


const images = [
  {src: image1, alt: "image1"},
  {src: image2, alt: "image2"},
  {src: image3, alt: "image3"},
  {src: image4, alt: "image5"},
  {src: image5, alt: "image6"},
  {src: image6, alt: "image10"},
  {src: image7, alt: "image8"},
  {src: image8, alt: "image9"},
  {src: image9, alt: "image9"},
]

function Gallery() {
//   const images = [
//     "https://picsum.photos/2000/2000? alt='pic1'",
//     "https://picsum.photos/3000/2000? alt='pic2'",
//     "https://picsum.photos/2000/3000? alt='pic3'",
//     "https://picsum.photos/1500/1500? alt='pic4'",
//     "https://picsum.photos/2000/1500? alt='pic5'",
//     "https://picsum.photos/1500/3000? alt='pic6'",
// ]

  //const [data, setData] = useState({img: '', i:0});

  // const viewimage = (i) => {
  //   setData({i})
  // }

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openFullscreen = (index) => {
    setCurrentIndex(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  return (
    <>
    {isFullscreen && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <button className="nav-button prev" onClick={(e) => {e.stopPropagation(); showPrevious();}}>
            &#10094;
          </button>
          <img src={images.src[currentIndex]} alt={`Fullscreen ${currentIndex}`} className="fullscreen-image" />
          <button className="nav-button next" onClick={(e) => {e.stopPropagation(); showNext();}}>
            &#10095;
          </button>
        </div>
      )}


    {/* {
      data.i && 
      (<div style={{
        width: '100%',
        height: '100vh',
        background: 'black',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        <img src={data.i} style={{width: 'auto', maxWidth:'90%', maxHeight:'90%'}} alt=''/>
      </div>)
    } */}

    <div className='gallerymain'>
        <div className='featureheader'>
            <h1>GALLERY</h1>
            <hr className='horizontalrule'/>
            <h3>The Gallery section showcases the quality and care that 
              define our services at Valor Drycleaners. From spotless dry 
              cleaning to pristine home and industrial cleaning results, 
              this visual collection highlights our expertise and attention 
              to detail.
            </h3>
        </div>
        <div style={{padding: '10px'}}>
          {/* <Masonry columnsCount={3} gutter="10px"> */}
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt=''
                        style={{width: "100%", display: "block", cursor: 'pointer'}}
                        onClick={() => openFullscreen(index)}
                    />
                ))}
            {/* </Masonry> */}
        </div>
        
    </div>
    </>
  )
}

export default Gallery
