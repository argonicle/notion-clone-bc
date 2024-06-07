const handleError = (res, error) => {
  res.status(error.statusCode || 500).json({ message: error.message });
};

module.exports = handleError;
