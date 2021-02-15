import React, { useEffect, useRef, useState } from "react";
import { LanguageSwitcher } from "../LanguageSwitcher";
// import styles from "@styles/navigation.module.scss";
import translations from "../../translations";
import getLocale from "../../utils/getLocale";
import Img from "react-optimized-image";
import LogoBlack from "public/logo_black.svg";
import { Link } from "react-scroll";
import MobileNav from "./MobileNav";

const linkProps = {
  spy: true,
  smooth: true,
  offset: 50,
  duration: 500,
  activeClass: "is_active",
  offset: -100,
};

function Navigation() {
  const locale = getLocale();
  const containerRef = useRef(null);
  const { aboutUs, projects, offer, contact } = translations[locale].navigation;
  const isMobile = useWindowWidth();
  useEffect(() => {
    const navContainer = containerRef.current;
    const intWidth = window.innerWidth < 1032;
    if (!intWidth) {
      window.onscroll = function (e) {
        const nav = this.oldScroll > 100 < this.scrollY;
        if (nav) {
          navContainer.classList.add("nav__scroll_down");
        } else {
          navContainer.classList.remove("nav__scroll_down");
        }
        this.oldScroll = this.scrollY;
      };
    }
  });

  function useWindowWidth() {
    const [width, setWindowSize] = useState(undefined);

    useEffect(() => {
      function handleResize() {
        setWindowSize(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return width > 1032;
  }

  return (
    <>
      {isMobile ? (
        <div ref={containerRef} className="container-fluid nav__wrap">
          <div className="container">
            <div className="row justify-content-between align-items-center py-3">
              <div className="col-6">
                <div className="nav__logo">
                  <Img src={LogoBlack} width={78} height={41} alt="logo" />
                </div>
              </div>
              <div className="col-6 nav__language">
                <LanguageSwitcher />
              </div>
            </div>

            <div className="nav__items_wrap">
              <div className="col-10 d-flex justify-content-end">
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <MobileNav />
      )}

      {/* <div className="d-lg-none">
      
      </div> */}
    </>
  );
}

export default Navigation;
