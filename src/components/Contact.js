import React from "react";

export const Contact = () => {

    return(
        <div>
            <h1>
                Contact
            </h1>
            <form className="Contact">
                <label type="text">Last Name</label>
                <input type="lastname" id="Lname" placeholder="Last Name"></input> 
                <br>
                </br>
                <label type="text">Name</label>
                <input type="name" id="Lname" placeholder="Name"></input>
                <br>
                </br>
                <label type="text">Email</label>
                <input type="email" id="Email" placeholder="Email"></input>
                <br>
                </br>
                <textarea placeholder="Tell me about your project or inquiry..."></textarea>
                <br>
                </br>
                <button className="Contact">Contact</button>
                
            </form>
        </div>
    );
}