import React from "react"
import "./home.css"
import AllNotes from "../AllNotes"
import Search from "../Search/Search"
// import { postTodo } from "../../actions/todoActions"
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
        // postTodo(`http://localhost:4000/todo/create-todo`,todo)
        const requestOptions = {
            method:"POST",
            headers : {
               Accept : "application/json",
               "Content-Type":"application/json"
            },
            body : JSON.stringify(todo)
            
        }
        fetch(`http://localhost:4000/todo/create-todo`,requestOptions).then(response =>{
            const data =  response.json()
            data.then(d => console.log(d))
        }).catch(err =>{
            console.log(err)
        })
    }

    return (
        <div className="form-container">
            <form>
                Title<input type="text" name="title" value={todo.title} onChange={(e)=>handleChange(e)} required/><br/>
                Desc<input type="text" name="description" value={todo.description} onChange={(e)=>handleChange(e)} required/><br/>
                <button onClick={(e)=>handleSubmit(e)}>Submit</button>
            </form>
            <hr />
            
            <AllNotes />
            <hr />
            <Search />
            
        </div>
    )
}

export default Home