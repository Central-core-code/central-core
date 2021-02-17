import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slide from "./Slide";
import { settings, slides } from "./slidesData";

function Carousel() {
  return (
    <div>
      <Slider className="slider" {...settings}>
        {slides.map((slide, i) => (
          <Slide key={i} slide={slide} />
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
