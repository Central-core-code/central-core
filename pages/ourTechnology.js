import React from "react";
import getLocale from "../utils/getLocale";
import OurTechnologyBlock from "../components/OurTechnologyBlock";
import translations from "../translations";

function ourTechnology() {
  const locale = getLocale();
  const { jsTechnologyDescription, projects, offer, contact } = translations[
    locale
  ].ourTechnologyBlock;
  return (
    <div id='ourTechnology'>
      <div className='container'>
        <div className='row'>
          <div className='col-4 offset-2'>
            <h2>Upholding technology as a force for good</h2>
          </div>
          <div className='col-4'>
            <p>
              We look for high-impact interventions, where focusing on helping a
              specific group of people—journalists, civil society, or activists,
              for example—makes the internet and society stronger and safer for
              everyone. Our focus areas address some of the most complex
              challenges facing open societies.
            </p>
          </div>
        </div>

        <OurTechnologyBlock
          title={"JS"}
          content={jsTechnologyDescription}
          offset={"1"}
        />
        <div className='row'>
          <div className='col-4 offset-5'>
            <h2>JS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-4 offset-2'>
            <h2>JS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-4 offset-7'>
            <h2>JS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ourTechnology;
