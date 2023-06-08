import Employee from "../models/EmployeeModel.js";

export const getEmployee = async (req, res) => {
  try {
    const response = await Employee.findAll();
    res.status(200).json(response);
  } catch (err) {
    console.log(err.message);
  }
};

export const getEmployeeById = async (req, res) => {
  try {
    const response = await Employee.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (err) {
    console.log(err.message);
  }
};
export const createEmployee = async (req, res) => {
  try {
    await Employee.create(req.body);
    res.status(201).json({ message: "Employee has been Added" });
  } catch (err) {
    console.log(err.message);
  }
};

export const updateEmployee = async (req, res) => {
  try {
    await Employee.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Employee has been Updated" });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    await Employee.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Employee has been Fired" });
  } catch (err) {
    console.log(err.message);
  }
};
