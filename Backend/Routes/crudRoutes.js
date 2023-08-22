const express = require("express");
const CrudController = require("../Controller/crudController");

const router = express.Router();

router.get("/items", CrudController.getAllItems);
router.get("/items/:id", CrudController.getItemById);
router.post("/items/create", CrudController.createItem);
router.put("/items/:id/:name", CrudController.updateItem);

module.exports = router;
