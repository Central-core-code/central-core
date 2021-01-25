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
  const [errors, setErrors] = useState({
    name: false,
    surname: false,
    email: false,
    message: false,
  });

  const messages = {
    name_incorrect: "Nazwa musi miec conajmniej 3 znakow",
    surname_incorrect: "Nazwa musi miec conajmniej 3 znakow",
    email_incorrect: "brak @ w adresie e-mail",
    message_incorrect: "malo! wincyj!",
  };
  const handleSubmit = e => {
    e.preventDefault();
    const validation = formValidation();
    console.log(validation);

    if (validation.correct) {
      console.log("wyslane");
      setForm({
        name: "",
        surname: "",
        email: "",
        message: "",
      });
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
  };

  const formValidation = () => {
    let { name, surname, email, message, correct } = false;

    if (form.name.length > 3) {
      name = true;
    }
    if (form.surname.length > 3) {
      surname = true;
    }
    if (form.email.indexOf("@") !== -1) {
      email = true;
    }
    if (form.message.length > 3) {
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

  return (
    <form
      name="contact"
      method="POST"
      data-netlify-recaptcha="true"
      data-netlify="true"
      // onSubmit={e => {
      //   e.preventDefault();
      //   console.log("message has been sent.");
      // }}
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
        <button onClick={handleSubmit} type="submit">
          Send
        </button>
      </p>
    </form>
  );
}
