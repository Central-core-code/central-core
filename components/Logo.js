import React from "react";
import Link from "next/link";

function Logo({ bgColor, handleClick = () => {} }) {
  const logo = bgColor === "black" ? "/logo_white.svg" : "/logo_black.svg";

  return (
    <Link href="/" onClick={handleClick}>
      <img
        src={logo}
        width="78"
        height="41"
        alt="logo"
        className="cursor-pointer"
      />
    </Link>
  );
}

export default Logo;
