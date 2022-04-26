const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const shortid = require("shortid")

const app = express()

app.use(express.json())
app.use(bodyParser.json())

//mongoose
mongoose.connect("mongodb://localhost/todo-list-db",{
    useNewUrlParser: true,
    userCreateIndex: true,
    useUnifiedTopology: true,
    
})

//create model tasks
const Task = mongoose.model(
    "tasks",
    new mongoose.Schema({
        _id:{type:String, default: shortid.generate},
        title: String,
        description:String,
        day: String,
    })
)

//routes
///get
app.get("/api/tasks",async (req,res)=>{
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (error) {
        console.log(error.message)
    }
  
})

///post
app.post("/api/tasks",async(req,res)=>{
    try {
        const newTask = new Task(req.body)
        const savedTask = await newTask.save()
        res.send(savedTask)
    } catch (error) {
        console.log(error.message)
    }
})

///Delete
app.delete("/api/tasks/:id", async (req, res) => {
    try{
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        res.send(deletedTask);
    } catch(err){
     console.log(err)
    }
    
  });


//server
const port = process.env.Port || 5000;
app.listen(port,()=>console.log(`Server at http://localhost:${port}`))