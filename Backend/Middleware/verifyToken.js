const jwt = require("jsonwebtoken");
const crypto = require("crypto");
require("dotenv").config();

function verifyToken(req, res, next) {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("bearer")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(403).json({ error: "Token not provided" });
    }
    jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Invalid token" });
      }
      req.user = decoded;
      next();
    });
  } else res.sendStatus(401);

  // const secretKey = "my_secret_key";
}

module.exports = verifyToken;
