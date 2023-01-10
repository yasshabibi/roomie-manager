import {BrowserRouter,Route, Routes,Switch,Link} from 'react-router-dom';
import React from 'react';

import { Navbar } from './components/navigationBar/navbar.jsx';
import { Login } from './components/registration/registration.jsx';
import { Register } from './components/registration/registration.jsx';
// import { Dashboard } from './components/dashboard/dashboard.jsx';
import { Management } from './components/management/management.jsx';


function App (){

    return (
        <>
        <BrowserRouter>
            <Navbar />
            <Routes >
                <Route exact path="/" element={<><h1>home</h1></> }/>
                <Route exact path="/home" element={<><h1>home</h1></> }/>
                <Route exact path="/management" element={<><Management/></> }/>
                <Route exact path="/login" element={<><Login/></> }/>
                <Route exact path="/register" element={<><Register/></> }/>
                <Route exact path="/dashboard" element={<><h1>dashboard</h1></> }/>
            </Routes >
        </BrowserRouter>
        </>
    )

}

export default App;