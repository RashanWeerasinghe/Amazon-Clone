const UserModel = require("../Model/userModel");

const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

require("dotenv").config();
let refreshTokens = [];
class AuthController {
  static async register(req, res) {
    const email = req.body.email;
    const plaintextPassword = req.body.password;
    const role = req.body.role;

    const hash = await bcrypt.hash(plaintextPassword, 10);

    UserModel.createUser(email, hash, role, (err, item) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
      }

      return res.status(200).json(item);
    });

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  }

  static async login(req, res) {
    // Validate input, authenticate user, and return a token

    const email = req.body.email;
    const password = req.body.password;
    let C_password;

    if (!email || !password) {
      return res.status(401).json({ error: "Invalid email and password" });
    }
    UserModel.getUserByEmail(email, (err, item) => {
      if (err) {
        console.log(err);
        return res.sendStatus(400).json({ error: "Server error" });
      }

      C_password = item[0].password;
      // authenticated = checkPassword(password, C_password);
      bcrypt.compare(password, C_password, function (err, result) {
        if (err) {
          console.log(err);
          return res.sendStatus(400).json({ error: "Server error" });
        }
        if (result) {
          const username = req.body.email;
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
          return res
            .status(200)
            .json({ token: token, refreshToken: refreshToken });
        } else {
          return res.status(401).json({ error: "Invalid credentials" });
        }
      });
    });
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
  static async logout(req, res) {
    const refreshToken = req.body.refreshToken;
    refreshTokens = refreshTokens.filter((t) => t !== refreshToken);
    res.sendStatus(204);
  }
}

module.exports = AuthController;
