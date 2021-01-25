import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/router";
import translations from "../translations";
import formVadidation from "../components/FormValidation";

const initialFormState = {
  name: "",
  surname: "",
  email: "",
  message: "",
};

const initialErrorsState = {
  name: false,
  surname: false,
  email: false,
  message: false,
};

export default function ContactForm() {
  let router = useRouter();
  const locale = router.locale;
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrorsState);
  const [successMessage, setSuccessMessage] = useState("");
  const {
    text_incorrect,
    email_incorrect,
    message_incorrect,
    succesMessage,
  } = translations[locale].contactForm.messages;

  const handleSubmit = e => {
    e.preventDefault();
    const validation = formValidation();
    console.log(validation);

    if (validation.correct) {
      setForm(initialFormState);
      setErrors(initialErrorsState);
      setSuccessMessage(succesMessage);
    }
  };
  const onChange = value => {
    console.log("cos tu", value);
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
    const validation = formValidation();
    console.log(validation);

    if (!validation.correct) {
      setErrors({
        name: !validation.name,
        surname: !validation.surname,
        email: !validation.email,
        message: !validation.message,
      });
    }
  };

  const formValidation = () => {
    let { name, surname, email, message, correct } = false;

    if (form.name.length >= 3) {
      name = true;
    }
    if (form.surname.length >= 3) {
      surname = true;
    }
    if (form.email.indexOf("@") !== -1) {
      email = true;
    }
    if (form.message.length >= 3 && form.message.length <= 200) {
      message = true;
    }

    if (name && surname && email && message) {
      correct = true;
    }
    return {
      name,
      surname,
      email,
      message,
      correct,
    };
  };
  useEffect(() => {
    if (successMessage !== "") {
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  });

  return (
    <>
      <form
        name="contact"
        // method="POST"
        // data-netlify-recaptcha="true"
        // data-netlify="true"
        onSubmit={handleSubmit}
        noValidate
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
            {errors.name && <span>{text_incorrect}</span>}
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
            {errors.surname && <span>{text_incorrect}</span>}
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
            {errors.email && <span>{email_incorrect}</span>}
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
            />
            <span>{`${form.message.length}/200`}</span>
            {errors.message && <span>{message_incorrect}</span>}
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
