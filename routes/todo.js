const express = require("express");
const router = express.Router();
const controller = require("../controller/todo");

router.get("/", controller.homepageController);

router.get("/add-todo", controller.TodoFormpageController);

router.get("/update-todo", controller.UpdateTodopageController);

router.get("/delete-todo", controller.DeleteTodopageController);

router.post("/add-todo", controller.AddTodoController);

router.post("/update-todo/:id", controller.updateTodoController);
router.get("/confirm-delete/:id", controller.deleteTodoController);

module.exports = router;
