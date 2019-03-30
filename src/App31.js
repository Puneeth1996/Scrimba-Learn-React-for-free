import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }

        // this binding method make sure that handleClick function is bound with App class constructor which is accessing state property of count.
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        console.log("I'm working!")

        // this.setState({ count: 1 })

        // using prevstate and adding 1 to prevState 
        this.setState(prevState => {
            return {
                count: prevState.count + 1
                // we should never change the state value directly like count: prevState.count ++
                // therefore we are simply leaving it by adding + 1 to the prevState.
            }
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                {/* Also I have added some CSS for button element in the style.css present at src folder!! */}
                {/* <button onClick={() => {console.log('I was clicked!!!')}}>Change!</button> */}
                <button onClick={this.handleClick}>Change!</button>
            </div>
        )
    }
}

export default App
