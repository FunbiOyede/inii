const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

const regex = new RegExp(expression);

const ValidateUrl = value => {
  let isValid = true;

  if (value.match(regex)) {
    return isValid;
  } else {
    isValid = false;
    return isValid;
  }
};

export default ValidateUrl;
