import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "../App.css";
import HomePage from "./HomePage";
import Signup from "./Signup";
import Header from "./Header";
import Login from "./Login";
import Profile from "./Profile"
import PlayerPage from "./PlayerPage"

function App() {


    const [nba, setNba] = useState([]);
    const [user, setUser] = useState(null);
    const navigate = useNavigate()


    /* useEffect(() => {
        fetch("/me").then((r) => {
            if (r.ok) {
                r.json().then((data) => setUser(data));
            }
        });
    }, []);

    */


    useEffect(() => {
        fetch("http://data.nba.net/prod/v2/2021/teams.json")
            .then((r) => r.json())
            .then(console.log)
            .then(data => setNba(data))
    }, [])

    console.log(setNba.league)


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

                <Route path="/players"
                    element={<PlayerPage nba={nba} setNba={setNba} user={user} />}
                />
            </Routes>

        </div>
    )

}

export default App;