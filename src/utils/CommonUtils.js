export const createObjectCopy = (object) => {
  return JSON.parse(JSON.stringify(object));
};

export const networkCallStatus = {
  loading: "LOADING",
  success: "SUCCESS",
  failure: "FAILURE",
  initial: "INITIAL",
};
