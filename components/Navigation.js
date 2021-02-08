import React, { useEffect, useRef } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import styles from "@styles/navigation.module.scss";
import translations from "../translations";
import getLocale from "../utils/getLocale";
import Img from "react-optimized-image";
import LogoBlack from "public/logo_black.svg";
import { Link } from "react-scroll";

const linkProps = {
  spy: true,
  smooth: true,
  offset: 50,
  duration: 500,
  activeClass: styles.is_active,
  offset: -100,
};

function Navigation() {
  const locale = getLocale();
  const containerRef = useRef(null);

  const { aboutUs, projects, offer, contact } = translations[locale].navigation;
  useEffect(() => {
    const navContainer = containerRef.current;
    window.onscroll = function (e) {
      const nav = this.oldScroll > 100 < this.scrollY;
      if (nav) {
        navContainer.classList.add(styles.nav__scroll_down);
      } else {
        navContainer.classList.remove(styles.nav__scroll_down);
      }
      this.oldScroll = this.scrollY;
      // console.log("sprawdzam", this.oldScroll + 100);
    };
  });

  return (
    <div ref={containerRef} className={`container-fluid ${styles.nav__wrap}`}>
      <div className="container">
        <div className="row justify-content-between align-items-center py-3">
          <div className="col-6">
            <div className={styles.nav__logo}>
              <Img src={LogoBlack} width={78} height={41} alt="logo" />
            </div>
          </div>
          <div className={`col-6 ${styles.nav__language}`}>
            <LanguageSwitcher />
          </div>
        </div>

        <div className={`row ${styles.nav__items_wrap}`}>
          <div className="col-10 d-flex justify-content-end">
            <ul className={styles.nav__items}>
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
                <Link to="offer" {...linkProps}>
                  {projects}
                </Link>
              </li>
              <li>
                <Link to="contactForm" {...linkProps}>
                  {contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
