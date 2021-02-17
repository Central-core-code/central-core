import React from "react";
import getLocale from "../../utils/getLocale";
import OfferBlock from "./OfferBlock";
import translations from "../../translations";

function Offers() {
  const locale = getLocale();
  const { header, desc, webApp, ecommerce, seo, cms } = translations[
    locale
  ].offers;

  return (
    <div
      className="offers__wrap spotlight__wrap-offers"
      id="offers"
      name="scrollBg">
      <div className="container">
        <div className="row">
          <div className="col-4 offset-2">
            <h3>{header}</h3>
          </div>
          <div className="col-4">
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
      </div>
    </div>
  );
}

export default Offers;
