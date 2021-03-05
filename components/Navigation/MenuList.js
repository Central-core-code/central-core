import React from "react";
import getLocale from "../../utils/getLocale";
import translations from "../../translations";
import Link from "next/link";

export function MenuList({ handleMenu = () => {} }) {
  const locale = getLocale();
  const { aboutUs, projects, offer, contact, estimation } = translations[
    locale
  ].navigation;

  return (
    <>
      <li>
        <Link href="/#aboutUs" onClick={handleMenu}>
          {aboutUs}
        </Link>
      </li>
      <li>
        <Link href="/#offers" onClick={handleMenu}>
          {offer}
        </Link>
      </li>
      <li>
        <Link href="/#projects" onClick={handleMenu}>
          {projects}
        </Link>
      </li>
      <li>
        <Link href="/#estimation" onClick={handleMenu}>
          {estimation}
        </Link>
      </li>
      <li>
        <Link href="/#contactForm" onClick={handleMenu}>
          {contact}
        </Link>
      </li>
    </>
  );
}
