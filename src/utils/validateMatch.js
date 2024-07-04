// utils/validateMatch
const validateMatch = async (value1, value2) => {
  if (value1 !== value2) {
    const error = new Error("値が一致していません");
    error.type = "match";
    error.statusCode = 400;
    throw error;
  }
};

module.exports = validateMatch;
