const connection = require("../config/connection");

connection.connect();

class UserModel {
  static getUserByEmail(email, callback) {
    connection.query("SELECT*FROM user where email=?", [email], callback);
  }
  static getUserById(userId, callback) {
    connection.query("SELECT * FROM user WHERE iduser = ?", [userId], callback);
  }
  static createUser(email, password, role, callback) {
    connection.query(
      "INSERT INTO user (email,password,name) values(?,?,?)",
      [email, password, role],
      callback
    );
  }
}

module.exports = UserModel;
