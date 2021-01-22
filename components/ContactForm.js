import React, { useState } from "react";

export default function ContactForm() {
  const [isSuccess, setStatus] = useState(false);

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={() => {
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
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}
