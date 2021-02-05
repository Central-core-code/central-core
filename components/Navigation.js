import React from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import styles from "@styles/navigation.module.scss";
import translations from "../translations";
import getLocale from "../utils/getLocale";
import Img from "react-optimized-image";
import LogoBlack from "public/logo_black.svg";
import Link from "next/link";

function Navigation(props) {
  const locale = getLocale();
  const { aboutUs, projects, offer, contact } = translations[locale].navigation;

  return (
    <div className="container">
      <div className="row justify-content-between align-items-center py-3">
        <div className="col-6">
          <div className={styles.nav__logo}>
            <Img src={LogoBlack} width={78} height={41} alt="logo" />
          </div>
        </div>
        <div className={`col-6 ${styles.nav__language}`}>
          <LanguageSwitcher />
        </div>
      </div>
      <div className={`row ${styles.nav__items_wrap}`}>
        <div className="col-10 d-flex justify-content-end">
          <ul className={styles.nav__items}>
            <li>
              <Link href="#aboutUs">{aboutUs}</Link>
            </li>
            <li>
              <Link href="">{projects}</Link>
            </li>
            <li>
              <Link href="">{offer}</Link>
            </li>
            <li>
              <Link href="">{contact}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
