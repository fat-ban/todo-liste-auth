const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();

// ADD THIS
var cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(bodyParser.json());

//mongoose
mongoose.connect("mongodb://localhost/todo-list-db", {
  useNewUrlParser: true,
  userCreateIndex: true,
  useUnifiedTopology: true,
});

//create model tasks
const Task = mongoose.model(
  "tasks",
  new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    title: String,
    description: String,
    day: String,
  })
);

//routes
///get
app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
    if (!tasks) {
      res.json({
        status: "Failed",
        message: "Task not exist..",
      });
    } else {
      res.json({
        status: "SUCCESS",
        message: "Task got successfully",
      });
      console.log(tasks);
    }
  } catch (error) {
    console.log(error.message);
  }
});

///post
app.post("/api/tasks", async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();
    console.log("task saved in db");
    res.send(savedTask);
    if (!savedTask) {
      res.json({
        status: "Failed",
        message: "Task not register...",
      });
    } else {
      res.json({
        status: "SUCCESS",
        message: "Task register successfully",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
});

///Delete
app.delete("/api/tasks/:id", async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    res.send(deletedTask);
  } catch (err) {
    console.log(err);
  }
});

//update
app.put("/api/tasks/:id", async (req, res) => {
  try {
    console.log("start update");
    const _id = req.params.id;
    const result = await Task.findByIdAndUpdate(_id, req.body, { new: true });
    console.log(`result from server ${result}`);
    if (!result) {
      res.json({
        status: "Failed",
        message: "Task is not updated...",
        data: result,
      });
    } else {
      res.json({
        status: "SUCCESS",
        message: "Task is updated successfully... ",
        data: result,
      });
    }
  } catch (error) {
    res.send(error);
  }
});

//server
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server at http://localhost:${port}`));
