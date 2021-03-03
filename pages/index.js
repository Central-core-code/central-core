import React, { useEffect, useRef } from "react";
import Head from "next/head";
import ContactForm from "@components/ContactForm";
import MainHeader from "../components/MainHeader";
import AboutUs from "../components/AboutUs";
import Offers from "../components/Offers";
import Carousel from "../components/Carousel";
import ThreeColBlock from "../components/ThreeColBlock";

export default function Home({ bgColor }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const spotlight = containerRef.current;
    let intViewportWidth = window.innerWidth > 1032;
    if (intViewportWidth) {
      window.addEventListener("mousemove", (e) => {
        spotlight.style.setProperty("--x", `${e.pageX}px`);
        spotlight.style.setProperty("--y", `${e.pageY}px`);
      });
    }
  });

  return (
    <>
      <Head>
        <title>Central corp</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Kazdy projekt budowany indywidualnie według potrzeb klienta. Next Js, Wordpress, CMS"
        ></meta>
      </Head>
      <div className="nav__desktop" id="top">
        <div className="spotlight__wrap">
          <div ref={containerRef} className="spotlight__point"></div>
          <MainHeader />
          <AboutUs />
        </div>
        <Offers />
        <Carousel />
        <ThreeColBlock bgColor={bgColor} />
        <ContactForm />
      </div>
    </>
  );
}
