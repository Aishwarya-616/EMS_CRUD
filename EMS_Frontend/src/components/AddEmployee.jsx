import { FormGroup, Input, InputLabel, FormControl, Button, makeStyles, Typography } from "@material-ui/core";
import react, { useState } from 'react';
import { addEmployee } from "../service/api";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '10% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const initialValues = {
    firstName: '',
    lastName: '',
    emailId: '',
    phone: ''
}

const AddEmployee = () => {
    const [ employee, setEmployee ] = useState(initialValues);
    const { firstName, lastName, emailId, phone } = employee;
    const classes = useStyles();
    const navigate = useNavigate();

    const onValueChange = (e) => {
        
        setEmployee({ ...employee, [e.target.name]: e.target.value });
        console.log(employee);
    }

    const addEmployeeDetails = async () => {
        await addEmployee(employee);
        navigate("/employeedata");
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add New Employee</Typography>
            <FormControl>
                <InputLabel>First Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = 'firstName'/>
            </FormControl>
            <FormControl>
                <InputLabel>Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name ='lastName'/>
            </FormControl>
            <FormControl>
                <InputLabel>Email Id</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name ='emailId'/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name ='phone'/>
            </FormControl>
            <Button variant="contained" color="primary" onClick={() => addEmployeeDetails() }>Add Employee</Button>
        </FormGroup>

    )
}

export default AddEmployee;