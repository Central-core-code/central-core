import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer/Footer";
import styles from "@styles/layout.module.scss";

function Layout({ children }) {
  const [scrollHeight, setScrolLHeight] = useState(0);
  const [sectionOffset, setSectionOffset] = useState([]);

  useEffect(() => {
    function getSectionsOffset() {
      const sections = document.getElementsByName("scrollBg");
      const offsetArr = [];
      sections.forEach((section) => {
        const offset = section.offsetTop;
        offsetArr.push(offset);
      });
      setSectionOffset(offsetArr);
      return offsetArr;
    }

    function handleScroll() {
      setScrolLHeight(window.pageYOffset);
    }

    getSectionsOffset();
    window.addEventListener("resize", getSectionsOffset);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", getSectionsOffset);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bgColor = determineBgColor(scrollHeight, sectionOffset);

  return (
    <div className={`content ${styles[bgColor]}`}>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;

function determineBgColor(height, sections) {
  console.log(height, sections);
  if (between(height, 0, sections[1])) {
    return "white";
  } else if (between(height, sections[1], sections[2])) {
    return "black";
  } else if (between(height, sections[2], sections[3])) {
    return "white";
  } else {
    return "black";
  }
}

function between(x, min, max) {
  return x >= min && x <= max;
}
