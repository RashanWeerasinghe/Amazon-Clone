const connection = require("../config/connection");
connection.connect();

class ItemModel {
  static getAllItems(callback) {
    connection.query("SELECT * FROM items", callback);
  }

  static getItemById(itemId, callback) {
    connection.query("SELECT * FROM items WHERE id = ?", [itemId], callback);
  }

  static createItem(itemData, callback) {
    connection.query("INSERT INTO items SET ?", itemData, callback);
  }

  // static updateItem(itemId, newData, callback) {
  //   connection.query(
  //     "UPDATE items SET ? WHERE id = ?",
  //     [newData, itemId],
  //     callback
  //   );
  // }

  // static deleteItem(itemId, callback) {
  //   connection.query("DELETE FROM items WHERE id = ?", [itemId], callback);
  // }
}
module.exports = ItemModel;
