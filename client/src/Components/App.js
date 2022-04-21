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
import Bracket from "./Bracket";
import TeamCard from "./TeamCard";

function App() {

    const [nba, setNba] = useState([]);
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState([])
    const navigate = useNavigate()


    console.log('profile', profile)

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

    useEffect(() => {
        fetch("/brackets")
            .then((r) => r.json())
            .then(data => setProfile(data))
    }, [])

    console.log(user)

    const test = nba?.league?.vegas

    console.log(test)

    {/* <ul className="cards">{profile?.map((profileObj) => <Profile key={profileObj.id} {...profileObj} />)}</ul> */ }

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
                    element={<Profile profile={profile} />}
                />

                <Route path="/teams"
                    element={<TeamPage nba={nba} setNba={setNba} user={user} profile={profile} setProfile={setProfile} />}
                />
                <Route path="/logout"
                    element={<LogOut setUser={setUser} navigate={navigate} />}
                />
                <Route path="/bracket"
                    element={<Bracket nba={nba} user={user} setUser={setUser} navigate={navigate} test={test} profile={profile} setProfile={setProfile} />}
                />

            </Routes>

        </div>
    )

}

export default App;