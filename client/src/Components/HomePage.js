import React from "react";
import { NavLink } from "react-router-dom";

function HomePage({ user, nba }) {

    return (

        <div align="center" className="homepage">
            <h1> Welcome to NBA Stats App </h1>
            {
                !user && <>
                    <div> Login/signup is required for teams/brackets</div>
                    <div className='signup-button'>
                        <NavLink to='/signup'>
                            <button>Signup</button>
                        </NavLink>
                    </div>

                    <div className='login-button'>
                        <NavLink to='/login'>
                            <button>Login</button>
                        </NavLink>
                    </div>
                </>
            }
        </div>
    )
}

export default HomePage;