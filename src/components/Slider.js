import React from 'react';
import img1 from "../images/slider_img_1.jpg";
import img2 from "../images/slider_img_2.jpg";
import img3 from "../images/slider_img_3.jpg";

function Slider() {
  // const [ sliderImg, setSliderImg ] = React.useState( [
  //   { id: 1, url: img1},
  //   { id: 2, url: img2},
  //   { id: 3, url: img3},
  // ] );
  return (
    <div className="slider">
      <div className="slider__container">
        <button className="slider__button">pref</button>
        <div className="slider__img-container"><img className="slider__img" alt="" src={img2}/></div>
        <button className="slider__button">next</button>
      </div>
    </div>
  )
}

export default Slider;