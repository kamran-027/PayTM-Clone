const express = require("express");
const z = require("zod");
const { User } = require("../db");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");

userRouter.use(express.json());

const userDetails = z.object({
  username: z.string().min(3),
  password: z.number().min(6),
  firstName: z.string().min(1).max(10),
  lastName: z.string().min(1).max(10),
});

userRouter.post("/signup", async function (req, res) {
  const isUserDetailsCorrect = userDetails.safeParse(req.body);
  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (!isUserDetailsCorrect.success) {
    return res.status(404).json({
      err: "Plese enter the user details again!",
    });
  }

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken",
    });
  }

  const token = jwt.sign(req.body.username, process.env.JWTPass);
  User.create(req.body);
  res.status(200).json({
    message: "User Created Succesfully",
    token: token,
  });
});

userRouter.post("/signin", function (req, res) {
  const existingUser = User.findOne({
    username: req.body.username,
  });

  if (!existingUser) {
    return res.status(411).json({
      message: "Error while logging in",
    });
  }

  const token = jwt.sign(req.body.username, process.env.JWTPass);
  res.status(200).json({
    message: token,
  });
});

module.exports = userRouter;
