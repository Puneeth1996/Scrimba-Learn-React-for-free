import React from "react"

import Joke from "./Joke"
import jokesData from "./jokesData"

function App() {

    // some demonstration how to use map method 
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const doubled = nums.map(function(num) {
        return num * 2
    })

    console.log(doubled)

    // jokesData.map(joke => {
    //     return (
    //         <Joke question={joke.question} punchLine={joke.punchLine} />
    //     )
    // })
    //jokeComponents is array of components
    const jokeComponents = jokesData.map(joke => {
        console.log(joke)
        if( joke.id > 5){
            return <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
        }
        if( (joke.punchLine).length > 15){
            return <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
        }
    })
    // key prop is unique 
    // using key avoids the warning that react throws when using iterator
    
    
    return (
        <div>
            {/* <Joke punchLine="It’s hard to explain puns to kleptomaniacs because they always take things literally." />
            
            <Joke 
                question="What's the best thing about Switzerland?" 
                punchLine="I don't know, but the flag is a big plus!"
            />
            
            <Joke 
                question="Did you hear about the mathematician who's afraid of negative numbers?" 
                punchLine="He'll stop at nothing to avoid them!"
            />
            
            <Joke 
                question="Hear about the new restaurant called Karma?" 
                punchLine="There’s no menu: You get what you deserve."
            />
            
            <Joke 
                question="Did you hear about the actor who fell through the floorboards?" 
                punchLine="He was just going through a stage."
            />
            
            <Joke 
                question="Did you hear about the claustrophobic astronaut?" 
                punchLine="He just needed a little space."
            /> */}

            {jokeComponents}  

        </div>
    )
}

export default App

// MDN materials on Vanilla JS 

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex