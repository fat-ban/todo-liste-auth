import React from 'react'
import {Card,Typography ,CardActions,Button,TextField } from '@material-ui/core';
import GoogleButton from 'react-google-button'




    
   
const SignIn = () => {
   
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
  
      
        </form>
        <CardActions>
        <Button className="btn" size="large" variant="contained" color="primary">LogIn</Button>
        

      </CardActions> 
      <hr />
      
      <GoogleButton
            className="google-btn"
            type="dark"
            onClick={""}
          />
    </Card>
  )
}

export default SignIn