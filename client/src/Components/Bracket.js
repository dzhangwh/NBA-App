import React, { useState } from "react";


const Bracket = ({ }) => {

    const [addTeam, setAddTeam] = useState("");
    const [name, setName] = useState("");
    const [confName, setConfName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTeam = {
            name: name,
            confName: confName,
        };

        fetch('/teams', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTeam)
        }).then(() => {
            console.log('test');
        })
    }


    return (
        <div className="add">
            <h2>Add a team</h2>
            <form onSubmit={handleSubmit}>
                <label>Team Name: </label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Conference: </label>
                <input
                    required
                    value={confName}
                    onChange={(e) => setConfName(e.target.value)}
                />

                <button>Add Team</button>
            </form>
        </div>
    );
}



export default Bracket;