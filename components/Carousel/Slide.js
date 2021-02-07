import React from "react";
import skyTower from "public/projects/skyTower.png";
import Img from "react-optimized-image";

import styles from "@styles/slider.module.scss";

function Slide() {
  return (
    <div className={`${styles.slide} embed-responsive embed-responsive-3by2`}>
      <Img src={skyTower} />
    </div>
  );
}

export default Slide;
