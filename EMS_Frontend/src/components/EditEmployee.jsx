import { FormGroup, Input, InputLabel, FormControl, Button, makeStyles, Typography } from "@material-ui/core";
import react, { useEffect, useState } from 'react';
import { editEmployee, getEmployees } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

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

const EditEmployee = () => {
    const [ employee, setEmployee ] = useState(initialValues);
    const { firstName, lastName, emailId, phone } = employee;
    const { id } = useParams();
    const classes = useStyles();
    const navigate = useNavigate();

    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = async () => {
        const response = await getEmployees(id);
        setEmployee(response.data);
    }

    const onValueChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    }

    const editEmployeeDetails = async () => {
        await editEmployee(id, employee);
        navigate("/employeedata");
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Employee Details</Typography>
            <FormControl>
                <InputLabel>First Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name = 'firstName' value = {firstName} />
            </FormControl>
            <FormControl>
                <InputLabel>Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name ='lastName' value = {lastName} />
            </FormControl>
            <FormControl>
                <InputLabel>Email Id</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name ='emailId' value = {emailId} />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name ='phone' value = {phone}/>
            </FormControl>
            <Button variant="contained" color="primary" onClick={() => editEmployeeDetails() }>Save</Button>
        </FormGroup>

    )
}

export default EditEmployee;