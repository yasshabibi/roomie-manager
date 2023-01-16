import {BrowserRouter,Route, Routes,Navigate,Switch,Link} from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { Navbar } from './components/navigationBar/navbar.jsx';
import { Login } from './components/registration/registration.jsx';
import { Register } from './components/registration/registration.jsx';
import { Dashboard } from './components/dashboard/dashboard.jsx';
import { Management } from './components/management/management.jsx';
import { Account } from './components/account/account.jsx';


function App (){

    const [status, setStatus] = useState('none');

    useEffect(() => {
    //   const userId = localStorage.getItem('userId');
    //   if (!userId) {
    //     return;
    //   }
  
    //   axios.post('/checkToken', { userId })
    //     .then(response => {
    //       const { userStatus } = response.data;
    //       if (userStatus === 0x01) {
    //         setStatus('default');
    //       } else if (userStatus === 0x10) {
    //         setStatus('admin');
    //       }
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
        setStatus('default')
        
    }, []);
    return (
        <>
        <BrowserRouter>



            <Navbar value={status} /> {/* valeurs possibles : none, default, admin  */}

            <Routes >

                <Route exact path="/" element={<><h1>home</h1></> }/>
                <Route exact path="/home" element={<><h1>home</h1></> }/>

                {status === 'admin' && <Route exact path="/admin_dashboard" element={<><h1>Admindashboard</h1></> }/>}
                {status === 'admin' && <Route exact path="/account" element={<><Account/></> }/>}

                {status === 'none' && <Route exact path="/login" element={<><Login/></> }/>}
                {status === 'none' && <Route exact path="/register" element={<><Register/></> }/>}

                {status === 'default' && <Route exact path="/dashboard" element={<><Dashboard/></> }/>}
                {status === 'default' && <Route exact path="/management" element={<><Management/></> }/>}
                {status === 'default' && <Route exact path="/account" element={<><Account/></>}/>}

                <Route path="*" element={< Navigate to={{pathname: '/'}} />} />

            </Routes >
            
        </BrowserRouter>
        </>
    )

}

export default App;