import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Typography, Button, TextField } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("signup")
    setError("");
    try {
      await signUp(email, password) 

       navigate("/welcome")

    } catch (err) {
      setError(err.message);
      console.log(`error${error}`);
    }
  };

  return (
    <>
      <Card className="card">
        <Typography variant="h4" component="h2">
          Firebase Auth Signup
        </Typography>
        {error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert — <strong>{error}</strong>
          </Alert>
        )}

        <form className="form" autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            className="input"
            variant="outlined"
            color="secondary"
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            type="password"
            placeholder="Password"
            className="input"
            variant="outlined"
            color="secondary"
            onChange={(e) => setPassword(e.target.value)}
          />
         </form>  
           
          <Button
            className="btn"
            size="large"
            variant="contained"
            color="primary"
            type="Submit"
          >
            Sign up
          </Button>
       
      </Card>
      <Card className="card-bottom">
        <Typography component="span">
          Already have an account? <Link to="/signin">Log In</Link>
        </Typography>
      </Card>
    </>
  );
};

export default Signup;
