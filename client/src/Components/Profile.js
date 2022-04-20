import React, { useEffect, useState } from "react";

function Profile({ profile }) {
    console.log(profile)
    const bracket = profile.map(o => {
        return (
            <ul>
                <h4>Teams</h4>
                <li> {o.name}</li>
                {/* <li> {o.team[1]}</li> */}
                <li> {o.teams[0].name}</li>
                <li> {o.teams[1].name}</li>

            </ul>

        )
    })
    // console.log(teams)

    return (
        <li className="profile">


            <div>My Brackets: {bracket}</div>
            {/* <p>Teams: {teams?.map(data => data.name)}</p> */}




            {/* <button className="primary" onClick={handleSubmit} >Add</button> */}

        </li>
    )

}

export default Profile;