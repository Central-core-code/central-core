const validateEmail = (email) => {
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !regExp.test(email);
};

const validateMessage = (msg) => {
  return msg.length > 200;
};

export default function formValidation(inputName, value) {
  switch (inputName) {
    case "email":
      return validateEmail(value);
    case "message":
      return validateMessage(value);
    default:
      return false;
  }
}
