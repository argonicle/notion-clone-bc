// utils/validateMatch
const validateMatch = async ({ value_1, value_2, wanted }) => {
  if (wanted) {
    if (value_1 !== value_2) {
      const error = new Error("値が一致していません");
      error.statusCode = 400;
      throw error;
    }
  } else {
    if (value_1 == value_2) {
      const error = new Error("値が一致しています");
      error.statusCode = 400;
      throw error;
    }
  }
};

module.exports = validateMatch;
