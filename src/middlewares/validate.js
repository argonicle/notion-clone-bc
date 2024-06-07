const validateInput = (req, res, next) => {
  for (const key in req.body) {
    if (!req.body[key]) {
      return res.status(400).json({ error: "入力されていない値があります" });
    }
  }
  next();
};

module.exports = { input: validateInput };
