import React, { useState } from "react";


const Bracket = ({ nba, user }) => {

    const [name, setName] = useState("");
    const [teamName, setTeamName] = useState("");
    const [confName, setConfName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBracket = {
            name: name,
            user_id: user.id,

            team: {
                teamName: teamName,
                confName: confName,
            }
        };

        fetch('/brackets', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newBracket)
        }).then(r => r.json())
            .then((data) => {
                console.log(data);
                if (data.error) {
                    alert(`${data.error}`)
                }
                else {
                    alert(`created ${data.name}`)
                }
            })
        setName('')
        setConfName('')
        setTeamName('')
    }

    return (
        <div>
            <h2>Create a Bracket First</h2>
            <form className="bracket" onSubmit={handleSubmit}>
                <label>Bracket Name: </label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Team Name: </label>
                <input
                    type="text"
                    required
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                />
                <label>Conf Name: </label>
                <input
                    type="text"
                    required
                    value={confName}
                    onChange={(e) => setConfName(e.target.value)}
                />
                <button>Create Bracket</button>
            </form>
        </div>
    );
}



export default Bracket;