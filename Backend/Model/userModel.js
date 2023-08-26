const connection = require("../config/connection");

connection.connect();

class UserModel {
  static getUserByEmail(email, callback) {
    connection.query("SELECT*FROM user");
  }
  static getUserById(userId, callback) {
    connection.query("SELECT * FROM user WHERE id = ?", [userId], callback);
  }
}

module.exports = UserModel;
