const express = require("express");
const zod = require("zod");
const { Account, User } = require("../db");
const authMiddleware = require("../middleware");
const { default: mongoose } = require("mongoose");
const router = express.Router();

router.use(express.json());

router.get("/balance", authMiddleware, async (req, res) => {
  const userAccount = await Account.findOne({ userId: req.userId });

  if (!userAccount) {
    return res.status(411).json({
      message: "User Not Found",
    });
  }

  res.status(200).json({
    message: `The balance is ${userAccount.balance}`,
  });
});

const transferBody = zod.object({
  to: zod.string().email(),
  amount: zod.number(),
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const { success } = transferBody.safeParse(req.body);

  const session = await mongoose.startSession();

  await session.startTransaction();
  const { to, amount } = req.body;

  if (!success) {
    await session.abortTransaction();
    return res.status(411).json({
      message: "Incorrect input details",
    });
  }

  const recieverUser = await User.findOne({
    username: to,
  });

  const recieverAccount =
    recieverUser &&
    (await Account.findOne({
      userId: recieverUser._id,
    }));

  if (!recieverAccount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Invalid Account",
    });
  }

  const sourceAccount = await Account.findOne({
    userId: req.userId,
  });

  if (sourceAccount.balance > amount) {
    await Account.updateOne(
      { userId: sourceAccount.userId },
      { balance: sourceAccount.balance - amount }
    ).session(session);

    await Account.updateOne(
      { userId: recieverAccount.userId },
      {
        balance: recieverAccount.balance + amount,
      }
    ).session(session);

    await session.commitTransaction();
    return res.status(200).json({
      message: "Transfer succesfull",
    });
  }

  await session.abortTransaction();

  res.status(400).json({
    message: "Insufficient balance",
  });
});

module.exports = router;
