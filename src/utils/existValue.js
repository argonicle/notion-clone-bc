// utils/existValue
const existValue = async ({ value, wanted }) => {
  if (wanted) {
    if (!value) {
      const error = new Error("value does not exist");
      error.statusCode = 404;
      throw error;
    }
  } else {
    if (value) {
      const error = new Error("value already exists");
      error.statusCode = 409;
      throw error;
    }
  }
};

module.exports = existValue;
