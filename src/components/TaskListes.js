import React from "react";
import Task from "./Task";
//from material

import { Card, Typography, Container } from "@material-ui/core";

const TaskListes = ({ task }) => {
  console.log(task);
  return (
    <Container className="container-tasklist">
      <Typography className="title-taskliste" variant="h2" component="div">
        My ToDo Liste
      </Typography>
      <Card className="task-card">
        {task && task.map((item) => <Task item={item} />)}
      </Card>
    </Container>
  );
};

export default TaskListes;
