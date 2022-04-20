import React from "react";
import TeamCard from "./TeamCard";
import Profile from "./Profile";


function TeamCollection({ nba, setNba, profile }) {



    // const test = nba?.forEach(data => console.log(data))

    console.log(profile)


    return (

        < div className="video-collection">
            <ul className="cards">{nba?.map((nbaObj) => <TeamCard key={nbaObj.teamId} {...nbaObj} />)}</ul>
            <ul className="cards">{profile?.map((profileObj) => <Profile key={profileObj.id} {...profileObj} />)}</ul>
        </div >

    )
}

export default TeamCollection;