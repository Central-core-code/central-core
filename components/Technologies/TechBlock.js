import React from "react";

function TechBlock({ title, description, img, alt, aos }) {
  return (
    <div className="tech__block col" data-aos={aos}>
      <img src={img} width={100} height={100} alt={alt} />
      <p className="tech__title">{title}</p>
      <p>{description}</p>
    </div>
  );
}

export default TechBlock;
