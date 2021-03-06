import React, { useState } from "react";


const Bracket = ({ nba, user, test, setProfile, profile }) => {

    const [name, setName] = useState("");
    const [teamName, setTeamName] = useState("");
    const [confName, setConfName] = useState("");
    const [confNameTwo, setConfNameTwo] = useState("");
    const [teamNameTwo, setTeamNameTwo] = useState("");



    const options = test && test.map(o => <option key={o.fullName} value={o.fullName}> {o.fullName}</option>)
    const optionsTwo = test && test.map(o => <option key={o.fullName} value={o.fullName}> {o.fullName}</option>)

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBracket = {
            name: name,
            user_id: user.id,

            teams: [{
                teamName: teamName,
                confName: confName,
            },
            {
                teamName: teamNameTwo,
                confName: confNameTwo,
            }
            ]
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
                    setProfile([...profile, data])
                    alert(`created ${data.name}`)
                }
            })
        setName('')
        setConfName('')
        setTeamName('')
    }

    const handleDrop = (e) => {
        setTeamName(e.target.value);
    }

    const handleDropTwo = (e) => {
        setTeamNameTwo(e.target.value);
    }



    return (
        <div>
            <h2>Create your Standing/Bracket</h2>
            <form className="bracket" onSubmit={handleSubmit}>
                <label>Standing/Bracket Name: </label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Team Name One: </label>
                <input
                    type="text"
                    required
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                />
                <select
                    className="drop-form"
                    value={''}
                    onChange={handleDrop}
                >
                    <option key={0} value={0}>
                        select a team
                    </option>
                    {options}
                    ))
                </select>

                <label>Team Name Two: </label>
                <input
                    type="text"
                    required
                    value={teamNameTwo}
                    onChange={(e) => setTeamNameTwo(e.target.value)}
                />
                <select
                    className="drop-form"
                    value={''}
                    onChange={handleDropTwo}
                >
                    <option key={0} value={0}>
                        select a team
                    </option>

                    {optionsTwo}

                    ))
                </select>

                <label>Conf Name: </label>
                <input
                    type="text"
                    required
                    value={confName}
                    onChange={(e) => setConfName(e.target.value)}
                />
                <button>Create Bracket</button>
            </form>
            <div>
                {teamName}
                {teamNameTwo}
            </div>

        </div>
    );
}



export default Bracket;