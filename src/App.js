import React from "react";
import "./App.css"
import Home from "./components/Home";
import NAvbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";
import ProtectedRoute from "./components/ProtectedRoute"

//import { todo } from "./data.json";
import {UserAuthContextProvider} from "./context/UserAuthContext"

//router
import { Routes, Route} from "react-router-dom";

//material-ui
import { Container } from "@material-ui/core";


function App() {
  //const [task, setTask] = useState(todo)
   
 
  
  //console.log(todosListe)
  return (
    <UserAuthContextProvider>
    <Container>
      <NAvbar />

      {/*<SignIn/>*/}
      {/* <Welcome task={todo}/>*/}
      <Routes>
       <Route path="/welcome" element={<ProtectedRoute><Welcome 
       //task={task} setTask={setTask}
        /></ProtectedRoute>}/>
        <Route path="/welcome" element={<Welcome />}/>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </Container>
    </UserAuthContextProvider>
  );
}

export default App;

