const express = require("express");
const { router } = require("./routes");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use("/api/v1", router);
app.use(cors());
app.use(express.json());

app.listen(PORT, function (req, res) {
  console.log(`Listening on port ${PORT}`);
});
