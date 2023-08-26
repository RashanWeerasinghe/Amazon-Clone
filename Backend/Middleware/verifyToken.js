const jwt = require("jsonwebtoken");
const crypto = require("crypto");
require("dotenv").config();

function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ error: "Token not provided" });
  }

  // const secretKey = "my_secret_key";
  jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }
    req.userId = decoded.userId;
    next();
  });
}

module.exports = verifyToken;
