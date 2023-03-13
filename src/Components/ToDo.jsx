import React from "react";

const ToDo = ({todo, index, completeToDo, removeToDo}) => {
    return (
        <div className="todo" style={{textDecoration: todo.isCompleted ? "line-trought":""}}>
            {todo.text}
            <div className="buttonsBlock">
            <button className="button_complete" onClick={() => completeToDo(index)}>Complete</button>
            <button className="button_remove" onClick={() => removeToDo(index)}>Remove</button>
            </div>
        </div>
    )
}

export default ToDo