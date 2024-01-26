const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const tokenHeader = req.headers.authorization;

  if (!tokenHeader) {
    return res.status(411).json({
      message: "No Token Found",
    });
  }

  try {
    const token = tokenHeader.replace(/^Bearer\s/, "");
    const decodedDetails = jwt.verify(token, process.env.JWTPass);
    req.userId = decodedDetails.userId;
    next();
  } catch {
    res.status(411).json({
      message: "Invalid Token Details",
    });
  }
}

module.exports = authMiddleware;
