// Handling Events in React
// Vidio 30 


import React from "react"

function handleClick() {
    console.log("I was clicked")
}

// https://reactjs.org/docs/events.html#supported-events

function App() {
    return (
        <div>
            {/* <img src="https://www.fillmurray.com/200/100"/> */}
            {/* Here we are creating mouse hover method when user moves cursor over / hover on the image  */}
            <img onMouseOver={() => console.log("Hovered!")} src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            {/* <button onClick={() => console.log("I was clicked!")}>Click me</button> */}
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App
