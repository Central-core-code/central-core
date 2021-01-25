import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [isSuccess, setStatus] = useState(false);
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const onChange = value => {
    console.log("cos tu", value);
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify-recaptcha="true"
      data-netlify="true"
      onSubmit={e => {
        e.preventDefault();
        console.log("message has been sent.");
      }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="name">
          Your Name:
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label htmlFor="surname">
          Your Surname:
          <input
            type="text"
            name="surname"
            id="surname"
            value={form.surname}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label htmlFor="email">
          Your Email:
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label htmlFor="message">
          Message:
          <textarea
            name="message"
            id="message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </label>
      </p>
      <ReCAPTCHA sitekey={process.env.SITE_RECAPTCHA_KEY} onChange={onChange} />
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}
