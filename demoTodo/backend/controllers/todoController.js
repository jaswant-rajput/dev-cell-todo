
const { response } = require("express");
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

exports.getAllTodos = (req,res)=>{
  
    Todo.find().then(response=>{
      res.json({
        status:"success",
        data:response
      })
    }).catch(err => {
      res.json({
        status:"fail",
        message:err
      })
    })

}

exports.getTodoById = (req,res) =>{
  Todo.findById(req.params.todoId).then(response => {
    res.json({
      status:"success",
      data : response
    })
  }).catch(err =>{
    res.json({
      status:"fail",
      message:err
    })
  })
}

exports.getTodoByStart = (req,res) =>{
  const start = req.params.start
  Todo.find().then(data=>{
    const response = []
  
    const regex = new RegExp(start);
    data.map(d => {
      if (regex.test(d.title)){
        response.push(d)
      }
    })

    res.json({
      status:"success",
      data :response
    })
  }).catch(err =>{
    res.json({
      status:"success",
      data :err
    })
  })
}

exports.deleteById = (req,res)=>{
  Todo.findByIdAndDelete(req.params.todoId).then(response =>{
        res.json({
          status:"success",
          data :response
        })
    
      }).catch(err =>{
        
        res.json({
          status:"success",
          data :err
        })
      })
    }
    
    exports.updateById = (req,res) =>{
      Todo.findByIdAndUpdate(req.params.todoId,req.body,{new:true}).then(response =>{
      res.json({
        status:"success",
        data :response
      })
    
  }).catch(err =>{
    res.json({
      status:"success",
      data :err
    })
  })
}