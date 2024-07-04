// utils/jwt.js
const JWT = require("jsonwebtoken");

const createToken = (userId) => {
  return JWT.sign({ id: userId }, process.env.TOKEN_SECRET_KEY, {
    expiresIn: "3h",
  });
};

const getToken = (headers) => {
  return headers?.authorization?.split(" ")[1];
};

const decodeToken = (token) => {
  return JWT.verify(token, process.env.TOKEN_SECRET_KEY);
};

module.exports = { createToken, getToken, decodeToken };
