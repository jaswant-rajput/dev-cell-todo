
const express = require("express")
const {createNote} = require("../controllers/todoController")

const router = express.Router()

router.post("/create-todo",createNote)


// Old 
// router
//     .route("/createNote")
//     .post(todoController.createNote)

module.exports = router