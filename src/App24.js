// Class based alows us state , life cycle methos which is cannot be done when using a simple function

import React from "react"

// function App() {
//     return (
//         <div>
//             <h1>Code goes here</h1>
//         </div>
//     )
// }

// class App extends React.Component {
//     render() {
//         const date = new Date();
//         return (
//             <div>
//                 <h1>Code goes here</h1>
//             </div>
//         )
//     }
// }


// when using props we shoud this

// function App(props) {
//     return (
//         <div>
//             <h1>{props.whatever}</h1>
//         </div>
//     )
// }

class App extends React.Component {
    
    yourMethodHere() {
        
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.whatever}</h1>
            </div>
        )
    }
}

export default App
