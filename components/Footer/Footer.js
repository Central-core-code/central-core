import React from "react";
import Image from "next/image";
import { FooterPrivacy } from "./FooterPrivacy";
import styles from "@styles/footer.module.scss";

function Footer() {
  return (
    <footer className={`container ${styles.footer}`} id="footer" name="footer">
      <hr />
      <div className="row justify-content-between mb-3">
        <div className="col-auto">
          <Image src="/logo" width={100} height={40} />
        </div>
        <div className="col-auto">Ikonka</div>
      </div>
      <FooterPrivacy />
    </footer>
  );
}

export default Footer;
