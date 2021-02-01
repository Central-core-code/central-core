import React from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import styles from "@styles/navigation.module.scss";
import translations from "../translations";
import getLocale from "../utils/getLocale";

function Navigation(props) {
  const locale = getLocale();
  const { about_us, our_projects, our_offer, contact } = translations[
    locale
  ].navigation;
  return (
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className={`col-6`}>
          <div className={`${styles.nav__logo}`}></div>
        </div>
        <div className={`col-6 ${styles.nav__language}`}>
          <LanguageSwitcher />
        </div>
      </div>
      <div className={`row ${styles.nav__items_wrap}`}>
        <div className="col-10 d-flex justify-content-end">
          <ul className={styles.nav__items}>
            <li>
              <a href="">{about_us}</a>
            </li>
            <li>
              <a href="">{our_projects}</a>
            </li>
            <li>
              <a href="">{our_offer}</a>
            </li>
            <li>
              <a href="">{contact}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
