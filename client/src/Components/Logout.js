import React from "react";

function LogOut({ navigate, setUser }) {
    const handleClick = () => {
        fetch(`/logout`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(),
        })
            .then((r) => r.json())
            .then(() => {
                setUser(null);
                navigate("/login");
            });
    };

    return (
        <div className="logout">
            <h1 align="center">LogOut</h1>
            <div align="center" className="logout">
                <button onClick={handleClick}>LogOut</button>
            </div>
        </div>
    );
}

export default LogOut;