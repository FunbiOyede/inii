// const apiKey = "AIzaSyCj5ZSgS3NPkegGkV4-SoCHkN-8WbJBd4U";

/**
 *
 * @param {string} token
 * @param {string} expiringTime
 *  @function saves both token, userid  and expiringTime to localstorage as persistent data.
 */
export const persistUserAuthDetails = (token, expiringTime, userID) => {
  localStorage.setItem("token", token);
  localStorage.setItem("expiringDate", formatExpiringTime(expiringTime));
  localStorage.setItem("userID", userID);
};

export const deletePersistUserAuthDetails = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiringDate");
  localStorage.removeItem("userID");
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
