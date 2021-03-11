import React from "react";
import ColBlock from "./ColBlock";

import triangleDark from "public/icons/triangle-dark.png";
import triangleLight from "public/icons/triangle-light.png";
import rectangleDark from "public/icons/rectangle-dark.png";
import rectangleLight from "public/icons/rectangle-light.png";
import circleDark from "public/icons/circle-dark.png";
import circleLight from "public/icons/circle-light.png";
import getLocale from "../../utils/getLocale";
import translations from "translations";
import { useWindowWidth } from "../../utils/useWindowWidth";

function ThreeColBlock({ bgColor }) {
  const locale = getLocale();
  const { contact, project, estimation, realization } = translations[
    locale
  ].workProgress;

  const isWhite = bgColor === "white";

  const isMobile = useWindowWidth() < 1032;

  let dataAos = {};
  if (!isMobile) {
    dataAos["data-aos"] = "fade-down";
  }

  return (
    <div className="container text-center tech" name="scrollBg">
      <span id="estimation" className="offset" />
      <div className="row">
        <div className="col-12 col-lg-8 mx-auto">
          <p className="font-bold m-0 tech__title">{contact}</p>
          <h3 className="tech__description"></h3>
        </div>
      </div>
      <div className="row justify-content-between" {...dataAos}>
        <ColBlock
          title={project.title}
          description={project.description}
          img={isWhite ? triangleDark : triangleLight}
          alt="triangle"
        />
        <ColBlock
          title={estimation.title}
          description={estimation.description}
          img={isWhite ? rectangleDark : rectangleLight}
          alt="square"
        />
        <ColBlock
          title={realization.title}
          description={realization.description}
          img={isWhite ? circleDark : circleLight}
          alt="triangle"
        />
      </div>
    </div>
  );
}

export default ThreeColBlock;
