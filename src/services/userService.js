// services/userService.js
const userRepository = require("../repositories/userRepository");
const JWT = require("../utils/jwt");
const { encryptPassword, decryptPassword } = require("../utils/encryption");
const { existValue, notExistValue } = require("../utils/existValue");
const validateMatch = require("../utils/validateMatch");
const convertToNullIfStringNull = require("../utils/convertToNull");

const signUp = async ({ username, password }) => {
  // パスワードのエンクリプト
  password = encryptPassword(password, process.env.SECRET_KEY);

  // ユーザー名の重複チェック
  const overlappingUser = await userRepository.findUserByUsername(username);
  await notExistValue(overlappingUser);

  // 新しいユーザーの作成
  const user = await userRepository.createUser({ username, password });

  // JWTトークンの生成
  const token = JWT.createToken(user._id);

  return { user, token };
};

const login = async ({ username, password }) => {
  // ユーザーの取得
  const user = await userRepository.findUserByUsername(username);
  await existValue(user);

  // パスワードのデクリプト
  user.password = decryptPassword(user.password, process.env.SECRET_KEY);

  // パスワードの照合
  // todo デコードしたパスワードでの比較は危険
  await validateMatch(user.password, password);

  // JWTトークンの生成
  const token = JWT.createToken(user._id);

  return { user, token };
};

const verifyUser = async (headers) => {
  // トークンの取得
  const token = JWT.getToken(headers);
  await existValue(convertToNullIfStringNull(token));

  // トークンのデコード
  const decodedToken = JWT.decodeToken(token);

  // ユーザーの取得
  const user = await userRepository.findUserById(decodedToken.id);
  await existValue(user);

  return user;
};

module.exports = { signUp, login, verifyUser };
