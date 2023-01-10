import React from "react";
import { NavLink } from 'react-router-dom'

import './registration.css';

export function Register() {
  return (
    <>
    <div className="login">
      <h1>Registration</h1>
        <form>
            <div className="form-group">
                <label for="userName">User name</label>
                <input type="text" className="form-control" id="userName" aria-describedby="userName" placeholder="Enter user name"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="userPassword" placeholder="Password"/>
            </div>
            <button type="submit" className="submit">Register</button>
        </form>
    </div>
    </>
  );
}

export function Login() {
  return (
    <>
    <div className="register">
      <h1>Login</h1>
        <form>
          <div className="form-group">
              <label for="userName">User name</label>
              <input type="text" className="form-control" id="userName" aria-describedby="userName" placeholder="Enter user name"/>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="userPassword" placeholder="Password"/>
            </div>
          <button type="submit" className="submit">Register</button>
        </form>
    </div>
    </>
  );
}

