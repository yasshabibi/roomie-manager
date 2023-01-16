import React from 'react';
import { NavLink } from 'react-router-dom'

import './navbar.css';

export function Navbar(props) { 
    return (
        <nav className="navbar">
            <div className="container">
                <div className="menu-icon">
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="navlinks">
                    <ul>

                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>

                        {props.value ==  "admin" ? <>  {/* // prend la valeur de la variable value dans le fichier App.js et compare la valeur de la variable;  */}
                        <li>
                            <NavLink to="/admin_dashboard">Admin dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="/account">account</NavLink>
                        </li>

                        </> : null }


                        {props.value ==  "default" ? <>
                        <li>
                            <NavLink to="/dashboard">dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Management">Roomie Management</NavLink>
                        </li>
                        <li>
                            <NavLink to="/account">account</NavLink>
                        </li>
                        </> : null }


                        {props.value ==  "none" ? <>
                        <li>
                            <NavLink to="/Register">Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Login">Login</NavLink>
                        </li>
                        </> : null }

                    </ul>
                </div>
            </div>
        </nav>
    )
}

























