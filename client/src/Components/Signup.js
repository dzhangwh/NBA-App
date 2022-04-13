import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Signup({ setUser, navigate }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    const handleUsername = (e) => setUsername(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const handlePasswordConfirm = (e) => setPasswordConfirm(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password == passwordConfirm) {
            const newUser = { first_name: firstname, last_name: lastname, username: username, password: passwordConfirm }
            fetch(`/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            })
                .then((r) => r.json())
                .then(setUser)
        };

    }

    return (

        <div>
            <h1 style={{ align: "center" }} >Signup</h1>
            <div className="login">
                <form className="signup-form" >
                    <label>Firstname</label>
                    <input
                        type="text"
                        value
                        placeholder="Firstname"

                    />
                    <br />
                    <label> Lastname</label>
                    <input
                        type="lastname"
                        value
                        placeholder="Lastname"

                    />
                    <br />

                    <label>Username</label>
                    <input
                        type="text"
                        value
                        placeholder="Username"

                    />
                    <br />
                    <label>Password</label>
                    <input
                        type="text"
                        value
                        placeholder="Password"

                    />
                    <br />
                    <label>Confirm Password</label>
                    <input
                        type="text"
                        value
                        placeholder="Confirm Password"

                    />
                    <div style={{ align: "center" }} className="submit-signup">
                        <button type="submit"> Signup </button>
                    </div>



                </form>
            </div>

        </div>



    )
}

export default Signup;