import React from "react";
import Link from "next/link";

import getLocale from "../utils/getLocale";

export const LanguageSwitcher = () => {
  const locale = getLocale();
  const isEn = locale === "en";

  return (
    <>
      <Link href="/" locale="en" className={isEn ? "nav__language_select" : ""}>
        EN
      </Link>
      <Link href="/" locale="pl" className={!isEn ? "nav__language_select" : ""}>
        PL
      </Link>
    </>
  );
};
