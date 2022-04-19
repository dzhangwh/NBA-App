import React, { useEffect, useState } from "react";
import TeamCollection from "./TeamCollection";

function TeamPage(nba, setNba, user) {


    /*
    {user ? <TeamCollection nba={nba} /> : <h1>please log in</h1>} 
    */


    const test = nba?.nba?.league?.vegas

    console.log(test)

    return (
        <div>

            <h1 align="center">NBA Teams</h1>
            <div className="team">
                <TeamCollection nba={test} />

            </div>

        </div>

    )
}

export default TeamPage;