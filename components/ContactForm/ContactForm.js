import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/router";
import emailjs from "emailjs-com";

import translations from "../../translations";
import formValidation from "../FormValidation";
import { initialErrorsState, initialFormState } from "./const";

export default function ContactForm() {
  let router = useRouter();
  const locale = router.locale;
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrorsState);
  const [successMessage, setSuccessMessage] = useState("");

  const {
    input_text_message,
    input_phone_message,
    input_email_message,
    input_textarea_message,
    success_text_message,
  } = translations[locale].contactForm.messages;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidationFailed = Object.keys(errors).some((k) => {
      return errors[k] === true || form[k] === "";
    });

    if (!isValidationFailed) {
      sendEmail(e);
      setForm(initialFormState);
      setErrors(initialErrorsState);
    }
  };

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

    if (errors[name]) {
      const validation = formValidation(name, value);
      assignErrors(name, validation);
    }
  };

  const handleOnBlur = (e) => {
    const { name, value } = e.target;
    const validation = formValidation(name, value);
    assignErrors(name, validation);
  };

  const assignErrors = (name, validation) => {
    setErrors((prevState) => ({
      ...prevState,
      [name]: validation,
    }));
  };

  const sendEmail = (e) => {
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
          setSuccessMessage(success_text_message);

          //success message
          console.log(result.text);
        },
        (error) => {
          //errors message
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form name="contact" onSubmit={handleSubmit} noValidate>
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
              onBlur={handleOnBlur}
            />
            {errors.name && <span>{input_text_message}</span>}
          </label>
        </p>
        <p>
          <label htmlFor="phone">
            Your Phone number:
            <input
              type="text"
              name="phone"
              id="phone"
              value={form.phone}
              onChange={handleChange}
              onBlur={handleOnBlur}
            />
            {errors.phone && <span>{input_phone_message}</span>}
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
              onBlur={handleOnBlur}
            />
            {errors.email && <span>{input_email_message}</span>}
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
              onBlur={handleOnBlur}
            />
            <span>{`${form.message.length}/200`}</span>
            {errors.message && <span>{input_textarea_message}</span>}
          </label>
        </p>
        <ReCAPTCHA
          sitekey={process.env.SITE_RECAPTCHA_KEY}
          onChange={onChange}
        />
        <p>
          <button type="submit">
            {translations[locale].contactForm.sendButton}
          </button>
        </p>
      </form>
      {successMessage && <h3>{successMessage}</h3>}
    </>
  );
}
