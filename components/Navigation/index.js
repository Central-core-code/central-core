import React, { useEffect, useRef } from "react";
import { LanguageSwitcher } from "../LanguageSwitcher";
import MobileNav from "./MobileNav";
import { useWindowWidth } from "../../utils/useWindowWidth";
import { MenuList } from "./MenuList";
import Logo from "../Logo";

function Navigation({ bgColor }) {
  const containerRef = useRef(null);
  const isMobile = useWindowWidth() < 1032;

  useEffect(() => {
    const navContainer = containerRef.current;
    if (!isMobile) {
      window.onscroll = function () {
        const nav = this.oldScroll > 100 < this.scrollY;
        if (nav) navContainer.classList.add("nav__scroll_down");
        else navContainer.classList.remove("nav__scroll_down");

        this.oldScroll = this.scrollY;
      };
    }
  });

  if (isMobile) {
    return <MobileNav bgColor={bgColor} />;
  }

  return (
    <div ref={containerRef} className="container-fluid nav__wrap">
      <div className="container">
        <div className="row justify-content-between align-items-center py-3">
          <div className="col-6 nav__logo-wrap">
            <div className="nav__logo">
              <Logo bgColor={bgColor} />
            </div>
          </div>
          <div className="col-6 nav__language">
            <LanguageSwitcher />
          </div>
        </div>

        <div className="nav__items_wrap">
          <div className="col-10 d-flex justify-content-end">
            <ul className="nav__items">
              <MenuList />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
