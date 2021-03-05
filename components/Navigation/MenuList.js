import React from "react";
import getLocale from "../../utils/getLocale";
import translations from "../../translations";
import Link from "next/link";

export function MenuList({ handleMenu = () => {}, currSection }) {
  const locale = getLocale();
  const { aboutUs, projects, offer, contact, estimation } = translations[
    locale
  ].navigation;

  return (
    <>
      <li>
        <Link href="/#aboutUs" onClick={handleMenu}>
          <a className={currSection === 1 ? "is_active" : ""}>{aboutUs}</a>
        </Link>
      </li>
      <li>
        <Link href="/#offers" onClick={handleMenu}>
          <a className={currSection === 2 ? "is_active" : ""}>{offer}</a>
        </Link>
      </li>
      <li>
        <Link href="/#projects" onClick={handleMenu}>
          <a className={currSection === 3 ? "is_active" : ""}>{projects}</a>
        </Link>
      </li>
      <li>
        <Link href="/#estimation" onClick={handleMenu}>
          <a className={currSection === 4 ? "is_active" : ""}>{estimation}</a>
        </Link>
      </li>
      <li>
        <Link href="/#contactForm" onClick={handleMenu}>
          <a className={currSection === 5 ? "is_active" : ""}>{contact}</a>
        </Link>
      </li>
    </>
  );
}
