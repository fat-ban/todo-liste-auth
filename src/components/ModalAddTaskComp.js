import React,{useState} from 'react'
import Modal from "react-modal";
import {
    Button,
    TextField,
    InputLabel,
    Select,
  } from "@material-ui/core";

const ModalAddTaskComp = ({day,addTAsk,displayModal,setTitle,setDescription,setDay,handleCloseModal,handleSubmitModal}) => {
    
    
  return (
      
    <Modal isOpen={displayModal} className="modal">
          <h3>Add New Task</h3>
          {addTAsk}
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
            {/*<TextField
              className="input-modal"
              label="Day"
              type="text"
              variant="outlined"
             
              onChange={(e)=>setDay(e.target.value)}
            />*/}
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
  )
}

export default ModalAddTaskComp