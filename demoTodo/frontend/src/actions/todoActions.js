
export const postTodo = (todo)=>{
    const requestOptions = {
        method:"POST",
        headers : {
           Accept : "application/json",
           "Content-Type":"application/json"
        },
        body : JSON.stringify(todo)
        
    }
    fetch(`http://localhost:4000/todo/create-todo`,requestOptions).then(response =>{
        return response.json()
    })
}

