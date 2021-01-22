import React, { useState } from "react";
import Recaptcha from "react-recaptcha";

export default function ContactForm() {
  const [isVerifed, setVerified] = useState(false);
  const [isSuccess, setStatus] = useState(false);

  const recaptchaLoaded = () => {
    console.log("cap loaded");
  };

  const verifyCallback = (res) => {
    if (response) {
      setVerified(true);
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("message has been sent.");
      }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="firstname">Your Name:</label>
        <input type="text" name="firstname" id="firstname" />
      </p>
      <p>
        <label htmlFor="lastname">Your Name:</label>
        <input type="text" name="name" id="lastname" />
      </p>
      <p>
        <label htmlFor="youremail">Your Email:</label>
        <input type="email" name="email" id="youremail" />
      </p>
      <p>
        <label htmlFor="yourmessage">Message:</label>
        <textarea name="message" id="yourmessage"></textarea>
      </p>
      <Recaptcha
        sitekey={process.env.SITE_RECAPTCHA_KEY}
        render="explicit"
        onloadCallback={recaptchaLoaded}
        verifyCallback={verifyCallback}
      />
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}
