import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import styles from "@styles/contactForm.module.scss";

import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
import translations from "../../translations";
import formValidation from "./FormValidation";
import { initialErrorsState, initialFormState } from "./const";
import getLocale from "../../utils/getLocale";

export function ContactForm() {
  const locale = getLocale();
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrorsState);
  const [isSuccess, setSuccessStatus] = useState(false);
  const [isError, setErrorStatus] = useState(false);

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
    <form
      className={styles.contact_form}
      name="contact"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="mb-3">
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleOnBlur}
          placeholder="e-mail"
        />
      </div>
      <div className="mb-4 position-relative">
        <textarea
          name="message"
          id="message"
          value={form.message}
          onChange={handleChange}
          onBlur={handleOnBlur}
          rows="5"
        />
        <small id="emailHelp" className="form-text text-muted float-right">
          {`${form.message.length}/200`}
        </small>
      </div>
      <div className="row justify-content-between">
        <ReCAPTCHA
          sitekey={process.env.SITE_RECAPTCHA_KEY}
          onChange={onChange}
          className="col-auto"
        />
        <div className="col-auto">
          <button className={styles.button} type="submit">
            {translations[locale].contactForm.sendButton}
          </button>
        </div>
      </div>
    </form>
  );
}
