const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;
var mysql = require("mysql2");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "amazon",
});
connection.connect();
connection.query("select*from user", (error, res, fields) => {
  if (error) throw error;
  console.log("The solution is:", res[0]);
});
connection.end();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
