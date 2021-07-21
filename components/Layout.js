import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import throttle from "lodash/throttle";
// import Intro from "./Intro";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();

  const [scrollHeight, setScrollHeight] = useState(0);
  const [sectionOffset, setSectionOffset] = useState([]);

  useEffect(() => {
    function getSectionsOffset() {
      const sections = document.getElementsByName("scrollBg");
      const offsetArr = [];
      sections.forEach((section) => {
        const offset = section.offsetTop - 100;
        offsetArr.push(offset);
      });
      setSectionOffset(offsetArr);
    }

    function handleScroll() {
      setScrollHeight(window.pageYOffset);
    }

    getSectionsOffset();
    window.addEventListener("resize", throttle(getSectionsOffset, 100));
    window.addEventListener("scroll", throttle(handleScroll, 100));
    return () => {
      window.removeEventListener("resize", getSectionsOffset);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]);

  const bgColor = determineBgColor(scrollHeight, sectionOffset);

  let section = 0;
  if (scrollHeight > sectionOffset[4]) {
    section = 5;
  } else if (scrollHeight > sectionOffset[3]) {
    section = 4;
  } else if (scrollHeight > sectionOffset[2]) {
    section = 3;
  } else if (scrollHeight > sectionOffset[1]) {
    section = 2;
  } else if (scrollHeight > sectionOffset[0]) {
    section = 1;
  }

  return (
    <div className={`content ${bgColor}`}>
      {/* <Intro /> */}
      <Navigation bgColor={bgColor} currSection={section} />
      {React.cloneElement(children, { bgColor })}
      <Footer bgColor={bgColor} />
    </div>
  );
}

export default Layout;

function determineBgColor(height, sections) {
  if (between(height, -500, sections[1])) {
    return "white";
  } else if (between(height, sections[1], sections[3])) {
    return "black";
  } else if (between(height, sections[3], sections[4])) {
    return "white";
  } else {
    return "black";
  }
}

function between(x, min, max) {
  return x >= min && x <= max;
}
