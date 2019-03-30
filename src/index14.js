import React from "react"
import ReactDOM from "react-dom"

// Vidio 14 
// Inline Styles with the Style Property

function App() {
  const firstName = "Bob"
  const lastName = "Ziroll"

//   using the basic date function , displaying time of the time as below 
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  
  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }
  
  return (
    <div>
        {/* This below statements show how to use variable in JSX using basic concatination and also string templating */}
        <h1>Hello {firstName + " " + lastName}!</h1>
        <h1>Hello {`${firstName} ${lastName}`}!</h1>
        <hr/><br/>
        <h1>It is currently about {date.getHours() % 12} o'clock!</h1>
        <hr/><br/>
        <h1>Good {timeOfDay}!</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));