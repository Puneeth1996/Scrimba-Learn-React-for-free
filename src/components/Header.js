import React from "react"

function Header() {
    return (    <div>
                    {/* thins is basic header intially  */}
                    <header>This is the <strong>basic</strong> header</header>
                    {/* This is the header after adding some styling to the individual elements of react   */}
                    {/* App12 = Styling in React */}
                    <header className="navbar">This is the header</header>
                </div>

    )
}

export default Header