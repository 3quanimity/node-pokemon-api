const success = (message, data) => {
  return {
    status: 'success',
    message,
    data,
  };
};

const error = (message, data) => {
  return {
    status: 'error',
    message,
    data,
  };
};

module.exports = {
  success,
  error,
};
