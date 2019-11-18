// const apiKey = "AIzaSyCj5ZSgS3NPkegGkV4-SoCHkN-8WbJBd4U";

/**
 *
 * @param {string} token
 * @param {string} expiringTime
 * saves both token and expiringTime to localstorage as persistent data
 */
export const persistUserAuthDetails = (token, expiringTime) => {
  localStorage.setItem("token", token);
  localStorage.setItem("expiringDate", formatExpiringTime(expiringTime));
};

export const deletePersistUserAuthDetails = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiringDate");
};
/**
 *
 * @param {string} expiredTime
 * formats expiring time
 */
const formatExpiringTime = expiredTime => {
  let expiringDate = new Date(new Date() + expiredTime * 1000);
  return expiringDate;
};
