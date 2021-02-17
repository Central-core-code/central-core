import Logo from "@components/Logo";
import React, { useState } from "react";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { MenuList } from "./MenuList";

function MobileNav({ bgColor }) {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleMenu = () => {
    setNavOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setNavOpen(false);
  };

  return (
    <div className={`is-mobile ${isNavOpen ? "is-open" : ""}`}>
      <div className="container">
        <div className="row nav__mobile-wrap">
          <div className="col-6">
            <Logo bgColor={bgColor} handleClick={closeMenu} />
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
