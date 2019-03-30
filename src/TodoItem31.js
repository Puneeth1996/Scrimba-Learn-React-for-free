// TOdo app phase 5
// vidios 5

// the warning of onchange event is cleared

/**
 * Challenge: Get rid of our warning about not having an onChange on our input. For now, the function that runs onChange can simply console.log something.
 */

import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => console.log("Changed!")}
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem