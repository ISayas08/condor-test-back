export const createResponse = (msg: string, payload: object) => {
  return {
    response: payload,
    message: msg
  };
};
