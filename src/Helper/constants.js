// const apiKey = "AIzaSyCj5ZSgS3NPkegGkV4-SoCHkN-8WbJBd4U";

/**
 *
 * @param {string} token
 * @param {string} expiringTime
 *  @function saves both token, userid  and expiringTime to localstorage as persistent data.
 */
export const persistUserAuthDetails = response => {
  localStorage.setItem("token", response.idToken);
  localStorage.setItem("expiringDate", formatExpiringTime(response.expiresIn));
  localStorage.setItem("userID", response.localId);
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
