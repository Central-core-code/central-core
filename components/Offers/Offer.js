import React from "react";
import Img from "react-optimized-image";

import testImg from "public/icons/test.svg";

function Offer({ title, description }) {
  return (
    <div className="col">
      <Img src={testImg} width={100} height={100} />
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
}

export default Offer;
