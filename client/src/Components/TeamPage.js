import React, { useEffect, useState } from "react";
import TeamCollection from "./TeamCollection";

function TeamPage({ nba, setNba, user, profile, setProfile }) {


    /*
    {user ? <TeamCollection nba={nba} /> : <h1>please log in</h1>} 
    */

    const test = nba?.league?.vegas

    return (
        <div>

            <h1 align="center">NBA Teams</h1>
            <div className="teams">
                {user ? <TeamCollection nba={test} profile={profile} /> : <h1>Please log in</h1>}


            </div>

        </div>

    )
}

export default TeamPage;