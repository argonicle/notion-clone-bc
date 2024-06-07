const mongoose = require("mongoose");

const mongodb = {
  connect(url) {
    mongoose
      .connect(url)
      .then(() => console.log("データベースと接続しました"))
      .catch((err) => console.log("エラーが発生しました", err));
  },
};

module.exports = mongodb;
