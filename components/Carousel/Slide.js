import React from "react";

import getLocale from "../../utils/getLocale";

function Slide({
  slide: { alt, title, imgWebp, imgPng, logo, logoWidth, logoHeight },
}) {
  return (
    <div className="mx-3">
      <div className="slide embed-responsive embed-responsive-1by1-25">
        <picture>
          <source
            className="embed-responsive-item"
            srcSet={imgWebp}
            type="image/webp"
          />
          <img
            className="embed-responsive-item"
            src={imgPng}
            alt={alt[getLocale()]}
            width="368"
            height="430"
          />
        </picture>
        <div className="slide__icon-container">
          <img
            src={logo}
            alt={alt[getLocale()]}
            width={logoWidth}
            height={logoHeight}
          />
        </div>
      </div>
      <p className="slide__item">{title}</p>
    </div>
  );
}

export default Slide;
