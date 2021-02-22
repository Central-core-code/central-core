import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import throttle from "lodash/throttle";

function Layout({ children }) {
  const [scrollHeight, setScrolLHeight] = useState(0);
  const [sectionOffset, setSectionOffset] = useState([]);

  useEffect(() => {
    function getSectionsOffset() {
      const sections = document.getElementsByName("scrollBg");
      const offsetArr = [];
      sections.forEach(section => {
        const offset = section.offsetTop;
        offsetArr.push(offset);
      });
      setSectionOffset(offsetArr);
    }

    function handleScroll() {
      setScrolLHeight(window.pageYOffset);
    }

    getSectionsOffset();
    window.addEventListener("resize", throttle(getSectionsOffset, 100));
    window.addEventListener("scroll", throttle(handleScroll, 100));

    return () => {
      window.removeEventListener("resize", getSectionsOffset);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bgColor = determineBgColor(scrollHeight, sectionOffset);

  return (
    <div className={`content ${bgColor}`}>
      <div className="load-wrap">
        <h1 className="load-wrap__content">helllo</h1>
      </div>
      <Navigation bgColor={bgColor} />
      {children}
      <Footer bgColor={bgColor} />
    </div>
  );
}

export default Layout;

function determineBgColor(height, sections) {
  if (between(height, 0, sections[0])) {
    return "white";
  } else if (between(height, sections[0], sections[1])) {
    return "black";
  } else if (between(height, sections[1], sections[2])) {
    return "white";
  } else {
    return "black";
  }
}

function between(x, min, max) {
  return x >= min && x <= max;
}
