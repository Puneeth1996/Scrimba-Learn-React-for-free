import React from "react"

function ContactCard(props) {
    console.log(props)
    return (
        <div>
        <div className="contact-card">
            <img src={props.imgUrl}/>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
        {/* Here we a{props.contact.name}<re passing props which contains the contact object , that contact all the required info */}
        {/* The same we use JSON files instead of contact object .Hoper , Hopes that makes sense. */}
        <div className="contact-card">
            <img src={props.contact.imgUrl}/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
        </div>
    )
}

export default ContactCard