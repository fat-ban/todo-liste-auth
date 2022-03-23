import { Container, Typography, Box } from "@material-ui/core";
import TaskListes from "./TaskListes";
import {useUserAuth} from "../context/UserAuthContext"

const Welcome = ({ task }) => {
  const {user} = useUserAuth();
  console.log(user)
 
  return (
    <Container maxWidth="xl" className='container-welcome'>
      <Typography variant="h3" component="div" >
      <Box textAlign="center" fontSize="12" m={1}>
        Hello Welcome <br/>{user && user.email}
      </Box>
      </Typography>
      
      <TaskListes task={task} />
    
    </Container>
  );
};

export default Welcome;
