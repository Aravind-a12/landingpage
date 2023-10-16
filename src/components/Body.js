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
             {/* Image 1 */}
             <div className="image-with-text">
            <img src={File1} alt="Description" className="image" />
            <div className="image-text">Lorem ipsum dolor sit</div>
            <div className="lower-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>

          {/* Image 2 */}
          <div className="image-with-text">
            <img src={File2} alt="Description" className="image" />
            <div className="upper-text">02</div>
            <div className="image-text">Lorem ipsum dolor sit</div>
            <div className="lower-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>

          {/* Image 3 */}
          <div className="image-with-text">
            <img src={File3} alt="Description" className="image" />
            <div className="upper-text">03</div>
            <div className="image-text">Lorem ipsum dolor sit</div>
            <div className="lower-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>
        </div>
        <div className="container" >
          <h1>Lorem ipsum </h1>
        <div className="vertical-line"></div>
        <div className="horizontal-line">
       
        <br/><div className='linepara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>
        
        <div className="container-content">
          <div className='wid'>
          <img src={containerImage} alt="Container" className="container-image" /></div>
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
