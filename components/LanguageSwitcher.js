import React from "react";
import Link from "next/link";

export const LanguageSwitcher = () => {
  return (
    <>
      <Link href="/" locale="en">
        <a>EN</a>
      </Link>
      <Link href="/" locale="pl">
        <a>PL</a>
      </Link>
    </>
  );
};
