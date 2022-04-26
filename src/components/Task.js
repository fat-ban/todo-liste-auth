import React,{useState} from "react";
import { Button, Card, Typography ,TextField,InputLabel,Select} from "@material-ui/core";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Modal,ModalHeader,ModalBody,ModalFooter} from "reactstrap";
import Modal from "react-modal";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  titleTask: {
    alignSelf:"center"
  },
});



const Task = ({ item,handleDelete}) => {
  const classes = useStyles();

  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [titleUpdate, setTitleUpdate] = useState("")
  const [descriptionUpdate, setDescriptionUpdate] = useState("")
  const [dayUpdate, setDayUpdate] = useState("")
  

  
   //update
  const handleUpdateModal = () => {
    setShowModalUpdate(true);
  
  };

  const handleUpdateSubmit=(e)=>{
     e.preventDefault()
     console.log(titleUpdate,descriptionUpdate,dayUpdate)
    
     if(titleUpdate && descriptionUpdate && dayUpdate){
      item.title= titleUpdate
      item.description=descriptionUpdate
      item.day=dayUpdate
      console.log({item})
      //reset modal update
      
     }
     setShowModalUpdate(false)
     
 
   }

  /* const handleUpdate=(id)=>{
     
    item.title= titleUpdate
    item.description=descriptionUpdate
    item.day=dayUpdate
    console.log({item})
   }*/

  const closeModalUpdate=()=>{
    setShowModalUpdate(false)
    
  }

  return (
    <Card className="task">
      {/*<CardContent className="task">*/}
      <div className="typography-task">
        <Typography className={classes.titleTask} variant="button"  display="block" gutterBottom > {item.title}</Typography>
           <hr style={{width:"30%" }}/>
        <Typography> {item.description}</Typography>
       
        {/*<Typography> {item.day}</Typography>*/}
      </div>

      {/*</CardContent>*/}
      <div className="div-Delete-Edit">
        <Button size="small" variant="contained" color="primary"
        onClick={handleUpdateModal}
        >
          Edite
        </Button>
        {showModalUpdate &&
        <Modal isOpen={showModalUpdate} className="modal">
       <h3>Update{" "} {item.title.toUpperCase()}</h3>
         
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
             //onClick={()=>handleUpdate(item.id)}
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
      }
        <Button size="small" variant="contained" color="primary"
        onClick={()=>handleDelete(item.id)}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default Task;
