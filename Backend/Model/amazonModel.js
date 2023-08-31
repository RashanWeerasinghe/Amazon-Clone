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
  static getEmpProjects(employee_id, callback) {
    connection.query(
      "SELECT project.project_id, project.project_name FROM project JOIN  project_has_employee ON project_has_employee.employee_id = ? and project_has_employee.project_project_id = project.project_id ",
      [employee_id],
      callback
    );
  }
}

module.exports = amazonModel;
