import React from "react";
import { useWindowWidth } from "../../utils/useWindowWidth";

function OfferBlock({ offset, title, content, slide = "left" }) {
  const isMobile = useWindowWidth() < 1032;

  let dataAos = {};
  if (!isMobile) {
    dataAos["data-aos"] = `fade-${slide}`;
  }

  return (
    <div className="row offers__row" {...dataAos}>
      <div className={`col-sm-6 offset-sm-${offset}`}>
        <h2 className={`offers__title text-${slide} text-sm-left`}>{title}</h2>
        <p className={`offers__description text-${slide} text-sm-left`}>
          {content}
        </p>
      </div>
    </div>
  );
}

export default OfferBlock;
