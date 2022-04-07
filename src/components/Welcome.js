import { Container, Typography, Box } from "@material-ui/core";
import TaskListes from "./TaskListes";
import { useUserAuth } from "../context/UserAuthContext";

import {makeStyles} from "@material-ui/core/styles"


const useStyles = makeStyles({
  welcomeTypog: {
    marginBottom:"100px",
  },
});



const Welcome = ({ task,setTask }) => {
  const classes = useStyles()

  const { user} = useUserAuth();
  console.log(user);

  

  return (
    

    <Container maxWidth="xl" className="container-welcome">
      
        
          <Typography className={classes.welcomeTypog} variant="h4" component="div">
            <Box textAlign="center" fontSize="12" m={1}>
              Welcome {user && user.email}
            </Box>
          </Typography>

          <TaskListes task={task} settask={setTask} />
        
      
    </Container>
  );
};

export default Welcome;
