const handleError = (res, error) => {
  res
    .status(error.statusCode || 500)
    .json({ type: error.type, message: error.message });
};

module.exports = handleError;
