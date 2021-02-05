import React from "react";
import getLocale from "../utils/getLocale";
import OurTechnologyBlock from "../components/OurTechnologyBlock";
import translations from "../translations";
import styles from "@styles/ourTechnology.module.scss";

function ourTechnology() {
  const locale = getLocale();
  const { jsDesc, phpDesc, reactDesc, nextJsDesc } = translations[
    locale
  ].ourTechnologyBlock;
  return (
    <div id="ourTechnology" className={styles.technology__wrap}>
      <div className="container">
        <div className="row">
          <div className="col-4 offset-2">
            <h3>Upholding technology as a force for good</h3>
          </div>
          <div className="col-4">
            <p className={styles.technology__main_description}>
              We look for high-impact interventions, where focusing on helping a
              specific group of people—journalists, civil society, or activists,
              for example—makes the internet and society stronger and safer for
              everyone. Our focus areas address some of the most complex
              challenges facing open societies.
            </p>
          </div>
        </div>

        <OurTechnologyBlock title="JS" content={jsDesc} offset="1" />
        <OurTechnologyBlock title="PHP" content={phpDesc} offset="5" />
        <OurTechnologyBlock title="REACT" content={reactDesc} offset="2" />
        <OurTechnologyBlock title="NextJS" content={nextJsDesc} offset="7" />
      </div>
    </div>
  );
}

export default ourTechnology;
