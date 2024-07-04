// repositories/userRepository
const User = require("../models/userSchema");

const createUser = async (user) => {
  const newUser = new User(user);
  return await newUser.save();
};

const findUserByUsername = async (username) => {
  return await User.findOne({ username });
};

const findUserById = async (userId) => {
  return await User.findById(userId);
};

module.exports = { createUser, findUserByUsername, findUserById };
