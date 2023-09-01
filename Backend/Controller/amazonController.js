const amazonModel = require("../Model/amazonModel");

class amazonController {
  static async getEmployeeById(req, res) {
    const company_id = req.params.id;
    amazonModel.getEmployee(company_id, (err, items) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
      }
      return res.status(200).json(items);
    });
  }
  static async getEmpProjectsById(req, res) {
    const employee_id = req.params.id;
    amazonModel.getEmpProjects(employee_id, (err, items) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
      }
      return res.status(200).json(items);
    });
  }
  static async postEmpCreateProject(req, res) {
    const employee_id = req.body.employee_id;
    const project_id = req.body.project_id;
    amazonModel.postEmpProjectCreate(project_id, employee_id, (err, items) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
      }
      return res.status(200).json(items);
    });
  }
  static async getProjectEmployeeById(req, res) {
    const project_id = req.params.id;
    amazonModel.getProjectEmployee(project_id, (err, items) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "server error" });
      }
      return res.status(200).json(items);
    });
  }
  static async getAllProjectsEmployees(req, res) {
    amazonModel.getAllProjectsAndEmployees((err, items) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "server error" });
      }
      return res.status(200).json(items);
    });
  }
}

module.exports = amazonController;
