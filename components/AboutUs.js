import React from "react";
import getLocale from "../utils/getLocale";
import translations from "translations";

function AboutUs() {
  const locale = getLocale();
  const { title, header, desc } = translations[locale].aboutUs;

  return (
    <div id="aboutUs">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 text-center">
            <p>{title}</p>
            <h2 className="h3">{header}</h2>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
