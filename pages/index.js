import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import translations from "translations";
import { ContactForm } from "@components/ContactForm/ContactForm";
import getLocale from "../utils/getLocale";
import MainHeader from "../components/MainHeader";
import AboutUs from "./aboutUs";
import styles from "@styles/spotlight.module.scss";

export default function Home() {
  const locale = getLocale();
  const containerRef = useRef(null);

  useEffect(() => {
    const spotlight = containerRef.current;
    let spotlightSize = "transparent 160px, rgba(255, 255, 255,1) 200px)";
    window.addEventListener("mousemove", e => {
      spotlight.style.backgroundImage = `radial-gradient(circle at ${
        (e.pageX / window.innerWidth) * 100
      }% ${(e.pageY / window.innerHeight) * 100}%, ${spotlightSize}`;
    });
  });
  return (
    <>
      <Head>
        <title>Central corp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={styles.spotlight__wrap}>
          <div ref={containerRef} className="spotlight__point">
            <MainHeader />
            <AboutUs />
          </div>
        </div>
        <ContactForm />
        <p>to tlumaczymy</p>
        {translations[locale].helloWorld} <br />
        <br />
        <br />
        <br />
        <Link href="#footer">that one now works</Link>
        <h1>MAIN HEADER</h1>
        <ContactForm />
      </div>
    </>
  );
}
