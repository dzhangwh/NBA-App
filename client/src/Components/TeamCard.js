import React from "react";
import { useNavigate } from "react-router-dom";

function TeamCard({ fullName, confName }) {
    const navigate = useNavigate()
    // const {key values from our data, key, key} = videos}

    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(fullName)

    // }

    return (
        <li className="card">

            <h4>{ }</h4>
            <p>Team: {fullName}</p>
            <p>Conference: {confName}</p>



            {/* <button className="primary" onClick={handleSubmit} >Add</button> */}

        </li>
    );
}

export default TeamCard;