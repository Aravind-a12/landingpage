import React from 'react';
import MyCarousel from './Carousel';
import './Body.scss'

function Body() {
  return (
    <main>
      <section className="hero">
      <MyCarousel /> 
      <div className="verticalrectangle">Lorem</div>
        <h1>Welcome to our Website</h1>
        <p>Your source for all things amazing!</p>
      </section>
    </main>
  );
}

export default Body;
