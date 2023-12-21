

import React from "react"

const Search = ()=>{

    const [todoData,setTodoData] = React.useState([])
    
    const handleChange = (e) =>{
        if(e.target.value === ""){
            setTodoData([])
        }else{

            const requestOptions = {
                method:"GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type":"application/json"
                },
            }
            fetch(`http://localhost:4000/todo//get-todo-by-start/${e.target.value}`,requestOptions).then(response =>{
                const jsonPromise  = response.json()  
                
                jsonPromise.then(data =>{
                    setTodoData(data.data)
                })
            }).catch(err =>{
                console.log(err)
            })
        }
    }

    const elements = todoData.map((data)=>{
        return <div key={data._id}>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            {/* <button onClick={}></button>? */}
        </div>
    })
        
    return (
        <div>
            Search<input type="text" name="search" onChange={(e)=>handleChange(e)}/>
            {elements}
        </div>
    )
}

export default Search