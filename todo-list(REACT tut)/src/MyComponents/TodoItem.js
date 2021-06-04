import React from 'react'
import PropTypes from 'prop-types'

export default function TodoItem({todo, onDelete}) {
    let todoStyle = {
        backgroundColor: "rgba(0,0,0,0.1)",
        padding: "3%",
        borderRadius: "10px"
    }
    let todoStyleImportant = {
        backgroundColor: "rgba(255,0,0,1)",
        padding: "3%",
        color: "white",
        borderRadius: "10px"
    }

    let whiteBg = {
        backgroundColor: "black",
        color:"white"
    }
    return (
        <div>
            { todo.checked?
            <div className = "container" style = {todoStyleImportant}>
            <h4>{todo.title}</h4> 
            <hr style = {whiteBg}/>
            <p>{todo.desc}</p>
            <button className="btn btn-dark" onClick={()=>{onDelete(todo)}}>Delete</button>
            </div>
            :
            <div className = "container" style = {todoStyle}>
            <h4>{todo.title}</h4> 
            <hr />
            <p>{todo.desc}</p>
            <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
            </div>    
            }
        </div>
    )
}

TodoItem.propTypes = {

}

