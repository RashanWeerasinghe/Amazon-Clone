const express = require("express");
const CrudController = require("../Controller/crudController");
const verifyToken = require("../Middleware/verifyToken");
const checkUserRole = require("../Middleware/checkUserRole");

const router = express.Router();

router.get("/items", verifyToken, CrudController.getAllItems);
router.get("/items/:id", verifyToken, CrudController.getItemById);
router.post(
  "/items/create",
  verifyToken,
  checkUserRole(["admin", "editor"]),
  CrudController.createItem
);
router.put(
  "/items/:id/:name",
  verifyToken,
  checkUserRole(["admin", "editor"]),
  CrudController.updateItem
);

module.exports = router;
