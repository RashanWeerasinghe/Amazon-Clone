const UserModel = require("../Model/userModel");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
require("dotenv").config();
let refreshTokens = [];
class AuthController {
  static async register(req, res) {
    // Validate input and create a new user

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  }

  static async login(req, res) {
    // Validate input, authenticate user, and return a token
    let authenticated = false;

    const userName = req.body.username;
    const password = req.body.password;
    if (userName && password) {
      authenticated = true;
    }

    if (authenticated) {
      const payload = { userId: 1234 };
      // const secretKey = "my_secret_key";
      const options = { expiresIn: "1h" };

      const token = jwt.sign(payload, process.env.TOKEN_KEY, {
        expiresIn: "10s",
      });
      const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_KEY, {
        expiresIn: "24h",
      });
      refreshTokens.push(refreshToken);
      return res.status(200).json({ token: token, refreshToken: refreshToken });
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  }
}

module.exports = AuthController;
