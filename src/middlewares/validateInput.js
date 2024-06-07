const { body } = require("express-validator");

const validateUsername = () => {
  return body("username")
    .isLength({ min: 8 })
    .withMessage("ユーザー名は8文字以上である必要があります");
};

const validatePassword = () => {
  return body("password")
    .isLength({ min: 8 })
    .withMessage("パスワードは8文字以上である必要があります");
};

const validateConfirmPassword = () => {
  return body("confirmPassword")
    .isLength({ min: 8 })
    .withMessage("パスワードは8文字以上である必要があります")
    .custom((value, { req }) => {
      return value == req.body.password;
    })
    .withMessage("パスワードと確認パスワードが一致しません");
};

module.exports = {
  validateUsername,
  validatePassword,
  validateConfirmPassword,
};
