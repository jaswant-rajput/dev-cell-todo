
const express = require("express")
const {createNote,getAllTodos,getTodoById,getTodoByStart,deleteById,updateById} = require("../controllers/todoController")

const router = express.Router()

router.post("/create-todo",createNote)
router.get("/get-all-todo",getAllTodos)
router.get("/get-todo/:todoId",getTodoById)
router.get("/get-todo-by-start/:start",getTodoByStart)
router.delete("/delete-todo/:todoId",deleteById)
router.put("/update-todo/:todoId",updateById)
// router.get("/get-todo-by-start/:start",getTodoByStart)
module.exports = router 