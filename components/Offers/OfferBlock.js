import React from "react";

function OfferBlock({ offset, title, content, slide = "left" }) {
  return (
    <div className="row offers__row" data-aos={`slide-${slide}`}>
      <div className={`col-sm-4 offset-sm-${offset}`}>
        <h2 className="offers__title">{title}</h2>
        <p className="offers__description">{content}</p>
      </div>
    </div>
  );
}

export default OfferBlock;
