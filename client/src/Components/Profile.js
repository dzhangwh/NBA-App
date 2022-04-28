import React, { useEffect, useState } from "react";

function Profile({ profile, user }) {
    console.log(profile)
    const bracket = profile.map(o => {
        return (
            <ul key={o.id}>
                <h4>Bracket</h4>
                <li> {o.name}</li>
                <h4>Teams</h4>
                <ol>
                    <li> {o.teams[0]?.name}</li>
                    <li> {o.teams[1]?.name}</li>
                </ol>
            </ul>
        )
    })


    return (
        <div className="profile">


            {user ? <div>
                <h2>My Profile </h2>
                {bracket}
            </div> : "Need to Login"}
            {/* <p>Teams: {teams?.map(data => data.name)}</p> */}




            {/* <button className="primary" onClick={handleSubmit} >Add</button> */}

        </div>
    )

}

export default Profile;