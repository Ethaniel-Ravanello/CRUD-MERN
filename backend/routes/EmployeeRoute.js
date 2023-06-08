import express from "express";
import {
  getEmployee,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controller/EmployeeController.js";

const router = express.Router();

router.get("/employees", getEmployee);
router.get("/employees/:id", getEmployeeById);

router.post("/employees/", createEmployee);
router.put("/employees/:id", updateEmployee);
router.delete("/employees/:id", deleteEmployee);

export default router;
