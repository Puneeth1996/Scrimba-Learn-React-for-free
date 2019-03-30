// Vidio 27 
// Helps in understanding debugging react 



import React from "react"

// Challenge:
// Given an incomplete class-based component without a constructor, 
// add a constructor and initialize state to fix the broken component.

// Step1
// either class App extends Component {}  
// if component is used than it should be declaratively imported as 
// import React, {Component} from "react"
// class App extends React.Component {}

// Step2
// this below class is missing with render() 

// Step3
// constructor which holds super class and state object is also missing 
//  the state object is also holds name and age value properties


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Sally",
            age: 13
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )    
    }  
}

export default App
