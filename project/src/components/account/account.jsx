import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';

import './account.css'

export function Account() {
  const [user, setUser] = useState({});
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    axios.post('/getUserInfo', { userId })
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        toast.error("Une erreur s'est produite lors de la récupération des informations de l'utilisateur.", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    toast.success("Déconnexion réussie !", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    window.location.reload();
  }

  return (
    <>
        <ToastContainer />
    <div className="account-card">
      <h2>Mon compte</h2>
      <div className='accountData'>
        <p>Nom : {user.lastName}</p>
        <p>Prénom : {user.firstName}</p>
        <p>Date de création : {user.creationDate}</p>
        <p>Email : {user.email}</p>
        <p>Rang : {user.rank}</p>
        <p>Nombre de colocataires : {user.roommieNumber}</p>
        <p>Nombre de colocations actives : {user.activeColocNumber}</p>
      </div>
      <div className='logoutndata'>
        <button onClick={handleLogout}>Me déconnecter</button>
        <button>Modifier mes données</button>
      </div>
    </div>
    </>
  );
}