import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className={`content ${bgColor}`}>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
