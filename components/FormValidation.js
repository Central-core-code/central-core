const validateName = value => {
  return value.length < 3;
};

const validateNumber = value => {
  return !/^[\+]?\d{7,20}$/.test(value);
};

const validateEmail = value => {
  return value.indexOf("@") == -1;
};
const validateMessage = value => {
  return value.length < 3 || value.length > 200;
};

export default function formValidation(inputName, value) {
  switch (inputName) {
    case "name":
      return validateName(value);
    case "surname":
      return validateName(value);
    case "phone":
      return validateNumber(value);
    case "email":
      return validateEmail(value);
    case "message":
      return validateMessage(value);
    default:
      return false;
  }
}
