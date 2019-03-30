// Lifecycle Methods Part 1 Part 2
// Vidio 34 and 35






// there 3 old life cycle methods which were depricated by
// Life cylce methods are Render(), componentDidMount()

import React, {Component} from "react"

// this below link show the react component cycle methods and that been written react 16 can to existance 
// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1

// this below link shows the react life cycles methods which are going to be depreciated 
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

class TodoList extends Component {
    constructor() {
        super()
        this.state = {}
    }
    // these below two life cycle methods are the two new replacements for the deprecated once 

    static getDerivedStateFromProps(props, state) {
        // return the new, updated state based upon the props
        // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
        // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    }
    
    getSnapshotBeforeUpdate() {
        // create a backup of the current way things are
        // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
    }

    // this is another lifecycle method that is going to be depreciated 
    // componentWillMount() {
        
    // }
    componentDidMount() {
        // GET the data I need to correctly display
    }
    
    // this one of the life cycle that are being deprecated from 16.3 version of React
    // this can be used untill React 17 
    // UNSAFE_componentWillReceiveProps(nextProps) 
    componentWillReceiveProps(nextProps) {
        if (nextProps.whatever !== this.props.whatever) {
            // do something important here
        }
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        // return true if want it to update
        // return false if not
    }
    // this is another lifecycle method that is going to be depreciated 
    // componentWillUpdate() {
        
    // }
    
    componentWillUnmount() {
        // teardown or cleanup your code before your component disappears
        // (E.g. remove event listeners)
    }
    
    render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}

export default App
 