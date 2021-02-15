import React, { useState } from "react";
import { LanguageSwitcher } from "../LanguageSwitcher";
import LogoBlack from "public/logo_black.svg";
import LogoWhite from "public/logo_white.svg";
import { MenuList } from "./MenuList";

function MobileNav({ bgColor }) {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleMenu = () => {
    setNavOpen((prevState) => !prevState);
  };

  const logo = bgColor === "black" ? LogoWhite : LogoBlack;

  return (
    <div className={`is-mobile ${isNavOpen ? "is-open" : ""}`}>
      <div className="container">
        <div className="row nav__mobile-wrap">
          <div className="col-6">
            <img src={logo} width={78} height={41} alt="logo" />
          </div>
          <div className="col-6 text-right">
            <div onClick={handleMenu} className="nav__hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="row">
          <ul className="nav__items">
            <MenuList handleMenu={handleMenu} />
            <li onClick={handleMenu}>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
