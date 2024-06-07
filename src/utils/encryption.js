const CryptoJs = require("crypto-js");

const encryptPassword = (password, secretKey) => {
  return CryptoJs.AES.encrypt(password, secretKey).toString();
};

module.exports = { password: encryptPassword };
