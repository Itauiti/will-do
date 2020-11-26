import React from 'react';
import slide1 from "../images/slider_img_1.jpg";
import slide2 from "../images/slider_img_2.jpg";
import slide3 from "../images/slider_img_3.jpg";
import Slider from "react-slick";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    // fade: true,
    speed: 4000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider">
      <div className="slider__container">
        <Slider {...settings}>
          <div className="slider__img-container">
            <img className="slider__img" src={slide2} alt=""/>
          </div>
          <div className="slider__img-container">
            <img className="slider__img" src={slide1} alt=""/>
          </div>
          <div className="slider__img-container">
            <img className="slider__img" src={slide3} alt=""/>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Carousel;