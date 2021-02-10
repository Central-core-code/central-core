import React from "react";

import getLocale from "../../utils/getLocale";

function Slide({ slide: { alt, img, link } }) {
  return (
    <div className="mx-3">
      <div className="slide embed-responsive embed-responsive-1by1">
        <a href={link}>
          <img
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
