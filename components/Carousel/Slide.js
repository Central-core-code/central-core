import React from "react";

import getLocale from "../../utils/getLocale";

function Slide({ slide: { alt, title, img, img1, logo } }) {
  return (
    <div className="mx-3">
      <div className="slide embed-responsive embed-responsive-1by1-25">
        {/* <img
          src={img}
          className="embed-responsive-item"
          alt={alt[getLocale()]}
        /> */}
        <picture>
          <source
            className="embed-responsive-item"
            srcset={img}
            type="image/webp"
          />
          <source
            className="embed-responsive-item"
            srcset={img1}
            type="image/jpeg"
          />
          <img
            className="embed-responsive-item"
            src={img1}
            alt={alt[getLocale()]}
          />
        </picture>
        <div className="slide__icon-container">
          <img src={logo} alt={alt[getLocale()]} />
        </div>
      </div>
      <p className="slide__item">{title}</p>
    </div>
  );
}

export default Slide;
