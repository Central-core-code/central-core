import React from "react";
import TechBlock from "./TechBlock";

import envelope from "public/icons/envelope-dark.svg";
import getLocale from "../../utils/getLocale";
import translations from "translations";

function Technologies() {
  const locale = getLocale();
  const { js, wordpress, ux } = translations[locale].technologies;

  return (
    <div className="container text-center tech" id="projects" name="scrollBg">
      <div className="row">
        <div className="col-8 mx-auto">
          <p className="font-bold m-0 tech__title">OUR TECHNOLOGIES</p>
          <h3 className="tech__description">
            Sed ut perspicatinus ode ominis iste natus error sit voluptatem
            accusantinum diloreqm
          </h3>
        </div>
      </div>
      <div className="row justify-content-between">
        <TechBlock
          title="WORDPRESS"
          description={wordpress}
          img={envelope}
          alt="triangle"
        />
        <TechBlock
          title="JAVASCRIPT"
          description={js}
          img={envelope}
          alt="square"
        />
        <TechBlock
          title="UX/UI"
          description={ux}
          img={envelope}
          alt="triangle"
        />
      </div>
    </div>
  );
}

export default Technologies;
