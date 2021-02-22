import React from "react";
import getLocale from "../../utils/getLocale";
import OfferBlock from "./OfferBlock";
import translations from "../../translations";
import { Link } from "react-scroll";
import { linkPropsNoActive } from "../../utils/linkProps";

function Offers() {
  const locale = getLocale();
  const { header, desc, webApp, ecommerce, seo, cms, ux } = translations[
    locale
  ].offers;

  return (
    <div
      id="offers"
      className="offers__wrap spotlight__wrap-offers"
      name="scrollBg">
      <Link
        className="offers__contact-triger"
        to="contactForm"
        {...linkPropsNoActive}>
        <p>
          contact us<span></span>
        </p>
      </Link>

      <div className="container text-center">
        <div className="row offers__row-wrap">
          <div className="col-lg-10 pb-5">
            <h3>{header}</h3>
          </div>
          <div className="col-lg-10">
            <p className="offers__main_description">{desc}</p>
          </div>
        </div>

        <OfferBlock title="Web Dev" content={webApp} offset="1" slide="left" />
        <OfferBlock
          title="Ecommerce"
          content={ecommerce}
          offset="5"
          slide="right"
        />
        <OfferBlock title="SEO" content={seo} offset="2" slide="left" />
        <OfferBlock title="CMS" content={cms} offset="7" slide="right" />
        <OfferBlock title="UX" content={ux} offset="3" slide="left" />
      </div>
    </div>
  );
}

export default Offers;
