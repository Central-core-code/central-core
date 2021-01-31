import React from "react";
import translations from "translations";
import ContactForm from "./ContactForm";
import getLocale from "../utils/getLocale";
import Link from "next/link";

function Homepage() {
  const locale = getLocale();
  return (
    <div>
      <ContactForm />
      <p>to tlumaczymy</p>
      {translations[locale].helloWorld} <br />
      <br />
      <br />
      <br />
      <Link href="#footer">
        <a>that one now works</a>
      </Link>
      <h1>MAIN HEADER</h1>
    </div>
  );
}

export default Homepage;
