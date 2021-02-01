import React from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import styles from "@styles/navigation.module.scss";

function Navigation(props) {
  return (
    <div className="container">
      <div className={`row `}>
        <div className={`col-6 `}>
          <div className={`${styles.nav__logo}`}></div>
        </div>
        <div className="col-6">
          <LanguageSwitcher />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className={styles.nav}>
            <h2 className={styles.nav__header}>NAVIGATION</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
