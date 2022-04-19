import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "../App.css";
import HomePage from "./HomePage";
import Signup from "./Signup";
import Header from "./Header";
import Login from "./Login";
import Profile from "./Profile"
import TeamPage from "./TeamPage"
import LogOut from "./Logout";


function App() {

    const [nba, setNba] = useState([]);
    const [user, setUser] = useState(null);
    const navigate = useNavigate()


    useEffect(() => {
        fetch("/me").then((r) => {
            if (r.ok) {
                r.json().then((data) => setUser(data));
            }
        });
    }, []);


    useEffect(() => {
        fetch("/fetch")
            .then((r) => r.json())
            .then(data => setNba(data.key))

    }, [])

    console.log(user)

    console.log(nba)

    return (
        <div className="App">
            {<Header />}
            <Routes>
                <Route path="/"
                    element={<HomePage nba={nba} user={user} />}
                />
                <Route path="/signup"
                    element={<Signup setUser={setUser} navigate={navigate} />}
                />

                <Route path="/login"
                    element={<Login setUser={setUser} />}
                />
                <Route path="/profile"
                    element={<Profile setUser={setUser} />}
                />

                <Route path="/teams"
                    element={<TeamPage nba={nba} setNba={setNba} user={user} />}
                />
                <Route path="/logout"
                    element={<LogOut setUser={setUser} navigate={navigate} />}
                />

            </Routes>

        </div>
    )

}

export default App;