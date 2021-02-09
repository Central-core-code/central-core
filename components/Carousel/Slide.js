import React from "react";
import Img from "react-optimized-image";

import styles from "@styles/slider.module.scss";
import getLocale from "../../utils/getLocale";

function Slide({ slide: { title, img, alt, link } }) {
  return (
    <div className="mx-3">
      <div className={`${styles.slide} embed-responsive embed-responsive-1by1`}>
        <a href={link}>
          <Img
            src={img}
            className="embed-responsive-item"
            alt={alt[getLocale()]}
          />
        </a>
      </div>
    </div>
  );
}

export default Slide;
