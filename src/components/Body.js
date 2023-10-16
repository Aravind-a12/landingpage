import React from 'react';
import MyCarousel from './Carousel';
import VerticalLine from './VerticalLine'
import './Body.scss'; 
import File1 from '../assets/1.jpg';
import File2 from '../assets/2.jpg';
import File3 from '../assets/3.jpg';
import containerImage from '../assets/Rectangle.png'; 

function Body() {
  return (
    <main>
      <section className="hero">
        <MyCarousel/>
        <VerticalLine/>
        <div className="containernew" >
        <div className="vertical-line"></div>
        <div className="container-content">
          <p>Lorem</p>
          <p className='para'>ipsum</p>
        </div>
      </div>
        
        <div className="image-container">
          <img src={File1} alt="Description" className="image" />
          <img src={File2} alt="Description" className="image" />
          <img src={File3} alt="Description" className="image" />
        </div>
        
        <div className="container" >
        <div className="vertical-line"></div>
        <div className="horizontal-line"></div>

        <div className="container-content">
          <img src={containerImage} alt="Container" className="container-image" />
          <div className="content">
            <button>Lorem ipsum →</button>
          </div>
        </div>
      </div>
      </section>
      <div className="white-container">
      <div className="polygon">
      <div className="triangle right"></div>
      <div className="triangle top"></div>
      <div className="triangle left"></div>
      <div className="triangle bottom"></div>
      </div>
      </div>
      
      
    </main>
  );
}

export default Body;
