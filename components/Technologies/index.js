import React from "react";
import TechBlock from "./TechBlock";

import triangle from "public/icons/triangle.png";
import rectangle from "public/icons/rectangle.png";
import circle from "public/icons/circle.png";
import getLocale from "../../utils/getLocale";
import translations from "translations";

function Technologies() {
  const locale = getLocale();
  const { js, wordpress, ux } = translations[locale].technologies;

  return (
    <div
      id="technologies"
      className="container text-center tech"
      name="scrollBg">
      <div className="row">
        <div className="col-8 mx-auto">
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
          img={triangle}
          alt="triangle"
        />
        <TechBlock
          title="React.js"
          description={js}
          img={rectangle}
          alt="square"
        />
        <TechBlock
          title="Node.js"
          description={ux}
          img={circle}
          alt="triangle"
        />
      </div>
    </div>
  );
}

export default Technologies;
