const express = require("express");
const router = express.Router();

const validate = require("../middlewares/validate");
const userController = require("../controllers/userController");

router.post("/", validate.input, userController.signUp);

module.exports = router;
