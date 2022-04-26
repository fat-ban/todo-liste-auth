import React, { useState ,useEffect} from "react";
import {
  Button,
  Card,
  Typography,
  TextField,
  InputLabel,
  Select,
} from "@material-ui/core";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Modal,ModalHeader,ModalBody,ModalFooter} from "reactstrap";
import Modal from "react-modal";

import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles({
  titleTask: {
    alignSelf: "center",
  },
});

const Task = ({ item, handleDelete, task,setTask, updateItem }) => {
  const classes = useStyles();

  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [titleUpdate, setTitleUpdate] = useState("");
  const [descriptionUpdate, setDescriptionUpdate] = useState("");
  const [dayUpdate, setDayUpdate] = useState("");
  //const [updateTask, setUpdateTask] = useState("");

  //update
  const handleUpdateModal = () => {
    setShowModalUpdate(true);
  };

 /* useEffect(() => {
    handleUpdate(id)
  }, [id])*/
  

  const handleUpdate = async (id) => {
    console.log(id);
    const updateTask ={ title:titleUpdate,description : descriptionUpdate,day:dayUpdate}
    try {
     const resp = await axios.put(`/api/tasks/${id}`,updateTask);
     console.log(resp);
     
      if (titleUpdate || descriptionUpdate || dayUpdate) {
        //updateItem(item.id)

        setTask(task.map(item=> item.id === id ? {
         ...resp.data} : task))

     
      }
      console.log(task);

      setTitleUpdate("")
      setDescriptionUpdate('')
      setDayUpdate('')
      //item.title:updateTask.title;

    } catch (error) {
      console.log(error.message)
    }
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    console.log(titleUpdate, descriptionUpdate, dayUpdate);
    
    handleUpdate(item._id);
    //reset modal update
    
    //setTask([...task, updateTask]);
  
    setShowModalUpdate(false);
  };

  const closeModalUpdate = () => {
    setShowModalUpdate(false);
  };

  return (
    <Card className="task">
      {/*<CardContent className="task">*/}
      <div className="typography-task">
        <Typography
          className={classes.titleTask}
          variant="button"
          display="block"
          gutterBottom
        >
          {" "}
          {item.title}
        </Typography>
        <hr style={{ width: "30%" }} />
        <Typography> {item.description}</Typography>

        {/*<Typography> {item.day}</Typography>*/}
      </div>

      {/*</CardContent>*/}
      <div className="div-Delete-Edit">
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={handleUpdateModal}
        >
          Edite
        </Button>
        {showModalUpdate && (
          <Modal isOpen={showModalUpdate} className="modal">
            <h3>Update {item.title.toUpperCase()}</h3>

            <form
              className="form-modal"
              noValidate
              autoComplete="off"
              onSubmit={handleUpdateSubmit}
            >
              <TextField
                className="input-modal"
                type="text"
                label="title"
                variant="outlined"
                onChange={(e) => setTitleUpdate(e.target.value)}
              />
              <TextField
                className="input-modal"
                label="Description"
                type="text"
                variant="outlined"
                onChange={(e) => setDescriptionUpdate(e.target.value)}
              />

              <InputLabel htmlFor="age-native-simple">Day</InputLabel>
              <Select
                className="select"
                native
                value={dayUpdate}
                onChange={(e) => {
                  setDayUpdate(e.target.value);
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
                onClick={() => handleUpdate(item._id)}
              >
                Update
              </Button>
            </form>

            <Button
              className="btn-modal"
              size="small"
              variant="contained"
              color="primary"
              onClick={closeModalUpdate}
            >
              x
            </Button>
          </Modal>
        )}
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => handleDelete(item._id)}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default Task;
