function convertToNullIfStringNull(value) {
  return value === "null" ? null : value;
}

module.exports = convertToNullIfStringNull;
