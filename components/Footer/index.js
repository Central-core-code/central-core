import React from "react";
import Img from "react-optimized-image";
import { FooterPrivacy } from "./FooterPrivacy";
import facebookIcon from "public/icons/facebook-f-brands.svg";
import Logo from "@components/Logo";

function Footer({ bgColor }) {
  return (
    <footer className="py-3 container footer" id="footer" name="footer">
      <div className="row justify-content-between footer__block">
        <div className="col-auto">
          <Logo bgColor={bgColor} />
        </div>
        <div className="col-auto">
          <a
            target="_blank"
            href="https://www.facebook.com/centralCoreSH"
            rel="noreferrer"
          >
            <Img
              src={facebookIcon}
              width={30}
              height={30}
              alt="envelope footer icon"
              style={{ background: "white" }}
            />
          </a>
        </div>
      </div>
      <FooterPrivacy />
    </footer>
  );
}

export default Footer;
