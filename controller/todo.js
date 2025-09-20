const { Query } = require("mongoose");
const Todo = require("../models/toDo");

const homepageController = async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    res.render("index", { title: "Todo App", todos });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const TodoFormpageController = (req, res, next) => {
  try {
    res.render("form", { title: "Add todo" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const UpdateTodopageController = async (req, res, next) => {
  try {
    const { id } = req.query;

    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).send("Todo not found");
    }

    // render the updateform page, not deletetodo
    res.render("updateform", { title: "Update todo", todo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const DeleteTodopageController = async (req, res, next) => {
  try {
    const { id } = req.query;   // <-- use query, not params
    const todo = await Todo.findById(id);

    if (!todo) return res.status(404).send("Todo not found");

    res.render("deletetodo", { title: "Delete todo", todo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const AddTodoController = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const newTodo = new Todo({ title, description });
    await newTodo.save();

    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateTodoController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todo.title = title;
    todo.description = description;

    await todo.save();
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteTodoController = async (req,res,next)=>{
  try {
    const {id}=req.params;
    const {confirm}=req.query;
    if(confirm=="yes"){
      await Todo.findByIdAndDelete(id);
    }
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  homepageController,
  TodoFormpageController,
  UpdateTodopageController,
  DeleteTodopageController,
  AddTodoController,
  updateTodoController,
  deleteTodoController,
};
