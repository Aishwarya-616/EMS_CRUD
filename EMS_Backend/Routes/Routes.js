import express from "express";

import { getEmployees, addEmployee, getEmployeeById, editEmployee, deleteEmployee } from "../Controller/UserController.js";

const route = express.Router();

route.get('/', getEmployees);
route.post('/addemployee', addEmployee);
route.get('/:id', getEmployeeById);
route.put('/:id', editEmployee);
route.delete('/:id', deleteEmployee);



export default route;