require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);

const User = require("./models/user.model");
const Note = require("./models/note.model");
const express = require("express");
const cors = require("cors");

const app = express();
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./utilities");
const userRouter = require("./routes/userRoute");
const notesRouter = require("./routes/notesRoute");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  }),
);

app.get("/", (req, res) => {
  res.json({ data: "helloooooo" });
});

app.use("/user", userRouter);
app.use("/notes", notesRouter);

app.listen(8000);
module.exports = app;
