const jwt = require("jsonwebtoken");
const crypto = require("crypto");
function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ error: "Token not provided" });
  }

  const secretKey = crypto.randomBytes(64).toString("hex");
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }
    req.userId = decoded.userId;
    next();
  });
}

module.exports = verifyToken;
