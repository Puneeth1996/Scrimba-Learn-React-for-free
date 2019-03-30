import React from "react"

function Conditional(props) {

    // condition ? statement if true : statement if false
    // props.isLoading === true ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>

    if(props.isLoading === true) {
        return (
            <h1>Loading...</h1>
        )
    }
    return (
        <h1>Some cool stuff about conditional rendering</h1>
    )    
}

function Conditional1(props) {
    return (
        <div>
            {props.isLoading === true ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>}
        </div>
    )
    
}
function Conditional2(props) {
    return <h1>Some cool stuff about conditional rendering</h1>
}


export default Conditional2