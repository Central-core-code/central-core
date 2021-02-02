import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer/Footer";

function Layout({ children }) {
  return (
    <div className="content">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
