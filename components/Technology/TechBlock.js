import React from "react";

function TechBlock(props) {
  return (
    <div className="row technology__row">
      <div className={`col-sm-4 offset-sm-${props.offset}`}>
        <h2 className="technology__title">{props.title}</h2>
        <p className="technology__description">{props.content}</p>
      </div>
    </div>
  );
}

export default TechBlock;
