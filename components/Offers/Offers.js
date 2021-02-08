import React from "react";

import Offer from "./Offer";

function Offers() {
  return (
    <div className="container text-center my-5">
      <h2 className="h3 my-4">Offers</h2>
      <h3 className="h2 my-4 pb-5">
        Sed ut perspicatinus ode ominis iste natus error sit voluptatem
        accusantinum diloreqm
      </h3>
      <div className="row">
        <Offer title="Title" description="desc" />
        <Offer title="Title" description="desc" />
        <Offer title="Title" description="desc" />
      </div>
    </div>
  );
}

export default Offers;
