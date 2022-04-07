import React, { useState } from "react";


//import Modal from "react-modal";
import Task from "./Task";
//from material
import Modal from "react-modal";
import {
  Button,
    TextField,
    InputLabel,
  Typography,
  Container,
  Select,
  MenuItem
} from "@material-ui/core";
//import ModalAddTaskComp from "./ModalAddTaskComp";
//import { Zoom } from "react-reveal/Zoom";

const TaskListes = ({ task }) => {
 // console.log(task);
  const [displayModal, setDisplayModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [day, setDay] = useState("");
  const [newTask, setNewTask] = useState(task);
  
  const [addTAsk, setaddTAsk] = useState("");
  const [dayFilter, setDayFilter] = useState("");
  
 
  

  const handleAddTask = () => {
    setDisplayModal(true);
    setDayFilter("")
    //setNewTask(task)
  };
  const handleCloseModal = () => {
    setDisplayModal(false);
  };

  const handleSubmitModal = (e) => {
    e.preventDefault();
    //add new task
    if (title && description && day) {
     setNewTask([...newTask, { title, description, day }]);
      
    }

    setDisplayModal(false);
    //console.log(newTask);
    setTitle("");
    setDescription("");
    setDay("");
  };

  // const handlerFilterByDay = () => {};

  const handleOnChangeFilter = (e) => {
    setDayFilter(e.target.value);

    
    if (e.target.value === "") {
      setNewTask(task);
    } else {
      setNewTask(task.filter((item) => item.day === e.target.value));
      console.log(newTask);
      
    }
   
  };
//delete
  const handleDelete = (id) => {
    //const newTask = task.slice();
  //console.log(newTaskDelete)
    setNewTask(newTask.filter((item) => item.id !== id));
   //setNewTaskDelete(newTask.filter((item) => item.id !== id));
    //setNewTask(newTaskDelete)
   console.log(newTask);
  };

  
  return (
    <Container maxWidth="xl" 
    //className="container-tasklist"
    >
      
      <div className="div-btn">
        <Button
          className="btn-add"
          size="large"
          variant="contained"
          color="primary"
          onClick={handleAddTask}
        >
          Add New Task
        </Button>
        <div className="div-select-filter">
          <Typography variant="h5">Filter by Day</Typography>
          {"  "}
          <Select
            className="select-filter"
            //native
            value={dayFilter}
            onChange={handleOnChangeFilter}
          >
            <MenuItem
              value=""
              //aria-label="None"
            >
              day
            </MenuItem>
            <MenuItem value="saturday">saturday</MenuItem>
            <MenuItem value="sunday">sunday</MenuItem>
            <MenuItem value="monday">monday</MenuItem>
          </Select>
        </div>
      </div>

      {displayModal && (
         <Modal isOpen={displayModal} className="modal">
         <h3>Add New Task</h3>
         {/*addTAsk*/}
         <form
           className="form-modal"
           noValidate
           autoComplete="off"
           onSubmit={handleSubmitModal}
         >
           <TextField
             className="input-modal"
             type="text"
             label="Title"
             variant="outlined"
             onChange={(e) => setTitle(e.target.value)}
           />
           <TextField
             className="input-modal"
             label="Description"
             type="text"
             variant="outlined"
             onChange={(e) => setDescription(e.target.value)}
           />
           
           <InputLabel htmlFor="age-native-simple">Day</InputLabel>
           <Select
             className="select"
             native
             value={day}
             onChange={(e) => {
               setDay(e.target.value);
               //console.log(day)
             }}
             
           >
             <option aria-label="None" value="" />
             <option value="saturday">saturday</option>
             <option value="sunday">sunday</option>
             <option value="monday">monday</option>
           </Select>

           <Button
             className="btn-modal"
             size="small"
             variant="contained"
             color="primary"
             type="submit"
           >
             Add
           </Button>
         </form>

         <Button
           className="btn-modal"
           size="small"
           variant="contained"
           color="primary"
           onClick={handleCloseModal}
         >
           x
         </Button>
       </Modal>
      )}
      <div className="task-card">
        {newTask &&
          newTask.map((item) => (
            <Task
              item={item}
              handleDelete={handleDelete}
              
              
             
            />
          ))}
     </div>
    </Container>
  );
};

export default TaskListes;
