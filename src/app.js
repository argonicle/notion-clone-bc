require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const mongodb = require("./config/db-config");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");

mongodb.connect(process.env.MONGO_URL);

app.use(cors({ origin: process.env.FRONTEND_ORIGIN }));
app.use(express.json());
app.use("/user", userRoutes);
app.use("/note", noteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`${PORT}でサーバーを起動しました`));
