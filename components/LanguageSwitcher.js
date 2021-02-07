import React from "react";
import Link from "next/link";
import styles from "@styles/navigation.module.scss";

import getLocale from "../utils/getLocale";

export const LanguageSwitcher = () => {
  const locale = getLocale();
  const isEn = locale === "en";

  return (
    <>
      <Link href='/' locale='en'>
        <a className={isEn ? styles.nav__language_select : ""}>EN</a>
      </Link>
      <Link href='/' locale='pl'>
        <a className={!isEn ? styles.nav__language_select : ""}>PL</a>
      </Link>
    </>
  );
};
