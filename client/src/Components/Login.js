import React, { useState } from "react"

import { NavLink } from "react-router-dom";

function Login({ setUser, navigate }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleUsername = (e) => setUsername(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleLogin = (e) => {
        e.preventDefault();
        fetch(`/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((data) => {
                    setUser(data);

                });
            }
        });
    };

    return (
        <div >
            <div className="form">
                <form className="login-form" onSubmit={(e) => handleLogin(e)}>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        placeholder="username"
                        onChange={(e) => handleUsername(e)}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        placeholder="password"
                        onChange={(e) => handlePassword(e)}
                    />
                    <div align="center" className="feed-me">
                        <button type="submit">Login</button>
                    </div>
                    <NavLink to="/signup">
                        <div align="center" className="Signup">
                            <button> SignUp </button>
                        </div>
                    </NavLink>
                </form>
            </div>

        </div>

    )
}

export default Login;