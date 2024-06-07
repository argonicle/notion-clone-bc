// controllers/userController.js
const userService = require("../services/userService");
const handleError = require("../middlewares/handleError");

const signUp = async (req, res) => {
  try {
    const { user, token } = await userService.signUp(req.body);
    res.status(200).json({
      message: "ユーザーを作成しました",
      user,
      token,
    });
  } catch (error) {
    handleError(res, error);
  }
};

const login = async (req, res) => {
  try {
    const { user, token } = await userService.login(req.body);
    res.status(200).json({
      message: "ログインしました",
      user,
      token,
    });
  } catch (error) {
    handleError(res, error);
  }
};

const verifyAndRetrieveUser = async (req, res) => {
  try {
    const user = await userService.verifyAndRetrieveUser(req.headers);
    res.status(200).json({ message: "認証されました", user });
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { signUp, login, verifyAndRetrieveUser };
