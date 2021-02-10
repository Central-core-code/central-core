import React, { useState, useRef } from "react";
import { LanguageSwitcher } from "../LanguageSwitcher";

import translations from "../../translations";
import getLocale from "../../utils/getLocale";
import Img from "react-optimized-image";
import LogoBlack from "public/logo_black.svg";
import { Link } from "react-scroll";

const linkProps = {
  spy: true,
  smooth: true,
  offset: 50,
  duration: 500,
  activeClass: "is_active",
  offset: -100,
};

function MobileNav() {
  const locale = getLocale();

  const [isNavOpen, setNavOpen] = useState(false);
  const { aboutUs, projects, offer, contact } = translations[locale].navigation;

  const handleShowMenu = () => {
    setNavOpen(!isNavOpen);
  };
  return (
    <div className={`is-mobile ${isNavOpen ? "is-open" : ""}`}>
      <div className="container">
        <div className="row nav__mobile-wrap">
          <div className="col-6">
            <Img src={LogoBlack} width={78} height={41} alt="logo" />
          </div>
          <div className="col-6 text-right">
            <div onClick={handleShowMenu} className="nav__hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="row">
          <ul className="nav__items">
            <li>
              <Link to="aboutUs" {...linkProps}>
                {aboutUs}
              </Link>
            </li>
            <li>
              <Link to="ourTechnology" {...linkProps}>
                {offer}
              </Link>
            </li>
            <li>
              <Link to="projects" {...linkProps}>
                {projects}
              </Link>
            </li>
            <li>
              <Link to="contactForm" {...linkProps}>
                {contact}
              </Link>
            </li>
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
