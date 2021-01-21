import React from "react";
import Link from "next/link";

export const LanguageSwitcher = () => {
  return (
    <>
      <Link href="/" locale="en">
        <a>To english</a>
      </Link>
      <Link href="/" locale="pl">
        <a>To polish</a>
      </Link>
    </>
  );
};
