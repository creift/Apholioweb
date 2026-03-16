import React from "react";

export const Contact = () => {

    return(
        <div>
            <h1>
                Contact
            </h1>
            <form className="Contact">
                <label type="text">Last Name</label>
                <input type="lname" id="Lname" placeholder="Last Name"></input> 
                <br>
                </br>
                <label type="text">Name</label>
                <input type="lname" id="Lname" placeholder="Name"></input>
                <br>
                </br>
                <label type="text">Email</label>
                <input type="email" id="Lname" placeholder="Email"></input>
                <br>
                </br>
                <textarea placeholder="Tell me about your project or inquiry..."></textarea>
                <br>
                </br>
                <input type="submit" value="Contact" placeholder="contact"></input>
            </form>
        </div>
    );
}