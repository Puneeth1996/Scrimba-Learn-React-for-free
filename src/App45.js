// Meme Generator Capstone Project
// i have some styles in app.css


/**
 * Create the boilerplate to get React to render something on the screen
 * Render an <App /> component, which you'll need to create separately
 */




/**
 * Create 2 new components - Header and MemeGenerator
 * Header will only display things
 * MemeGenerator will be calling to an API and holding on to data
 * Each should be in their own file of the same name
 */


import React from "react"
import Header from "./Header"
import MemeGenerator from "./MemeGenerator"

function App() {
    return (
        <div>
            <Header />
            <MemeGenerator />
        </div>
    )
}

export default App