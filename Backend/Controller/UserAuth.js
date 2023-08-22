const connection = require("../config/connection");
let UserController;
connection.connect();
connection.query("select*from user", (error, res, fields) => {
  if (error) throw error;
  console.log("The solution is:", res[0]);
  UserController = res[0];
});
connection.end();

module.exports = UserController;
