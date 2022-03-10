import React from 'react'
import {AppBar, Toolbar,Typography,Tab, Tabs} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
navbar:{
  display:"flex",
  flexDirection:"row",
  justifyContent: "space-between",
},

}))


  

const NAvbar = () => {
    
    const classes = useStyles();


    return (
      
        <AppBar  className={classes.navbar}>
          <Toolbar>
           
            <Typography variant="h6" >
              My Todo Liste
            </Typography>
            
          </Toolbar>
          <Toolbar>
          <Tabs  textColor="'secondary'"
    centered>
            <Tab label="Sign In" />
          </Tabs>
          <Tabs  textColor="'secondary'"
    centered>
          <Tab label="Sign Up" />
            
          </Tabs>
          </Toolbar>
         
           
         
          
        </AppBar>
   
    );
}

export default NAvbar