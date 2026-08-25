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
        <Link
          href="/#aboutUs"
          onClick={handleMenu}
          className={currSection === 1 ? "is_active" : ""}
        >
          {aboutUs}
        </Link>
      </li>
      <li>
        <Link
          href="/#offers"
          onClick={handleMenu}
          className={currSection === 2 ? "is_active" : ""}
        >
          {offer}
        </Link>
      </li>
      <li>
        <Link
          href="/#projects"
          onClick={handleMenu}
          className={currSection === 3 ? "is_active" : ""}
        >
          {projects}
        </Link>
      </li>
      <li>
        <Link
          href="/#estimation"
          onClick={handleMenu}
          className={currSection === 4 ? "is_active" : ""}
        >
          {estimation}
        </Link>
      </li>
      <li>
        <Link
          href="/#contactForm"
          onClick={handleMenu}
          className={currSection === 5 ? "is_active" : ""}
        >
          {contact}
        </Link>
      </li>
    </>
  );
}
