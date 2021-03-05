import React from "react";
import getLocale from "../utils/getLocale";
import translations from "translations";

function AboutUs() {
  const locale = getLocale();
  const { title, headline, desc } = translations[locale].aboutUs;

  return (
    <div id="aboutUs" className="about" name="scrollBg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <p className="font-bold about__title">{title}</p>
            <h2 className="h3 about__headline">{headline}</h2>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
