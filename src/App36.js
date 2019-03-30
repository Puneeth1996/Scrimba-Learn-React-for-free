import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 10000/4 )
    }
    
    render() {
        return (
            <div>
                {/* <Conditional isLoading={this.state.isLoading}/> */}
                {/* below implemeting condition rendering using the renarary operator */}
                {this.state.isLoading ?
                <h1>Loading...</h1> :
                <Conditional />}
            </div>
        )
    }
}

export default App
