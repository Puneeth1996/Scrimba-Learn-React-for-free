import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: [
                "Call your mom!",
                "New spam email available. All links are definitely safe to click."
            ]
            // unreadMessages: ["a", "b"]
        }
    }
    
    render() {
        return (
            <div>
                <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
                {
                    this.state.unreadMessages.length > 0 && 
                    <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
                }

                {                
                    this.state.unreadMessages.length > 0 ? 
                    <h2>You have {this.state.unreadMessages.length} unread messages!</h2> :
                    null
                }
            </div>
        )
    }
}

export default App
