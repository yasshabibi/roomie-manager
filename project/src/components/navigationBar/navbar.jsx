import React from 'react';
import { NavLink } from 'react-router-dom'

import './navbar.css';

export function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="menu-icon">
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div className="navlinks">
                    <ul>
                        <li>
                        <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                        <NavLink to="/dashboard">dashboard</NavLink>
                        </li>
                        <li>
                        <NavLink to="/Management">Management</NavLink>
                        </li>
                        <li>
                        <NavLink to="/Register">Register</NavLink>
                        </li>
                        <li>
                        <NavLink to="/Login">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

























