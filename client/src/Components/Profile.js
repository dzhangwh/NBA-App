import React, { useEffect, useState } from "react";

function Profile({ profile, user }) {
    console.log(profile)
    const bracket = profile.map(o => {
        return (
            <ul key={o.id}>
                <h4>Teams</h4>
                <li> {o.name}</li>
                {/* <li> {o.team[1]}</li> */}
                <li> {o.teams[0]?.name}</li>
                <li> {o.teams[1]?.name}</li>

            </ul>
        )
    })


    return (
        <div className="profile">


            {user ? <div>My Brackets: {bracket}</div> : "Need to Login"}
            {/* <p>Teams: {teams?.map(data => data.name)}</p> */}




            {/* <button className="primary" onClick={handleSubmit} >Add</button> */}

        </div>
    )

}

export default Profile;