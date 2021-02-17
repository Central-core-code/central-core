import React from "react";
import { Link } from "react-scroll";
import { linkProps } from "../utils/linkProps";
import LogoBlack from "public/logo_black.svg";
import LogoWhite from "public/logo_white.svg";

function Logo({ bgColor, handleClick = () => {} }) {
  const logo = bgColor === "black" ? LogoWhite : LogoBlack;

  return (
    <Link {...linkProps} to="top" onClick={handleClick}>
      <img
        src={logo}
        width={78}
        height={41}
        alt="logo"
        className="cursor-pointer"
      />
    </Link>
  );
}

export default Logo;
