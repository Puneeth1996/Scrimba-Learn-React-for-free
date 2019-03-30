// Vidio 15 
// Inline Styles with the Style Property

import React from "react"
import ReactDOM from "react-dom"

function App() {
    const date = new Date()
    // const date = new Date(2018, 6, 31, 15)
    const hours = date.getHours()
    let timeOfDay
    
    const styles = {
      fontSize: 30
    }
    
    if (hours < 12) {
      timeOfDay = "morning"
      styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
      styles.color = "#8914A3"
    } else {
      timeOfDay = "night"
      styles.color = "#D90000"
    }
    
  
    //   this inline typed styling gets longer and longer
    const styles1 = {
        color: "#01ABCC", 
        backgroundColor: "#FF2DA0",
        // fontSize is automaitcally taken as pixel if it had to be change to units like em 
        // than fontSize: "2em"
        // these are javascript objects which sytactical sugar of HTML CSS
        fontSize: "1em"
      }

      

  return (
    <div>
            {/* inside JSX the style should be treated as object  */}
            {/* the background-color properties is change to camel cased backgroundColor value  */}
            {/* its can be set as string 'background-color' */}

            <h1 style={{color: "#FF8C00", backgroundColor: "#FF2D00"}}>Good {timeOfDay}!</h1>
            {/* yeah this type of defing a value of background-color throws warning but yeah that how its defined to CSS right!! */}
            <h1 style={{color: "#FF8C00", "background-color": "#FF2D00"}}>Good {timeOfDay}!</h1>

            {/* the same can be done with using variable */}
            <h1 style={styles1}>Good {timeOfDay}!</h1>

            <h1 style={styles}>Good {timeOfDay}!</h1>

    </div>

  )
}

ReactDOM.render(<App />, document.getElementById("root"))