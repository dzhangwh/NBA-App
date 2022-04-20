import React from "react";
import TeamCard from "./TeamCard";


function TeamCollection({ nba, setNba }) {



    return (

        < div className="video-collection">
            <ul className="cards">{nba?.map((nbaObj) => <TeamCard key={nbaObj.teamId} {...nbaObj} />)}</ul>
        </div >

    )
}

export default TeamCollection;