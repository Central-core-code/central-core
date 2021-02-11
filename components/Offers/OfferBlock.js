import React from "react";

function OfferBlock(props) {
  return (
    <div className="row offers__row">
      <div className={`col-sm-4 offset-sm-${props.offset}`}>
        <h2 className="offers__title">{props.title}</h2>
        <p className="offers__description">{props.content}</p>
      </div>
    </div>
  );
}

export default OfferBlock;
