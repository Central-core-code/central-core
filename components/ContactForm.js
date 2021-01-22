import React, { useState, useEffect } from "react";

const handleLoaded = () => {
  window.grecaptcha.ready(() => {
    window.grecaptcha.execute(process.env.SITE_RECAPTCHA_KEY, {
      action: "homepage",
    });
  });
};

export default function ContactForm() {
  const [isSuccess, setStatus] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.addEventListener("load", handleLoaded);
    window.onSubmit = () => alert("recaptcha submit");
    document.body.appendChild(script);
  }, []);

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
      <div
        className="g-recaptcha"
        data-sitekey={process.env.SITE_RECAPTCHA_KEY}
        data-callback="onSubmit"
      />

      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}
