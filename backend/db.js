const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MongoDB_URI);

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

const accountsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  balance: Number,
});

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountsSchema);

module.exports = { User, Account };
