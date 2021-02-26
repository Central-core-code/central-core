import React from "react";
import TechBlock from "./TechBlock";

import triangleDark from "public/icons/triangle-dark.png";
import triangleLight from "public/icons/triangle-light.png";
import rectangleDark from "public/icons/rectangle-dark.png";
import rectangleLight from "public/icons/rectangle-light.png";
import circleDark from "public/icons/circle-dark.png";
import circleLight from "public/icons/circle-light.png";
import getLocale from "../../utils/getLocale";
import translations from "translations";

function Technologies({ bgColor }) {
  const locale = getLocale();
  const { js, wordpress, ux } = translations[locale].technologies;

  const isWhite = bgColor === "white";

  return (
    <div
      id="technologies"
      className="container text-center tech"
      name="scrollBg"
    >
      <div className="row">
        <div className="col-12 col-lg-8 mx-auto">
          <p className="font-bold m-0 tech__title">OUR TECHNOLOGIES</p>
          <h3 className="tech__description">
            Sed ut perspicatinus ode ominis iste natus error sit voluptatem
            accusantinum diloreqm
          </h3>
        </div>
      </div>
      <div className="row justify-content-between" data-aos="fade-down">
        <TechBlock
          title="WORDPRESS"
          description={wordpress}
          img={isWhite ? triangleDark : triangleLight}
          alt="triangle"
        />
        <TechBlock
          title="React.js"
          description={js}
          img={isWhite ? rectangleDark : rectangleLight}
          alt="square"
        />
        <TechBlock
          title="Node.js"
          description={ux}
          img={isWhite ? circleDark : circleLight}
          alt="triangle"
        />
      </div>
    </div>
  );
}

export default Technologies;
