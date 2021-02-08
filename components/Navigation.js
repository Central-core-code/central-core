import React, { useEffect, useRef } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import styles from "@styles/navigation.module.scss";
import translations from "../translations";
import getLocale from "../utils/getLocale";
import Img from "react-optimized-image";
import LogoBlack from "public/logo_black.svg";
// import Link from "next/link";
import { Link } from "react-scroll";

function Navigation(props) {
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
              <Img src={LogoBlack} width={78} height={41} />
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
                <Link
                  to="aboutUs"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  offset={-100}
                  activeClass={styles.is_active}
                >
                  {aboutUs}
                </Link>
              </li>
              <li>
                <Link
                  to="ourTechnology"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  activeClass={styles.is_active}
                  offset={-100}
                >
                  {offer}
                </Link>
              </li>
              <li>
                <Link
                  to="offer"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  activeClass={styles.is_active}
                  offset={-100}
                >
                  {projects}
                </Link>
              </li>
              <li>
                <Link
                  to="contactForm"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  activeClass={styles.is_active}
                  offset={-100}
                >
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
