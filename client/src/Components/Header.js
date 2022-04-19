import React from 'react'
import { NavLink } from 'react-router-dom'

function Header({ user }) {
    return (
        <div className='header'>
            <NavLink to='/'>
                <button> Home </button>
            </NavLink>

            <NavLink to='/login'>
                <button> Login </button>
            </NavLink>

            <NavLink to='/signup'>
                <button> Signup </button>
            </NavLink>

            <NavLink to='/profile'>
                <button>Profile</button>
            </NavLink>

            <NavLink to='/teams'>
                <button>Teams</button>
            </NavLink>

            <NavLink to='/logout'>
                <button>Logout</button>
            </NavLink>

        </div>
    )
}

export default Header;