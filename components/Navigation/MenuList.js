import React from "react";
import getLocale from "../../utils/getLocale";
import translations from "../../translations";
import { Link as LinkScroll } from "react-scroll";
import { linkProps } from "../../utils/linkProps";
import Link from "next/link";

export function MenuList({ handleMenu = () => {} }) {
  const locale = getLocale();
  const { aboutUs, projects, offer, contact, estimation } = translations[
    locale
  ].navigation;

  return (
    <>
      <li>
        <Link href="/#aboutUs">
          <LinkScroll onClick={handleMenu} to="aboutUs" {...linkProps}>
            {aboutUs}
          </LinkScroll>
        </Link>
      </li>
      <li>
        <Link href="/#offers">
          <LinkScroll onClick={handleMenu} to="offers" {...linkProps}>
            {offer}
          </LinkScroll>
        </Link>
      </li>
      <li>
        <Link href="/#projects">
          <LinkScroll onClick={handleMenu} to="projects" {...linkProps}>
            {projects}
          </LinkScroll>
        </Link>
      </li>
      <li>
        <Link href="/#estimation">
          <LinkScroll onClick={handleMenu} to="estimation" {...linkProps}>
            {estimation}
          </LinkScroll>
        </Link>
      </li>
      <li>
        <LinkScroll onClick={handleMenu} to="contactForm" {...linkProps}>
          <Link href="/#contactForm">{contact}</Link>
        </LinkScroll>
      </li>
    </>
  );
}
