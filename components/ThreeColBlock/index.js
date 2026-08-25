import React from "react";
import ColBlock from "./ColBlock";
import getLocale from "../../utils/getLocale";
import translations from "translations";
import { useWindowWidth } from "../../utils/useWindowWidth";

function ThreeColBlock({ bgColor }) {
  const locale = getLocale();
  const { contact, project, estimation, realization } = translations[
    locale
  ].workProgress;

  const isWhite = bgColor === "white";

  return (
    <div className="container text-center tech" name="scrollBg">
      <span id="estimation" className="offset" />
      <div className="row">
        <div className="col-12 col-lg-8 mx-auto">
          <p className="font-bold m-0 tech__title">{contact}</p>
          <h3 className="tech__description"></h3>
        </div>
      </div>
      <div className="row justify-content-between" data-aos="fade-down">
        <ColBlock
          title={project.title}
          description={project.description}
          img={isWhite ? "/icons/triangle-dark.png" : "/icons/triangle-light.png"}
          alt="triangle"
        />
        <ColBlock
          title={estimation.title}
          description={estimation.description}
          img={isWhite ? "/icons/rectangle-dark.png" : "/icons/rectangle-light.png"}
          alt="square"
        />
        <ColBlock
          title={realization.title}
          description={realization.description}
          img={isWhite ? "/icons/circle-dark.png" : "/icons/circle-light.png"}
          alt="triangle"
        />
      </div>
    </div>
  );
}

export default ThreeColBlock;
