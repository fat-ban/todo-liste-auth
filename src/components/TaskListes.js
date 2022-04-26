import React, { useEffect, useState } from "react";
import axios from "axios";
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
  MenuItem,
} from "@material-ui/core";
//import { set } from "mongoose";
//import ModalAddTaskComp from "./ModalAddTaskComp";
//import { Zoom } from "react-reveal/Zoom";
//import data from '../data.json'

const TaskListes = () => {
  // console.log(task);
  //get data from localStorage
  const [task, setTask] = useState([]);
  //console.log(task)
  /*()=>{
    const savedTask = localStorage.getItem('task')
    if (savedTask) {
      return JSON.parse(savedTask)
    }else {
      return []
    }
  }*/

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("api/tasks");
        console.log(res.data);
        setTask(res.data);
        //console.log(task);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(error.message);
        }
      }
    };
    fetchTasks();
  }, []);

  const [displayModal, setDisplayModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [day, setDay] = useState("");

  const [newTask, setNewTask] = useState(
    {}
    /*()=>{
    const savedNewTask = localStorage.getItem("newTask")
    if (savedNewTask) {
      return JSON.parse(savedNewTask)
    }else {
      return []
    }
  }*/
  );

  //const [addTAsk, setaddTAsk] = useState("");
  const [dayFilter, setDayFilter] = useState("");
  const [filter, setFilter] = useState(false);

  /* useEffect(() => {
    
    localStorage.setItem("task", JSON.stringify(task))
    console.log(task);
    localStorage.setItem("newTask", JSON.stringify(newTask))
    
  }, [newTask,task])*/

  const handleAddTask = () => {
    setDisplayModal(true);
    setDayFilter("");
    //setNewTask(task)
  };
  const handleCloseModal = () => {
    setDisplayModal(false);
  };

  //add NewTask///
  const handleSubmitModal = async (e) => {
    e.preventDefault();
    setFilter(false);
    const newTask ={title,description,day}
    //add new task
    try {
      const res = await axios.post("/api/tasks",newTask)
      console.log(res.data);
      //const allTasks = [...task, res.data]

      if (title && description && day) {
         setTask( [...task, res.data])
        //setTask([...task, { title, description, day, id: Date.now() }]);
        //setTask(allTasks)
        console.log(task);
      }
      setTitle('')
      setDescription('')
      setDay('')
      
    } catch (error) {
      console.log(error.massage);
    }
   

    setDisplayModal(false);
    //console.log(newTask);
    setTitle("");
    setDescription("");
    setDay("");
  };

  //filter data ///////
  const handleOnChangeFilter = (e) => {
    setFilter(true);

    setDayFilter(e.target.value);
    console.log(e.target.value);
    //localStorage.getItem("task")
    if (e.target.value === "") {
      setNewTask(task);
      console.log(newTask);
    } else {
      setNewTask(task.filter((item) => item.day === `${e.target.value}`));
      setFilter(true);
    }
  };

  //delete/////////////
  const handleDelete = async (id) => {
    //console.log(task)
    try {
       await axios.delete(`/api/tasks/${id}`)
      
      const taskDelete = task.filter(item => item._id !== id);
      //console.log(task.filter(item => item._id !== id));
      setTask(taskDelete)
      console.log(taskDelete);
    } catch (error) {
       console.log(error.message)
    }
    
  };

  //update/////



  return (
    <Container
      maxWidth="xl"
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
        {filter
          ? newTask &&
            newTask.map((item) => (
              <Task task={task} item={item}handleDelete={handleDelete} key={item.id} setTask={setTask}
              // updateItem={updateItem}
              />
            ))
          : task !== [] &&
            task.map((item) => (
              <Task item={item}  handleDelete={handleDelete} key={item.id} setTask={setTask}
               //updateItem={updateItem}
               />
            ))}
      </div>
    </Container>
  );
};

export default TaskListes;
