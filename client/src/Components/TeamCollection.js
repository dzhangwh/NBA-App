import React from "react";
import TeamCard from "./TeamCard";



function TeamCollection({ nba, setNba, profile }) {



    // const test = nba?.forEach(data => console.log(data))

    console.log(profile)


    return (

        < div className="video-collection">
            <ul className="cards">{nba?.map((nbaObj) => <TeamCard key={nbaObj.teamId} {...nbaObj} />)}</ul>

        </div >

    )
}

export default TeamCollection;