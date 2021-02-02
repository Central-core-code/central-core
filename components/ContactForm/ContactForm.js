import React, { useState } from "react";
import classNames from "classnames";
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
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrorsState);
  const [isSuccess, setSuccessStatus] = useState(false);
  const [isError, setErrorStatus] = useState(false);

  const locale = getLocale();

  const handleSubmit = e => {
    e.preventDefault();

    if (!isValidationFailed()) {
      sendEmail(e);
      setForm(initialFormState);
      setErrors(initialErrorsState);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const isValidationFailed = formValidation(name, value);
    assignErrors(name, isValidationFailed);

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isValidationFailed = () => {
    return Object.keys(errors).some((key) => {
      return errors[key] || form[key] === "";
    });
  };

  const assignErrors = (name, validation) => {
    setErrors(prevState => ({
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
        result => {
          setSuccessStatus(true);
          console.log(result.text);
        },
        error => {
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
      className={`${styles.contact_form} py-3`}
      name="contactForm"
      id="contactForm"
      onSubmit={handleSubmit}
      noValidate
    >
      <div
        className={classNames("mb-3", { [styles.is_error]: errors["email"] })}
      >
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          placeholder="e-mail"
        />
      </div>
      <div
        className={classNames("mb-5 position-relative", {
          [styles.is_error]: errors["message"],
        })}
      >
        <textarea
          name="message"
          id="message"
          value={form.message}
          onChange={handleChange}
          rows="5"
          placeholder="message"
        />
        <small id="emailHelp" className="form-text text-muted float-right">
          {`${form.message.length}/200`}
        </small>
      </div>
      <div className="text-right">
        <button
          className={styles.button}
          disabled={isValidationFailed()}
          type="submit"
        >
          {translations[locale].contactForm.sendButton}
        </button>
      </div>
    </form>
  );
}
