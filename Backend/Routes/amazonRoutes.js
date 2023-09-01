const express = require("express");
const amazonController = require("../Controller/amazonController");
const verifyToken = require("../Middleware/verifyToken");
const checkUserRole = require("../Middleware/checkUserRole");

const router = express.Router();

router.get("/employees/:id", verifyToken, amazonController.getEmployeeById);
router.get(
  "/employee/projects/:id",
  verifyToken,
  amazonController.getEmpProjectsById
);
router.post(
  "/employee/projectemp/create",
  verifyToken,
  amazonController.postEmpCreateProject
);

router.get(
  "/employee/projectemployee/:id",
  verifyToken,
  amazonController.getProjectEmployeeById
);
router.get(
  "/employee/getallprojectsemployees",
  verifyToken,
  amazonController.getAllProjectsEmployees
);
module.exports = router;
