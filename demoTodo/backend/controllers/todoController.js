
const Todo = require("../models/todoSchema")

exports.createNote = (req,res) => {
    
        let todo = new Todo(req.body)

        todo.save().then((response) => {

            res.status(200).json({
              status: "success",
              message:response
            });
        }).catch(err => {
            res.status(200).json({
              status: "fail",
              message : err
            });
            
        })
          
    
}