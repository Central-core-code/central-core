import React from "react";
import Img from "react-optimized-image";
import { FooterPrivacy } from "./FooterPrivacy";
import Link from "next/link";
import LogoWhite from "public/logo_white.svg";
import LogoBlack from "public/logo_black.svg";
import envelopeLight from "public/icons/envelope-light.svg";
import Logo from "@components/Logo";

function Footer({ bgColor }) {
  const logo = bgColor === "black" ? LogoWhite : LogoBlack;

  return (
    <footer className="py-3 container footer" id="footer" name="footer">
      <div className="row justify-content-between footer__block">
        <div className="col-auto">
          <Logo bgColor={bgColor} />
        </div>
        <div className="col-auto">
          <Link href="#contactForm">
            <Img
              src={envelopeLight}
              width={30}
              height={20}
              alt="envelope footer icon"
            />
          </Link>
          <Link href="#contactForm">
            <Img
              src={envelopeLight}
              width={30}
              height={20}
              alt="envelope footer icon"
            />
          </Link>
        </div>
      </div>
      <FooterPrivacy />
    </footer>
  );
}

export default Footer;
