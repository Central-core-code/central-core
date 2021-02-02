import React from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import styles from "@styles/navigation.module.scss";
import translations from "../translations";
import getLocale from "../utils/getLocale";
import Image from "next/image";
import Link from "next/link";

function Navigation(props) {
  const locale = getLocale();
  const { about_us, our_projects, our_offer, contact } = translations[
    locale
  ].navigation;

  return (
    <div className="container">
      <div className="row justify-content-between align-items-center py-3">
        <div className={`col-6`}>
          <div className={`${styles.nav__logo}`}>
            <Image src="/logo_black.svg" width={78} height={41} />
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
              <Link href="#aboutus">{about_us}</Link>
            </li>
            <li>
              <Link href="">{our_projects}</Link>
            </li>
            <li>
              <Link href="">{our_offer}</Link>
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
