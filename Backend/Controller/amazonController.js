const amazonModel = require("../Model/amazonModel");

class amazonController {
  static async getEmployeeById(req, res) {
    const company_id = req.params.id;
    amazonModel.getEmployee(company_id, (err, items) => {
      if (err) {
        console.err(err);
        return res.status(500).json({ error: "Server error" });
      }
      return res.status(200).json(items);
    });
  }
}

module.exports = amazonController;
