import React from "react";
import LogoBlack from "public/logo_black.svg";
import LogoWhite from "public/logo_white.svg";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";

function Logo({ bgColor, handleClick = () => {} }) {
  const logo = bgColor === "black" ? LogoWhite : LogoBlack;

  return (
    <Link href="/">
      <LinkScroll to="top">
        <a onClick={handleClick}>
          <img
            src={logo}
            width={78}
            height={41}
            alt="logo"
            className="cursor-pointer"
          />
        </a>
      </LinkScroll>
    </Link>
  );
}

export default Logo;
