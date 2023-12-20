import React from "react"
import "./home.css"

const Home = () =>{

    const [todo,setTodo] = React.useState({
        title:"",
        description:""
    })

    const handleChange = (e)=>{
        setTodo(prevTodo =>{
            return {...prevTodo,[e.target.name]:e.target.value}
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(todo)
    }

    return (
        <div className="form-container">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type="text" name="title" value={todo.title} onChange={(e)=>handleChange(e)} required/><br/>
                <input type="text" name="description" value={todo.description} onChange={(e)=>handleChange(e)} required/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Home