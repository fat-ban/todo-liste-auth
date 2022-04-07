import React from "react";
import { AppBar, Toolbar, Typography, Tab, Tabs,Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import { Link, useNavigate } from "react-router-dom";
//import user
import { useUserAuth } from "../context/UserAuthContext";

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
}));

const NAvbar = () => {
  const classes = useStyles();
  const {user,logOut} = useUserAuth();

  const navigate = useNavigate()

  const handleLogOut=async ()=>{
    try {
      await   logOut()
      navigate('/')
      
    } catch (error) {
      console.log(error)
    }
      
       
  }

  return (
    <AppBar className={classes.navbar}>
      <Toolbar>
        <Typography variant="h6">My Todo Liste</Typography>
      </Toolbar>
      <Toolbar>
        <Paper>
        <Tabs textColor="secondary" 
        //centered
        >
          {
            user ?
            (
              
              <Tab label={<Link to="/signin" onClick={handleLogOut}>Log Out</Link>} />
              
            ):(
              <>
              <Tab label={<Link to="/signin">Sign In</Link>} />
              <Tab label={<Link to="/signup">Sign Up</Link>} />
              </>
              
            )
          }
          
        </Tabs>
        </Paper>
      </Toolbar>
      
    </AppBar>
  );
};

export default NAvbar;
