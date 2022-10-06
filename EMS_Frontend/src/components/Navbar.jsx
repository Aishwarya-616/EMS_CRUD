
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#FFFFFF',
        textDecoration: 'none',
        marginRight: 20,
        fontSize: 20 
    }
})

const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
                
                <NavLink className={classes.tabs} to="./" exact="true">Home</NavLink>
                <NavLink className={classes.tabs} to="employeedata" exact="true">Employee Database</NavLink>
                <NavLink className={classes.tabs} to="addemployee" exact="true">Add Employee</NavLink>

            </Toolbar>
        </AppBar>
    )
}

export default NavBar;