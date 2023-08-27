const express = require("express");
const CrudController = require("../Controller/crudController");
const verifyToken = require("../Middleware/verifyToken");
const checkUserRole = require("../Middleware/checkUserRole");

const router = express.Router();

router.get("/items", verifyToken, CrudController.getAllItems);
router.get(
  "/item/:id",
  verifyToken,
  checkUserRole(["admin", "editor"]),
  CrudController.getItemById
);
router.post(
  "/item/create/:id",
  verifyToken,
  checkUserRole(["admin", "editor"]),
  CrudController.createItem
);
router.put(
  "/item/update/:id",
  verifyToken,
  checkUserRole(["admin", "editor"]),
  CrudController.updateItem
);

module.exports = router;
