import React from "react";
import Image from "next/image";
import { FooterPrivacy } from "./FooterPrivacy";
import styles from "@styles/footer.module.scss";

function Footer() {
  return (
    <footer className={`container ${styles.footer}`} id="footer" name="footer">
      <div className="row justify-content-between mb-3">
        <div className="col-auto">
          <Image src="/logo_black.svg" width={78} height={41} />
        </div>
        <div className="col-auto">
          <Image src="/icons/envelope-light.svg" width={30} height={20} />
          <Image src="/icons/envelope-light.svg" width={30} height={20} />
        </div>
      </div>
      <FooterPrivacy />
    </footer>
  );
}

export default Footer;
