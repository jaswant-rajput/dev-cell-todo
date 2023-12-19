const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
require('dotenv').config()
const todoRouter = require("./routes/todoRoutes")

mongoose.connect("mongodb://localhost:27017/todo").then(()=>{
    console.log("connected")
})


const app = express()
app.use(express.json())
app.use("/todo",todoRouter)

const PORT = 4000
app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})