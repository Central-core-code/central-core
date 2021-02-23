import React, { useEffect } from "react";
import logo from "../public/logo_white.svg";
import gsap from "gsap";

const Intro = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.fromTo(".intro__logo", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.to(".intro__logo", { opacity: 0, duration: 0.5, delay: 0.3 });
    tl.to(".intro", { opacity: 0, duration: 1, delay: 0.3 });
    tl.to(".intro__slider", { y: "-100%", duration: 0.2 });
    tl.to(".intro", { y: "-100%", duration: 0.2 }, "-=0.2");
  });
  return (
    <>
      <div className="intro">
        <div className="intro__text">
          <div className="intro__logo">
            <img className="text" src={logo} alt="Logo" />
          </div>
        </div>
      </div>
      <div className="intro__slider" />
    </>
  );
};

export default Intro;
