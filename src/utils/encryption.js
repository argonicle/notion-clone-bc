// utils/encryption
const CryptoJs = require("crypto-js");

const encryptPassword = (password, secretKey) => {
  return CryptoJs.AES.encrypt(password, secretKey).toString();
};

const decryptPassword = (password, secretKey) => {
  return CryptoJs.AES.decrypt(password, secretKey).toString(CryptoJs.enc.Utf8);
};

module.exports = { encryptPassword, decryptPassword };
