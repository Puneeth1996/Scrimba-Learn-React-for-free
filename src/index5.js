import React from 'react';
import ReactDOM from 'react-dom';
 

// Objective: Fill in the boilerplate React code required to render an
// unordered list (<ul>) to the page. The list should contain 3 list items
// (<li>) with anything in them you want.

// HINTS:
// import the libraries you need first
// use one of the libraries to render some JSX to the page



// Scrimba learn react for free
// 4.ReactDOM and JSX 
// ReactDOM.render( WHAT TO RENDER, WHERE TO RENDER )
// ReactDOM.render(<App />, document.getElementById('root'));
// 5.ReactDOM & JSX Practice

ReactDOM.render(
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>,
    document.getElementById("root")
  );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();