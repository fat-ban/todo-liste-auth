import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

const Task = ({item}) => {
  return (
    <Card className="task">
       {/*<CardContent className="task">*/}
           <Typography>Title : {item.title}</Typography>
           <Typography>Description : {item.description}</Typography>
       {/*</CardContent>*/}
    </Card>
  )
}

export default Task