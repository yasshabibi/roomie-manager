import React,{useState} from "react";
import { NavLink } from 'react-router-dom'

import './registration.css';

export function Register() {
  
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleUserNameChange = (event) => { // permet de changer la valeur de l'input
    setUserName(event.target.value);
  }

  const handleUserPasswordChange = (event) => { // permet de changer la valeur de l'input
    setUserPassword(event.target.value);
  }

  const handleSubmit = () => {
    if (userName.length === 0) {
      alert('Please enter user name');
      return;
    }
    else if (userPassword.length === 0) {
      alert('Please enter password');
      return;
    }

    else if (userName.length > 0 && userPassword.length > 0){
      alert('try to register');
    }

    alert(`User name: ${userName}, password: ${userPassword}`);
  }


  return (
    <>
    <div className="login">
      <h1>Registration</h1>
        <form>
            <div className="form-group">
                <label for="userName">User name</label>
                <input type="text" className="form-control" id="userName" value={userName} onChange={handleUserNameChange} aria-describedby="userName" placeholder="Enter user name"/>
            </div>
            <div className="form-group">
                <label for="userPassword">Password</label>
                <input type="password" className="form-control" id="userPassword" value={userPassword} onChange={handleUserPasswordChange} placeholder="Password"/>
            </div>
            <button type="submit" className="submit" onClick={handleSubmit} >Register</button>
        </form>
    </div>
    </>
  );
}

export function Login() {

  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  }

  const handleUserPasswordChange = (event) => {
    setUserPassword(event.target.value);
  }

  const handleSubmit = () => {
    if (userName.length === 0) {
      alert('Please enter user name');
      return;
    }
    else if (userPassword.length === 0) {
      alert('Please enter password');
      return;
    }

    else if (userName.length > 0 && userPassword.length > 0){
      alert('try to login');
    }

    alert(`User name: ${userName}, password: ${userPassword}`);
  }


  return (
    <>
    <div className="register">
      <h1>Login</h1>
        <form>
          <div className="form-group">
              <label for="userName">User name</label>
              <input type="text" className="form-control" id="userName" value={userName} onChange={handleUserNameChange} aria-describedby="userName" placeholder="Enter user name"/>
            </div>
            <div className="form-group">
              <label for="userPassword">Password</label>
              <input type="password" className="form-control" id="userPassword"  value={userPassword} onChange={handleUserPasswordChange} placeholder="Password"/>
            </div>
          <button type="submit" className="submit" onClick={handleSubmit}>Register</button>
        </form>
    </div>
    </>
  );
}

