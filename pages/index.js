import React, { useEffect, useRef } from "react";
import Head from "next/head";
import ContactForm from "@components/ContactForm";
import MainHeader from "../components/MainHeader";
import AboutUs from "../components/AboutUs";
import Offers from "../components/Offers";
import Carousel from "../components/Carousel";
import Technologies from "@components/Technologies";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const spotlight = containerRef.current;
    let spotlightSize = "transparent 160px, rgba(255, 255, 255,1) 200px)";
    window.addEventListener("mousemove", (e) => {
      spotlight.style.backgroundImage = `radial-gradient(circle at ${
        (e.pageX / window.innerWidth) * 100
      }% ${(e.pageY / window.innerHeight) * 100}%, ${spotlightSize}`;
    });
  });

  return (
    <>
      <Head>
        <title>Central corp</title>
        <link rel="icon preload" href="/favicon.ico" />
        <meta
          name="description"
          content="Kazdy projekt budowany indywidualnie według potrzeb klienta. Next Js, Wordpress, CMS"
        ></meta>
      </Head>
      <div className="nav__desktop" name="scrollBg">
        <div className="spotlight__wrap">
          <div ref={containerRef} className="spotlight__point">
            <MainHeader />
            <AboutUs />
          </div>
        </div>
        <Offers />
        <Technologies />
        <Carousel />
        <ContactForm />
      </div>
    </>
  );
}
