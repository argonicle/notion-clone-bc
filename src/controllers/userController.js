// controllers/userController.js
const userService = require("../services/userService");

const signUp = async (req, res) => {
  try {
    const { user, token } = await userService.signUp(req.body);
    res.status(200).json({
      message: "ユーザーを作成しました",
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { signUp };
