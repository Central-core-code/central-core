import React from "react";
import Head from "next/head";
import Link from "next/link";
import translations from "translations";
import { ContactForm } from "@components/ContactForm/ContactForm";
import getLocale from "../utils/getLocale";

export default function Home() {
  const locale = getLocale();

  return (
    <>
      <Head>
        <title>Central corp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <p>to tlumaczymy</p>
        {translations[locale].helloWorld} <br />
        <br />
        <br />
        <br />
        <Link href="#footer">
          <a>that one now works</a>
        </Link>
        <h1>MAIN HEADER</h1>
        <ContactForm />
      </div>
    </>
  );
}
