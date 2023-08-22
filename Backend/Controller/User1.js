const connection = require("../config/connection");
let User1;

connection.connect();

let sql = `CREATE TABLE IF NOT EXISTS TODOS(
ID INT PRIMARY KEY AUTO_INCREMENT,
TITLE VARCHAR(255) NOT NULL,
COMPLETED TINYINT(1) NOT NULL DEFAULT 0
)`;

connection.query(sql, (err, results, fields) => {
  if (err) console.log(err.message);
  User1 = results;
});

connection.end((err) => {
  if (err) {
    return console.log(err.message);
  }
});

module.exports = User1;
