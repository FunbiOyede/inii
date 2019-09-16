const ValidateUrl = value => {
  const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

  const regex = new RegExp(expression);
  let isValid = true;

  if (value.match(regex)) {
    return isValid;
  } else {
    isValid = false;
    return isValid;
  }
};

export const ValidateEmail = value => {
  const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regex = new RegExp(expression);
  let isValid = true;
  if (value.match(regex)) {
    return isValid;
  } else {
    isValid = false;
    return isValid;
  }
};
export default ValidateUrl;
