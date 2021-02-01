import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="container" id="footer" name="footer">
      <hr />
      <div className="row justify-content-between">
        <div class="col-auto">2021 © All rights reserved</div>
        <div class="col-auto">
          <span className="mr-2">Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
