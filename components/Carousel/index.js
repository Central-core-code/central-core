import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "@styles/slider.module.scss";
import Slide from "./Slide";
import { settings, slides } from "./slidesData";

function Carousel() {
  return (
    <div className="py-4" id="projects">
      <Slider className={styles.slider} {...settings}>
        {slides.map((slide) => (
          <Slide slide={slide} />
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
