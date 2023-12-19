
const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    title : {
        type:String,
        trim:true,
        required:[true,"A todo must have a title"]
    },
    description : {
        type:String,
        trim:true,
        required:[true,"A todo must have a description"],
    },
})

const Todo = mongoose.model("Todo",todoSchema)

module.exports = Todo