// Carousel.js
import React, { useState, useEffect } from 'react';
import './Carousel.scss'; 
import image1 from '../assets/emile-perron-xrVDYZRGdw4-unsplash.jpg';
import image2 from '../assets/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg';
import image3 from '../assets/james-harrison-vpOeXr5wmR4-unsplash.jpg';
import logoImage from '../assets/Union.png'; // Import your logo image

function Carousel() {
    const images = [
      image1,
      image2,
      image3,
    ];
  
    const [currentImage, setCurrentImage] = useState(0);
  
    const nextImage = () => {
      setCurrentImage((currentImage + 1) % images.length);
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextImage();
      }, 3000); // Change the interval (in milliseconds) to adjust autoplay speed
  
      return () => {
        clearInterval(interval);
      };
    }, [currentImage]);
  
    return (
      <div className="carousel">
        <div className="carousel-content">
          <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
          <div className="logo-text">
            <img src={logoImage} alt="Your Logo" className="logo-image" />
            <p>Logo</p>
          </div>
          <div className="after"></div>
          <main>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua.
            </p>
          </main>
        </div>
      </div>
    );
  }
  

export default Carousel;
