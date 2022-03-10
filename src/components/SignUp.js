import React from 'react'
import {Card,Typography ,CardActions,Button,TextField } from '@material-ui/core';




    
   
const SignUp = () => {
   
  return (
    <Card className="card">
        <Typography variant="h4" component="h2">
         Log In
        </Typography>  
        <form className="form"  autoComplete="off">
        <TextField
        className="input"
    
    label="Enter your Email"
    variant="outlined"
    color="secondary"
  />
          <TextField
           className="input"
    
    label="Enter your Password"
    variant="outlined"
    color="secondary"
  />
   <TextField
           className="input"
   
    label="Confirme Password"
    variant="outlined"
    color="secondary"
  />
      
        </form>
        <CardActions>
        <Button size="large" variant="contained" color="primary">LogUp</Button>
      </CardActions>  
    </Card>
  )
}

export default SignUp;