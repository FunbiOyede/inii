/**
 *
 * @param {*} value  url
 * @returns {bool} if value match expression or not
 *
 */

export const ValidateUrl = value => {
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

/**
 *
 * @param {string} value email
 * @returns {bool} if value match expression or not
 */
export const ValidateEmail = value => {
  const expression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regex = new RegExp(expression);
  let isValid = true;
  if (value.match(regex)) {
    return isValid;
  } else {
    isValid = false;
    return isValid;
  }
};

/**
 *
 * @param {*} password
 * @returns {bool} if value match the condition
 */

export const ValidatePassword = password => {
  let isPasswordValid;
  if (password.length >= 8) {
    isPasswordValid = true;
    return isPasswordValid;
  } else {
    isPasswordValid = false;
    return isPasswordValid;
  }
};
