const express = require("express");
const bodyParser = require("body-parser");
// const authRoutes = require("./Routes/authRoutes");
const crudRoutes = require("./Routes/crudRoutes");

const app = express();

app.use(bodyParser.json());
// // app.use("/auth", authRoutes);
app.use("/crud", crudRoutes);

const hostname = "127.0.0.1";
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
