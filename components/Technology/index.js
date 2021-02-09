import React from "react";
import getLocale from "../../utils/getLocale";
import TechBlock from "./TechBlock";
import translations from "../../translations";
import styles from "@styles/technology.module.scss";

function Technology() {
  const locale = getLocale();
  const { header, desc, webApp, ecommerce, seo, cms } = translations[
    locale
  ].technologyDesc;

  return (
    <div id="ourTechnology" className={styles.technology__wrap} name="scrollBg">
      <div className="container">
        <div className="row">
          <div className="col-4 offset-2">
            <h3>{header}</h3>
          </div>
          <div className="col-4">
            <p className={styles.technology__main_description}>{desc}</p>
          </div>
        </div>

        <TechBlock title="Web Dev" content={webApp} offset="1" />
        <TechBlock title="Ecommerce" content={ecommerce} offset="5" />
        <TechBlock title="SEO" content={seo} offset="2" />
        <TechBlock title="CMS" content={cms} offset="7" />
      </div>
    </div>
  );
}

export default Technology;
