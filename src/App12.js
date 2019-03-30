// Styling in React JS 
// use class instead of className 

// className is used not because its reserved keyword in JS 
// className classList its part vanilla js dom api...

// Please note styling in react can be applied to only react elemements , not react component, 
// when styling is applied to react components ( like header footer mainContent )
//  its acts different which will be seen in later section


import React from "react"

import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App

