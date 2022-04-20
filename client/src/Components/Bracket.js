import React, { useState } from "react";


const Bracket = ({ nba, user, test }) => {

    const [name, setName] = useState("");
    const [teamName, setTeamName] = useState("");
    const [confName, setConfName] = useState("");
    const [confNameTwo, setConfNameTwo] = useState("");
    const [teamNameTwo, setTeamNameTwo] = useState("");
    const [teamNameThree, setTeamNameThree] = useState("");
    const [teamNameFour, setTeamNameFour] = useState("");

    // const [showForm, setShowForm] = useState(false);
    // const hideForm = () => {
    //     setShowForm(!showForm)
    // }

    console.log(test)

    const testTwo = test?.forEach(function (x) {
        const v = x.fullName;
    })

    const options = test && test.map(o => <option key={o.fullName} value={o.fullName}> {o.fullName}</option>)
    const optionsTwo = test && test.map(o => <option key={o.fullName} value={o.fullName}> {o.fullName}</option>)
    const optionsThree = test && test.map(o => <option key={o.fullName} value={o.fullName}> {o.fullName}</option>)
    const optionsFour = test && test.map(o => <option key={o.fullName} value={o.fullName}> {o.fullName}</option>)

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

    const handleDropThree = (e) => {
        setTeamNameThree(e.target.value);
    }

    const handleDropFour = (e) => {
        setTeamNameFour(e.target.value);
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
        </div>
    );
}



export default Bracket;