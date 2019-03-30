// Props are immutable ,i.e, they cannot be changed with their value in the child component
// State store some immmutable object in react component class
// they are declared in the constructor methos and super method is declared along with it 

import React from "react"

// https://scrimba.com/p/p4Mrt9/cQnMDHD

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "Yes"
        }
        // State should not be change here 
        // This cause some weired results in program
        // we can use react setState method
    }

    // we can change the value of state using setState method, React will automatically update every child element that is receiving that state.
    
    render() {
        return (
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
                <ChildComponent answer={this.state.answer}/>
            </div>
        )
    }
}

export default App