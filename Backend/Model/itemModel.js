const connection = require("../config/connection");
connection.connect();

class ItemModel {
  static getAllItems(callback) {
    connection.query("SELECT * FROM items", callback);
  }

  static getItemById(itemId, callback) {
    connection.query("SELECT * FROM items WHERE id = ?", [itemId], callback);
  }

  static createItem(itemId, itemData, callback) {
    connection.query(
      "INSERT INTO items (id,name) values(?,?)",
      [itemId, itemData],
      callback
    );
  }

  static updateItem(itemId, newData, callback) {
    connection.query(
      "UPDATE items SET name=? WHERE id = ?",
      [newData, itemId],
      callback
    );
  }

  static delete(itemId, callback) {
    connection.query("DELETE FROM items WHERE id = ?", [itemId], callback);
  }
}
module.exports = ItemModel;
