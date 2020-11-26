import React from 'react';
import Carousel from '../components/Carousel.js';
import CardsContainer from '../components/CardsContainer.js';

function MainPage() {
  return (
    <div className="main">
      <div className="main__container">
        <Carousel />
        <CardsContainer />
      </div>
    </div>
  )
}

export default MainPage;