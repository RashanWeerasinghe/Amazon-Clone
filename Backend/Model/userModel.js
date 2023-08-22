const connection = require("../config/connection");

connection.connect();

class UserModel {
  static getUserByEmail(email, callback) {
    connection.query("SELECT*FROM USER");
  }
}

module.exports = UserModel;
