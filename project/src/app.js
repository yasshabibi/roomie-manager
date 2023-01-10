import {BrowserRouter,Route, Routes,Switch,Link} from 'react-router-dom';
import React from 'react';



function App (){

    return (
        <>
        <BrowserRouter>
            <Routes >
                <Route exact path="/" element={<></> }/>
                <Route exact path="/home" element={<></> }/>
                <Route exact path="/login" element={<></> }/>
                <Route exact path="/register" element={<></> }/>
                <Route exact path="/dashboard" element={<></> }/>
            </Routes >
        </BrowserRouter>
        </>
    )

}

export default App;