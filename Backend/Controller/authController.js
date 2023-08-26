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
      const username = req.body.username;
      const user = { name: username };
      // const secretKey = "my_secret_key";
      const options = { expiresIn: "1h" };

      const token = jwt.sign(user, process.env.TOKEN_KEY, {
        expiresIn: "1min",
      });
      const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_KEY, {
        expiresIn: "24h",
      });
      refreshTokens.push(refreshToken);
      return res.status(200).json({ token: token, refreshToken: refreshToken });
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  }
  static async token(req, res) {
    const refreshToken = req.body.refreshToken;
    if (refreshToken == null) res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) res.sendStatus(403);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY, (err, user) => {
      if (err) res.sendStatus(403);
      const accessToken = jwt.sign({ name: user.name }, process.env.TOKEN_KEY, {
        expiresIn: "1min",
      });
      return res.status(200).json({ accessToken: accessToken });
    });
  }
}

module.exports = AuthController;
