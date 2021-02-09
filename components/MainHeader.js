import React from "react";
import styles from "@styles/header.module.scss";
import getLocale from "../utils/getLocale";
import translations from "translations";

function MainHeader() {
  const locale = getLocale();
  const { header1, header2, header3 } = translations[locale].header;
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 text-center">
          <div className={styles.header__wrap}>
            <p className="h1">{header1}</p>
            <h1>{header2}</h1>
            <p className="h1">{header3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
