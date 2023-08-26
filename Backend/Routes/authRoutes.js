const express = require("express");

const AuthController = require("../Controller/authController");

const router = express.Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/token", AuthController.token);
router.delete("/logout", AuthController.logout);

module.exports = router;
