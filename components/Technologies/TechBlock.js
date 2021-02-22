import React from "react";

function TechBlock({ title, description, img, alt }) {
  return (
    <div className="tech__block col-12 col-md-4 py-5">
      <img src={img} width={100} height={100} alt={alt} />
      <p className="tech__title">{title}</p>
      <p>{description}</p>
    </div>
  );
}

export default TechBlock;
