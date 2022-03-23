import React,{useState} from "react";
import {
  Card,
  Typography,
  TextField,
  Button
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
//firebase
import { useUserAuth } from "../context/UserAuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const { logIn,googleSignIn } = useUserAuth();

  let navigate = useNavigate()

  //sign in with google
  const handleGoogleSignIn=async (e)=>{
 try {
   await googleSignIn()

 } catch (error) {
   console.log(error)
 }
  }

  const handleSubmit= async(e)=>{
    e.preventDefault()
    setError("");
    console.log(`${email} ${password}`)
    try {
      await logIn(email, password);
     
      navigate("/welcome");

    } catch (err) {
      setError(err.message);
      console.log(`error${error}`);
    }
  }
  return (
    <>
      <Card className="card">
        <Typography variant="h4" component="h2">
          Log In
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
            className="input"
            variant="outlined"
            color="secondary"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            
          />
          <Button
            className="btn"
            size="large"
            variant="contained"
            color="primary"
            type="Submit"
          >
            Sign In
          </Button>
        </form>
        
          
        
        <hr />

        <GoogleButton className="google-btn" type="dark" onClick={handleGoogleSignIn} />
      </Card>
      <Card className="card-bottom">
        <Typography component="span">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </Typography>
      </Card>
    </>
  );
};

export default SignIn;
