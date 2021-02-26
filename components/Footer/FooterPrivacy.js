import React from "react";
import Link from "next/link";

export function FooterPrivacy() {
  return (
    <div className="row justify-content-md-between">
      <div className="col-12 col-md text-center text-md-right footer__privacy ">
        <Link href="privacyTerms">
          <a className="mr-4 mr-md-2">Privacy Terms</a>
        </Link>
        <Link href="termsAndConditions">
          <a className="ml-4 ml-md-0">Terms and Condition</a>
        </Link>
      </div>
      <div className="col-12 col-md text-center text-md-left order-md-first footer__rights">
        2021 © All rights reserved
      </div>
    </div>
  );
}
