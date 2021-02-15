import React from "react";
import getLocale from "../../utils/getLocale";
import translations from "../../translations";
import { Link } from "react-scroll";

const linkProps = {
  spy: true,
  smooth: true,
  offset: 50,
  duration: 500,
  activeClass: "is_active",
  offset: -100,
};

export function MenuList({ handleMenu = () => {} }) {
  const locale = getLocale();
  const { aboutUs, projects, offer, contact } = translations[locale].navigation;

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
        <Link onClick={handleMenu} to="contactForm" {...linkProps}>
          {contact}
        </Link>
      </li>
    </>
  );
}
