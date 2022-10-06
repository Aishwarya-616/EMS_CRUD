
import axios from 'axios';

const url = "http://localhost:8000/employees";

export const getEmployees = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);

}

export const addEmployee = async(employee) => {
    return await axios.post(`${url}/addemployee`, employee);
}

export const editEmployee = async (id, employee) => {
    return await axios.put(`${url}/${id}`, employee);
}

export const deleteEmployee = async (id) => {
    return await axios.delete(`${url}/${id}`);
}