import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from "../MyComponents/TodoItem";

export default function Todos(props) {
    let containerStyle = {
        minHeight: "40vh",
        // border: "1px solid black"
    }
    return (
        <div className = "container my-3" style = {containerStyle}>
            <h3 className = "text-center my-3">Todos List</h3>
            <hr />
            {props.todos.length === 0 ? "No todos to display":
            props.todos.map((todo)=>{
                
                return (
                <>
                {/* <h3>Task</h3> */}
                <TodoItem todo = {todo} key= {todo.sno} onDelete = {props.onDelete}/>
                <hr />
                </>
                )
            })}
        </div>
    )
}

Todos.propTypes = {

}




