import employee from "../Models/UserSchema.js";
import Employee from "../Models/UserSchema.js";


export const getEmployees = async (req, res) => {
    try {
        let employee = await Employee.find();
        res.json(employee);
    } catch(error) {
        res.json({ message: error.message });
    }
}

export const addEmployee = async (req, res) => {
    const employee = req.body;
    const newEmployee = new Employee(employee);

    try {
        await newEmployee.save();
        res.json(newEmployee);
    } catch(error) {
        res.json({ message: error.message });
    }
}

export const getEmployeeById = async (req, res) => {
    const id = req.params.id;
    try {
        const employee = await Employee.findById(id);
        res.json(employee);
    } catch(error) {
        res.json({ message: error.message });
    }
}

export const editEmployee = async (req, res) => {
    const employee = req.body;
    const editEmployee = new Employee(employee);

    try {
        await Employee.updateOne({ _id: req.params.id }, editEmployee);
        res.json(editEmployee);
    } catch(error) {
        res.json({ message: error.message });
    }
}

export const deleteEmployee = async (req, res) => {
    try {
        await Employee.deleteOne({ _id: req.params.id });
        res.json("Employee deleted successfully.");
    } catch(error) {
        res.json({ message: error.message });
    }
}