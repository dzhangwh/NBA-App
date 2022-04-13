import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function HomePage({ user, nba }) {



    return (

        <div align="center" className="homepage">
            <h1> Welcome to NBA Stats App </h1>
            <p>
                Login/signup is required for custom teams/stats
            </p>
            {
                !user && (
                    <div className="signup-container">
                        <NavLink to="/signup">
                            <button> SignUp </button>
                        </NavLink>
                        <NavLink to="/login">
                            <button> Login </button>
                        </NavLink>
                    </div>

                )
            }
        </div>


    )
}

export default HomePage;