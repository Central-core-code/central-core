import React from "react";
import skyTower from "public/projects/skyTower.png";
import Img from "react-optimized-image";

import styles from "@styles/slider.module.scss";

function Slide() {
  return (
    <div className="mx-3">
      <div className={`${styles.slide} embed-responsive embed-responsive-1by1`}>
        <Img
          src={skyTower}
          className="embed-responsive-item"
          alt="our project sky tower book"
        />
      </div>
    </div>
  );
}

export default Slide;
