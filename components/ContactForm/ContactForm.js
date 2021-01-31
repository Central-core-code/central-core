import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

export function ContactForm() {
  const [isSuccess, setSuccessStatus] = useState(false);
  const [isError, setErrorStatus] = useState(false);
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const onChange = (value) => {
    console.log("cos tu", value);
    //validacja recatpchy
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.EMAILJS_SERVICE_KEY,
        process.env.EMAILJS_TEMPLATE_KEY,
        e.target,
        process.env.EMAILJS_USER_KEY
      )
      .then(
        (result) => {
          //success message
          setSuccessStatus(true);
          console.log(result.text);
        },
        (error) => {
          //errors message
          setErrorStatus(true);
          console.log(error.text);
        }
      );
  };

  if (isError) {
    return <ErrorMessage />;
  }

  if (isSuccess) {
    return <SuccessMessage />;
  }

  return (
    <form name="contact" method="POST" onSubmit={onSubmit}>
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
      <button type="submit">Send</button>
    </form>
  );
}
