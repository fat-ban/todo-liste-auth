import React from "react";
import { Container, Typography } from "@material-ui/core";

import SignIn from "../components/SignIn"

const Home = () => {
  return (
    <Container maxWidth="sm" className="container-home">
      <Typography variant="h6" color="primary" className="typography-home">
        Create Your To Do Liste for to day Sign In Then Go.
      </Typography>
      <SignIn/>
    </Container>
  );
};

export default Home;