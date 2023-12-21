
import React from "react"

const AllNotes = () =>{
    
    const [todoData,setTodoData] = React.useState([])

    const handleClick = ()=>{
        const requestOptions = {
            method:"GET",
            headers : {
               Accept : "application/json",
               "Content-Type":"application/json"
            },
        }
        fetch(`http://localhost:4000/todo/get-all-todo`,requestOptions).then(response =>{
        const jsonPromise  = response.json()  
        
        jsonPromise.then(data =>{
            setTodoData(data.data)
            
        })
        }).catch(err =>{
            console.log(err)
        })
    }
    
    const handleDelete = (todoId) =>{
        
        const requestOptions = {
            method:"DELETE",
            headers : {
                Accept : "application/json",
                "Content-Type":"application/json"
            },
        }

            fetch(`http://localhost:4000/todo/delete-todo/${todoId}`,requestOptions).then(response =>{
            const data =  response.json()
            data.then(d => console.log(d))
        }).catch(err =>{
            console.log(err)
        })
        
    }

    

    const elements = todoData.map((data)=>{
        return <div key={data._id}>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <button onClick={()=>handleDelete(data._id)}>Delete</button>
        </div>
        
    })

    const hideAllNotes = ()=>{
        setTodoData([])
    }

    return(
        <div>
            <button onClick={handleClick}>Show all notes</button>
            <button onClick={hideAllNotes}>Hide al notes</button>
            {elements}
        </div>
    )
}

export default AllNotes

