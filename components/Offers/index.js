import React from "react";
import getLocale from "../../utils/getLocale";
import OfferBlock from "./OfferBlock";
import translations from "../../translations";
import { Link } from "react-scroll";

function Offers() {
  const locale = getLocale();
  const { header, webApp, ecommerce, seo, cms, ux } = translations[
    locale
  ].offers;

  const { contactUs } = translations[locale];

  return (
    <div className="offers__wrap spotlight__wrap-offers" name="scrollBg">
      <span id="offers" className="offset" />

      <Link
        className="offers__contact-triger"
        to="contactForm"
        spy={true}
        smooth={true}
        duration={0}
        offset={-50}
      >
        <p>
          {contactUs}
          <span />
        </p>
      </Link>

      <div className="container">
        <div className="row offers__row-wrap text-center">
          <div className="col-12 pb-5">
            <h3>{header}</h3>
          </div>
        </div>

        <OfferBlock title="Web Dev" content={webApp} offset="1" slide="left" />
        <OfferBlock
          title="E-commerce"
          content={ecommerce}
          offset="5"
          slide="right"
        />
        <OfferBlock title="SEO" content={seo} offset="2" slide="left" />
        <OfferBlock title="CMS" content={cms} offset="6" slide="right" />
        <OfferBlock title="UX" content={ux} offset="3" slide="left" />
      </div>
    </div>
  );
}

export default Offers;
