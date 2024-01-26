const express = require("express");
const z = require("zod");
const jwt = require("jsonwebtoken");
const { User, Account } = require("../db");
const authMiddleware = require("../middleware");

const router = express.Router();
router.use(express.json());

const userDetails = z.object({
  username: z.string().min(3).email(),
  password: z.string().min(6),
  firstName: z.string().min(1).max(10),
  lastName: z.string().min(1).max(10),
});

router.post("/signup", async function (req, res) {
  const isUserDetailsCorrect = userDetails.safeParse(req.body);
  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (!isUserDetailsCorrect.success) {
    return res.status(404).json({
      err: "Please enter the user details again!",
    });
  }

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken",
    });
  }

  const newUser = await User.create(req.body);
  await Account.create({
    userId: newUser._id,
    balance: 400,
  });
  const token = jwt.sign({ userId: newUser._id }, process.env.JWTPass);

  res.status(200).json({
    message: "User Created Succesfully",
    token: token,
  });
});

router.post("/signin", async function (req, res) {
  const signInDetails = z.object({
    username: z.string().email(),
    password: z.string(),
  });

  const isUserDetailsValid = signInDetails.safeParse(req.body);

  if (!isUserDetailsValid.success) {
    return res.status(411).json({
      message: "Incorrect User Details",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (!existingUser) {
    return res.status(411).json({
      message: "Error while logging in",
    });
  }

  const token = jwt.sign({ userId: existingUser._id }, process.env.JWTPass);
  res.status(200).json({
    token: token,
  });
});

router.put("/", authMiddleware, async (req, res) => {
  const updateBody = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    password: z.string().min(6).optional(),
  });

  const { success } = updateBody.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      message: "Password too small",
    });
  }

  await User.findByIdAndUpdate(req.userId, req.body);

  res.status(200).json({
    message: "User Details Updated Succesfully",
  });
});

router.get("/bulk", authMiddleware, async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [{ firstName: { $regex: filter } }, { lastName: { $regex: filter } }],
  });

  res.status(200).json({
    users: users.map((user) => {
      return {
        firstName: user.firstName,
        lastName: user.lastName,
        id: user._id,
      };
    }),
  });
});

module.exports = router;
