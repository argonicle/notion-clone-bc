// services/userService.js
const userRepository = require("../repositories/userRepository");
const JWT = require("../utils/jwt");
const { encryptPassword, decryptPassword } = require("../utils/encryption");
const existValue = require("../utils/existValue");
const validateMatch = require("../utils/validateMatch");

const signUp = async ({ username, password }) => {
  // パスワードのエンクリプト
  password = encryptPassword(password, process.env.SECRET_KEY);

  // ユーザー名の重複チェック
  const overlappingUser = await userRepository.findUserByUsername(username);
  await existValue({ value: overlappingUser, wanted: false });

  // 新しいユーザーの作成
  const user = await userRepository.createUser({ username, password });

  // JWTトークンの生成
  const token = JWT.createToken(user._id);

  return { user, token };
};

const login = async ({ username, password }) => {
  // ユーザーの取得
  const user = await userRepository.findUserByUsername(username);
  await existValue({ value: user, wanted: true });

  // パスワードのデクリプト
  user.password = decryptPassword(user.password, process.env.SECRET_KEY);

  // パスワードの照合
  // todo デコードしたパスワードでの比較は危険
  await validateMatch({
    value_1: user.password,
    value_2: password,
    wanted: true,
  });

  // JWTトークンの生成
  const token = JWT.createToken(user._id);

  return { user, token };
};

const verifyAndRetrieveUser = async (headers) => {
  // トークンの取得
  const token = JWT.getToken(headers);
  await existValue({ value: token, wanted: true });

  // トークンのデコード
  const decodedToken = JWT.decodeToken(token);

  // ユーザーの取得
  const user = await userRepository.findUserById(decodedToken.id);
  await existValue({ value: user, wanted: true });

  return user;
};

module.exports = { signUp, login, verifyAndRetrieveUser };
