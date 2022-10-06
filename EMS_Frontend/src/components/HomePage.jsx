
import { Box, makeStyles, Typography } from '@material-ui/core';
import home from "../Images/Home.jpg";
import work from "../Images/Work.jpg";

const useStyles = makeStyles({
    image: {
        width: '50%',
        height: '50%'
    },
    component: {
        margin: 50
    }
})

const HomePage = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant="h3" style={{marginBottom: '50px'}}>Employee Management System</Typography>
            <Typography variant="h5" style={{marginBottom: '50px'}}>WELCOME</Typography>
            <Box style={{display: 'flex' }}>
                <img className={classes.image} src={home} />
                <img className={classes.image} src={work} />
            </Box>
        </Box>
        
    )
}
    


export default HomePage;