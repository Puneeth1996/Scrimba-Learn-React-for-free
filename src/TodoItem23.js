import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
        {/* The checked propertie is directly assigned with object */}
        {/* This cause react to throw an error */}
            <input type="checkbox" checked={props.item.completed}/>
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem