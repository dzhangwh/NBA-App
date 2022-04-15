import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Signup({ setUser, navigate }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleUsername = (e) => setUsername(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const handlePasswordConfirm = (e) => setPasswordConfirm(e.target.value)
    const handleFirstname = (e) => setFirstname(e.target.value)
    const handleLastname = (e) => setLastname(e.target.value)


    const handleSubmit = (e) => {
        e.preventDefault()
        if (password == passwordConfirm) {
            const newUser = { first_name: firstname, last_name: lastname, username: username, password: passwordConfirm }
            fetch(`/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            })
                .then((r) => r.json())
                .then(setUser)
            setSubmitted(true)
        };

    }

    return (

        <div>
            <h1 style={{ align: "center" }} >Signup</h1>
            <div className="login">
                <form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
                    <label>Firstname</label>
                    <input
                        type="text"
                        value={firstname}
                        placeholder="Firstname"
                        onChange={handleFirstname}

                    />
                    <br />
                    <label> Lastname</label>
                    <input
                        type="lastname"
                        value={lastname}
                        placeholder="Lastname"
                        onChange={handleLastname}

                    />
                    <br />

                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        placeholder="Username"
                        onChange={handleUsername}

                    />
                    <br />
                    <label>Password</label>
                    <input
                        type="text"
                        value={password}
                        placeholder="Password"
                        onChange={handlePassword}

                    />
                    <br />
                    <label>Confirm Password</label>
                    <input
                        type="text"
                        value={passwordConfirm}
                        placeholder="Confirm Password"
                        onChange={handlePasswordConfirm}

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