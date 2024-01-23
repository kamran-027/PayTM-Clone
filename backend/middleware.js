const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const token = req.headers.authorization.replace(/^Bearer\s/, "");

  if (!token) {
    return res.status(411).json({
      message: "No Token Found",
    });
  }

  try {
    const decodedDetails = jwt.verify(token, process.env.JWTPass);
    req.id = decodedDetails;
    next();
  } catch {
    res.status(411).json({
      message: "Invalid Token Details",
    });
  }
}

module.exports = authMiddleware;
