const express = require("express");
const {
  loginUser,
  singUpUser,
  userInfo,
} = require("../controller/uses.Controller");
const { authenticateToken } = require("../utilities");
const userRouter = express.Router();

userRouter.post("/register", singUpUser);
userRouter.post("/login", loginUser);
userRouter.get("/getUser", authenticateToken, userInfo);

module.exports = userRouter;
