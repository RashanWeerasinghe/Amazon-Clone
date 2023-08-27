const ItemModel = require("../Model/itemModel");

class CrudController {
  static async getAllItems(req, res) {
    ItemModel.getAllItems((err, items) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
      }
      return res.status(200).json(items);
    });
  }
  static async getItemById(req, res) {
    const itemId = req.params.id;
    console.log("itemid:", itemId);
    ItemModel.getItemById(itemId, (err, item) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "server error" });
      }
      if (!item) {
        return res.status(404).json({ error: "Item not found" });
      }
      return res.status(200).json(item);
    });
  }

  static async createItem(req, res) {
    const itemId = req.body.id;
    const itemData = req.body.name;
    console.log(req.body);
    ItemModel.createItem(itemId, itemData, (err, item) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
      }

      if (!item) {
        return res.status(404).json({ error: "Item data not found" });
      }
      return res.status(200).json(item);
    });
  }

  static async updateItem(req, res) {
    const itemId = req.body.id;
    const newData = req.body.name;

    ItemModel.updateItem(itemId, newData, (err, item) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
      }
      if (!item) {
        return res.status(404).json({ error: "Item not found" });
      }
      return res.status(200).json(item);
    });
  }
  static async deleteItem(req, res) {
    const itemId = req.body.id;
    ItemModel.delete(itemId, (err, item) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Server error" });
      }
      if (!item) {
        return res.status(404).json({ error: "Item not found" });
      }
      return res.status(200).json(item);
    });
  }
}

module.exports = CrudController;
