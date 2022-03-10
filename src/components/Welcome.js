import {React} from 'react'
import { Container,Typography } from '@material-ui/core';
import TaskListes from './TaskListes'


const Welcome = ( {task}) => {
    //const classes = useStyles();
    //const [todoListe, setTodo] = useState({todo})
 //console.log(todo);
  return (
    <Container maxWidth="xl">
        {/*<Typography className="div-welcome" component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >*/}
           <TaskListes task={task }/>
        {/*</Typography>*/}
      </Container>

  )
}

export default Welcome