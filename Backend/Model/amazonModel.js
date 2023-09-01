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
      "select project.project_id,project.project_name from project  join project_has_employee on project_has_employee.project_project_id=project.project_id where project_has_employee.employee_id=? ",
      [employee_id],
      callback
    );
  }
  static postEmpProjectCreate(project_id, employee_id, callback) {
    connection.query(
      "insert into project_has_employee(project_project_id,employee_id) values(?,?)",
      [project_id, employee_id],
      callback
    );
  }
  static getProjectEmployee(project_id, callback) {
    connection.query(
      "select employee.employee_id,employee.emp_name,emp_position,employee.emp_email,employee.emp_wage from employee left join project_has_employee on project_has_employee.employee_id=employee.employee_id where project_has_employee.project_project_id=?",
      [project_id],
      callback
    );
  }
  static getAllProjectsAndEmployees(callback) {
    connection.query(
      "select employee.employee_id,employee.emp_name,emp_position,employee.emp_email,employee.emp_wage,project.project_name from employee left join project_has_employee on project_has_employee.employee_id=employee.employee_id right join project on project.project_id=project_has_employee.project_project_id ",
      callback
    );
  }
  static getEmployeeIsCompanyName(employee_id, callback) {
    connection.query(
      "select company.company_name from company  left join employee on company.idcompany=employee.company_id where employee.employee_id=? ",
      [employee_id],
      callback
    );
  }
}

module.exports = amazonModel;
