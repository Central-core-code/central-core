const validateName = value => {
  return value.length < 3;
};

const validateSurname = value => {
  return value.length < 3;
};

const validateEmail = value => {
  return value.indexOf("@") == -1;
};
const validateMessage = value => {
  return value.length < 3;
};

export default function formValidation(inputName, value) {
  switch (inputName) {
    case "name":
      return validateName(value);
    case "surname":
      return validateSurname(value);
    case "email":
      return validateEmail(value);
    case "message":
      return validateMessage(value);
    default:
      return false;
  }
}
