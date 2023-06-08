import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Employee = db.define(
  "employee",
  {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    department: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    salary: DataTypes.FLOAT,
  },
  {
    freezeTableName: true,
  }
);

export default Employee;

(async () => {
  await db.sync();
})();
