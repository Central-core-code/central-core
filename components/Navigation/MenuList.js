import React from "react";
import getLocale from "../../utils/getLocale";
import translations from "../../translations";
import { Link } from "react-scroll";
import { linkProps } from "../../utils/linkProps";

export function MenuList({ handleMenu = () => {} }) {
  const locale = getLocale();
  const { aboutUs, projects, offer, contact, estimation } = translations[
    locale
  ].navigation;

  return (
    <>
      <li>
        <Link onClick={handleMenu} to="aboutUs" {...linkProps}>
          {aboutUs}
        </Link>
      </li>
      <li>
        <Link onClick={handleMenu} to="offers" {...linkProps}>
          {offer}
        </Link>
      </li>
      <li>
        <Link onClick={handleMenu} to="projects" {...linkProps}>
          {projects}
        </Link>
      </li>
      <li>
        <Link onClick={handleMenu} to="estimation" {...linkProps}>
          {estimation}
        </Link>
      </li>
      <li>
        <Link onClick={handleMenu} to="contactForm" {...linkProps}>
          {contact}
        </Link>
      </li>
    </>
  );
}
