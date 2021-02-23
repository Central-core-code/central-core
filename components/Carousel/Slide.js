import React from "react";

import getLocale from "../../utils/getLocale";

function Slide({ slide: { alt, title, img, logo } }) {
  return (
    <div className="mx-3">
      <div className="slide embed-responsive embed-responsive-1by1-25">
        <img
          src={img}
          className="embed-responsive-item"
          alt={alt[getLocale()]}
        />
        <div className="slide__icon-container">
          <img src={logo} alt={alt[getLocale()]} />
        </div>
      </div>
      <p className="slide__item">{title}</p>
    </div>
  );
}

export default Slide;
