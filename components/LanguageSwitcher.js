import React from "react";
import Link from "next/link";

import getLocale from "../utils/getLocale";

export const LanguageSwitcher = () => {
  const locale = getLocale();
  const isEn = locale === "en";

  return (
    <>
      <Link href="/" locale="en">
        <a className={isEn ? "nav__language_select" : ""}>EN</a>
      </Link>
      <Link href="/" locale="pl">
        <a className={!isEn ? "nav__language_select" : ""}>PL</a>
      </Link>
    </>
  );
};
