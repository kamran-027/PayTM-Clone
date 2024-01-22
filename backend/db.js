const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MongoDB_URI);

const userSchema = new mongoose.Schema({
  username: String,
  password: Number,
  firstName: String,
  lastName: String,
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
