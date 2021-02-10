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
    <div className="offers__wrap" id="offers" name="scrollBg">
      <div className="container">
        <div className="row">
          <div className="col-4 offset-2">
            <h3>{header}</h3>
          </div>
          <div className="col-4">
            <p className="offers__main_description">{desc}</p>
          </div>
        </div>

        <OfferBlock title="Web Dev" content={webApp} offset="1" />
        <OfferBlock title="Ecommerce" content={ecommerce} offset="5" />
        <OfferBlock title="SEO" content={seo} offset="2" />
        <OfferBlock title="CMS" content={cms} offset="7" />
      </div>
    </div>
  );
}

export default Offers;
