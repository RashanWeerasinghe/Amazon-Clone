const express = require("express");
const CrudController = require("../Controller/crudController");
const verifyToken = require("../Middleware/verifyToken");
const router = express.Router();

router.get("/items", verifyToken, CrudController.getAllItems);
router.get("/items/:id", verifyToken, CrudController.getItemById);
router.post("/items/create", verifyToken, CrudController.createItem);
router.put("/items/:id/:name", verifyToken, CrudController.updateItem);

module.exports = router;
