const connection = require("../config/connection");
connection.connect();

class amazonModel {
  static getEmployee(companyId, callback) {
    connection.query(
      "select*from employee where company_id=?",
      [companyId],
      callback
    );
  }
}

module.exports = amazonModel;
