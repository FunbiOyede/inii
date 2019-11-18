const error = {
  response: {
    data: undefined
  }
};

export const say = message => {
  let msg = "connect to the internet";
  if (typeof message === "undefined") {
    message = msg;
  }
  return msg;
};

// console.log(say(error.response.data));

//  console.log(error.response);

//  dispatch(authenticationFailed(error.response.data.error.message));
