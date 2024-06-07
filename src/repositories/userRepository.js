const User = require("../models/userSchema");

const createUser = async (user) => {
  const newUser = new User(user);
  return await newUser.save();
};

const findUserByUsername = async (username) => {
  return await User.findOne({ name: username });
};

module.exports = { createUser, findUserByUsername };
