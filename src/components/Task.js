import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Typography,
  TextField,
  InputLabel,
  Select,
} from "@material-ui/core";

import Modal from "react-modal";

import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles({
  titleTask: {
    alignSelf: "center",
  },
});

const Task = ({ item, handleDelete, task, setTask, updateItem }) => {
  const classes = useStyles();

  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [titleUpdate, setTitleUpdate] = useState("");
  const [descriptionUpdate, setDescriptionUpdate] = useState("");
  const [dayUpdate, setDayUpdate] = useState("");
  //const [state, setState] = useState()
  const [updateTask, setUpdateTask] = useState("");

  //update
  const handleUpdateModal = () => {
    setShowModalUpdate(true);
  };

  /* useCallback((id) => 
       handleUpdate(id)
  ,[])*/

  const handleUpdate = async (id) => {
    //console.log(id);
    const updateTask = {
      title: titleUpdate,
      description: descriptionUpdate,
      day: dayUpdate,
    };
    //const updateTask = { titleUpdate, descriptionUpdate, dayUpdate };
 console.log(updateTask.title)
    const url = `/api/tasks/${id}`;

    await axios
      .put(url, updateTask)

      .then((resp) => {
        setUpdateTask(resp.data.data);
        console.log(updateTask);
        //setTask(...task,updateTask)
        //console.log(task);
        //const result = resp.data;
        const { status, message } = resp.data;
        //essayer

        if (status !== "SUCCES") {
          alert(message, status);
        } else {
          alert(message);
        }
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.message);
      });
    //if (titleUpdate || descriptionUpdate || dayUpdate) {
    //updateItem(item.id)
    //const {data} = resp;
    /*setTask(task.map(item => item.id === id ? 
         [...task,{updateTask}]
setTask({resp.data.data})
    //console.log(task);

    /*setTitleUpdate("");
    setDescriptionUpdate("");
    setDayUpdate("");*/
    //item.title:updateTask.title;
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    console.log("titleUpdate, descriptionUpdate, dayUpdate");

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
                onChange={(e) => {
                 // item.title !== ""
                   // ? setTitleUpdate(item.title)
                    //: 
                    setTitleUpdate(e.target.value);
                }}
                defaultValue={item.title}
              />
              <TextField
                className="input-modal"
                label="Description"
                type="text"
                variant="outlined"
                onChange={(e) => setDescriptionUpdate(e.target.value)}
                defaultValue={item.description}
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
                //onClick={() => handleUpdate(item._id)}
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
