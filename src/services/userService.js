const JWT = require("jsonwebtoken");

const encrypt = require("../utils/encryption");
const overlappingKey = require("../utils/overlappingKey");
const userRepository = require("../repositories/userRepository");

const signUp = async ({ name: username, password }) => {
  // パスワードの暗号化
  password = encrypt.password(password, process.env.SECRET_KEY);

  // ユーザー名の重複チェック
  const overlappingUser = await userRepository.findUserByUsername(username);
  await overlappingKey(overlappingUser);

  // 新しいユーザーの作成
  const user = await userRepository.createUser({ username, password });

  // JWTトークンの生成
  const token = JWT.sign({ id: user._id }, process.env.TOKEN_SECRET_KEY, {
    expiresIn: "3h",
  });

  return { user, token };
};

module.exports = { signUp };
