import React from "react";
import Slider from "react-slick";
import uniqueId from "lodash/uniqueId";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slide from "./Slide";
import { settings, slides } from "./slidesData";

function Carousel() {
  return (
    <div name="scrollBg">
      <span id="projects" className="offset" />
      <Slider className="slider" {...settings}>
        {slides.map((slide) => (
          <Slide key={uniqueId()} slide={slide} />
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
