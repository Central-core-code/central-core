import React from "react";
import LogoBlack from "public/logo_black.svg";
import LogoWhite from "public/logo_white.svg";
import Link from "next/link";

function Logo({ bgColor, handleClick = () => {} }) {
  const logo = bgColor === "black" ? LogoWhite : LogoBlack;

  return (
    <Link href="/">
      <a onClick={handleClick}>
        <img
          src={logo}
          width={78}
          height={41}
          alt="logo"
          className="cursor-pointer"
        />
      </a>
    </Link>
  );
}

export default Logo;
