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
        <Link href="/#aboutUs">
          <a
            onClick={handleMenu}
            className={currSection === 1 ? "is_active" : ""}
          >
            {aboutUs}
          </a>
        </Link>
      </li>
      <li>
        <Link href="/#offers">
          <a
            onClick={handleMenu}
            className={currSection === 2 ? "is_active" : ""}
          >
            {offer}
          </a>
        </Link>
      </li>
      <li>
        <Link href="/#projects">
          <a
            onClick={handleMenu}
            className={currSection === 3 ? "is_active" : ""}
          >
            {projects}
          </a>
        </Link>
      </li>
      <li>
        <Link href="/#estimation">
          <a
            onClick={handleMenu}
            className={currSection === 4 ? "is_active" : ""}
          >
            {estimation}
          </a>
        </Link>
      </li>
      <li>
        <Link href="/#contactForm">
          <a
            onClick={handleMenu}
            className={currSection === 5 ? "is_active" : ""}
          >
            {contact}
          </a>
        </Link>
      </li>
    </>
  );
}
