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
    const itemData = req.params.name;
    ItemModel.createItem(itemData, (err, item) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
      }

      if (!itemData) {
        return res.status(404).json({ error: "Item data not found" });
      }
      return res.status(200).json(item);
    });
  }

  static async updateItem(req, res) {
    const itemId = req.params.id;
    const newData = req.params.name;

    ItemModel.updateItem(itemId, newData, (err, item) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
      }
      if (!itemId) {
        return res.status(404).json({ error: "Item not found" });
      }
      if (!itemData) {
        return res.status(404).json({ error: "Item data not found" });
      }
      return res.status(200).json(item);
    });
  }
}

module.exports = CrudController;
