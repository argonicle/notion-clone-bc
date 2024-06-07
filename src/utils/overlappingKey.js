const overlappingKey = async (key) => {
  if (key) {
    throw new Error(`既に使用されています`);
  }
};

module.exports = overlappingKey;
