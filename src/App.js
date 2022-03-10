
import {React, useState} from "react";
import Home from "./components/Home";
import NAvbar from "./components/Navbar/NAvbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp"
import Welcome from "./components/Welcome";
import {todo} from "./data.json";
//router
import {BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


//const todoListes = JSON.stringify(todo)
//console.log(todoListes);

function App() {
  //const [todosListe, setTodosListe] = useState(todo)
  //console.log(todosListe)
  return (
    <BrowserRouter >
        <NAvbar/>
        {/*<SignIn/>*/}
      {/* <Welcome task={todo}/>*/}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/welcome" element={<Welcome task={todo}/>} />
        
      </Routes>
      
   </BrowserRouter>
  );
}

export default App;
