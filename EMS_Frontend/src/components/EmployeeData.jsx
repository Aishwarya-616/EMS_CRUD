
import { Table, TableHead, TableBody, TableRow, TableCell, makeStyles, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../service/api";
import { Link } from "react-router-dom";


const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            background: '#000000',
            color: '#FFFFFF',
            fontSize: 20
        }
    },
    tbody: {
        '& > *': {
            fontSize: 20
        }
    }
}) 

const EmployeeData = () => {

    const [employees, setEmployees] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllEmployees();
    }, []);

    const getAllEmployees = async () => {
        const response = await getEmployees();
        console.log(response.data);
        setEmployees(response.data);
    }

    const deleteEmployeeData = async (id) => {
        await deleteEmployee(id);
        getAllEmployees();
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email Id</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    employees.map(employee => (
                        <TableRow className={classes.tbody} key={employee._id}>
                            <TableCell>{employee._id}</TableCell>
                            <TableCell>{employee.firstName}</TableCell>
                            <TableCell>{employee.lastName}</TableCell>
                            <TableCell>{employee.emailId}</TableCell>
                            <TableCell>{employee.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" style={{marginRight: '10px'}} component={ Link } to={`/editemployee/${employee._id}`}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteEmployeeData(employee._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>

    )
}

export default EmployeeData;