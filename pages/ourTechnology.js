import React from "react";
import getLocale from "../utils/getLocale";
import OurTechnologyBlock from "../components/OurTechnologyBlock";
import translations from "../translations";

function ourTechnology() {
  const locale = getLocale();
  const {
    jsTechnologyDescription,
    phpTechnologyDescription,
    reactTechnologyDescription,
    nextJsTechnologyDescription,
  } = translations[locale].ourTechnologyBlock;
  return (
    <div id="ourTechnology">
      <div className="container">
        <div className="row">
          <div className="col-4 offset-2">
            <h2>Upholding technology as a force for good</h2>
          </div>
          <div className="col-4">
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
        <OurTechnologyBlock
          title={"PHP"}
          content={phpTechnologyDescription}
          offset={"5"}
        />
        <OurTechnologyBlock
          title={"REACT"}
          content={reactTechnologyDescription}
          offset={"2"}
        />
        <OurTechnologyBlock
          title={"NextJS"}
          content={nextJsTechnologyDescription}
          offset={"7"}
        />
      </div>
    </div>
  );
}

export default ourTechnology;
