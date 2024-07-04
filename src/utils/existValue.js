// utils/existValue
const existValue = async (value) => {
  if (!value) {
    const error = new Error("存在しません");
    error.type = "exist";
    error.statusCode = 404;
    throw error;
  }
};

const notExistValue = async (value) => {
  if (value) {
    const error = new Error("すでに存在しています");
    error.type = "exist";
    error.statusCode = 409;
    throw error;
  }
};

module.exports = { existValue, notExistValue };
