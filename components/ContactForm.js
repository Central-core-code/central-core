import React, { useState } from "react";

export default function ContactForm() {
  const [isSuccess, setStatus] = useState(false);

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("message has been sent.");
      }}
      data-netlify-recaptcha="true"
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
      <div data-netlify-recaptcha="true" />
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}
