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
        <title>Central core</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Kazdy projekt budowany indywidualnie według potrzeb klienta. Next Js, Wordpress, CMS"
        ></meta>
        <meta
          name="image"
          content="https://scontent.fpoz1-1.fna.fbcdn.net/v/t1.0-9/161272723_120474113422457_1060235310063031373_n.png?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Kxb7KDemHz4AX-xI7Sn&_nc_ht=scontent.fpoz1-1.fna&oh=083c81df2a13ab6785f49f59eba936d1&oe=607747E2"
        ></meta>
        <meta
          property="og:image"
          content="https://scontent.fpoz1-1.fna.fbcdn.net/v/t1.0-9/161272723_120474113422457_1060235310063031373_n.png?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Kxb7KDemHz4AX-xI7Sn&_nc_ht=scontent.fpoz1-1.fna&oh=083c81df2a13ab6785f49f59eba936d1&oe=607747E2"
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
