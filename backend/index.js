import express from "express";
import cors from "cors";
import EmployeeRoute from "./routes/EmployeeRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(EmployeeRoute);

app.listen(5000, () => console.log("Server Up and Running"));
