import React from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import styles from "@styles/navigation.module.scss";

function Navigation(props) {
  return (
    <div className={styles.nav}>
      <h2>NAVIGATION</h2>
      <LanguageSwitcher />
    </div>
  );
}

export default Navigation;
