import React,{useEffect} from "react";
import { Container, Typography, Box } from "@material-ui/core";
import TaskListes from "./TaskListes";
import { useUserAuth } from "../context/UserAuthContext";

import { makeStyles } from "@material-ui/core/styles";
import axios from "axios"

const useStyles = makeStyles({
  welcomeTypog: {
    marginBottom: "100px",
  },
});

const Welcome = () => {
  
  const classes = useStyles();

  const { user } = useUserAuth();
  console.log(user);

  
 /* useEffect(() => {
    const fetchTasks = async()=>{
      try{
       
        const res = await axios.get("http://localhost:8000/api/tasks")
        
        setTask(res.data)
        console.log(task)
      } catch (error) {
         console.log(error)
      }

    }

  
    fetchTasks()
  }, [])*/
 

  return (
    <Container maxWidth="xl" className="container-welcome">
      <Typography className={classes.welcomeTypog} variant="h4" component="div">
        <Box textAlign="center" fontSize="12" m={1}>
          Welcome {user && user.email}
        </Box>
      </Typography>

      <TaskListes/>
    </Container>
  );
};

export default Welcome;
