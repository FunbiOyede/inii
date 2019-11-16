/**
 *
 * @param {string} errorMessage
 * @returns {Array}
 */

export const ErrorHandler = errorMessage => {
  let newMessage = errorMessage.toLowerCase();
  return newMessage.split("_").join(" ");
};
