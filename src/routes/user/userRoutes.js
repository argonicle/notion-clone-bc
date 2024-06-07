// routes/user
const express = require("express");
const router = express.Router();

const {
  validateUsername,
  validatePassword,
  validateConfirmPassword,
} = require("../../middlewares/validateInput");
const validateResult = require("../../middlewares/validationResult");
const userController = require("../../controllers/userController");

const signUpValidation = [
  validateUsername(),
  validatePassword(),
  validateConfirmPassword(),
];
const loginValidation = [validateUsername(), validatePassword()];

router.post("/", signUpValidation, validateResult, userController.signUp);
router.post("/login", loginValidation, validateResult, userController.login);
router.post("/verify", userController.verifyAndRetrieveUser);

module.exports = router;
