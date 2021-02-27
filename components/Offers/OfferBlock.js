import React from "react";

function OfferBlock({ offset, title, content, slide = "left" }) {
  return (
    <div className="row offers__row" data-aos={`fade-${slide}`}>
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
