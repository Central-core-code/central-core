import React from "react";
import Img from "react-optimized-image";
import { FooterPrivacy } from "./FooterPrivacy";
import styles from "@styles/footer.module.scss";
import Link from "next/link";

import logoBlack from "public/logo_black.svg";
import envelopeLight from "public/icons/envelope-light.svg";

function Footer() {
  return (
    <footer className={`container ${styles.footer}`} id="footer" name="footer">
      <div className={`row justify-content-between ${styles.footer__block}`}>
        <div className="col-auto">
          <Img src={logoBlack} width={78} height={41} alt="logo" />
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
