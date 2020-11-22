import React from 'react';
import Slider from '../components/Slider.js';
import CardsContainer from '../components/CardsContainer.js';

function MainPage() {
  return (
    <div className="main">
      <div className="main__container">
        <Slider />
        <CardsContainer />
      </div>
    </div>
  )
}

export default MainPage;