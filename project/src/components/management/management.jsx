import { useEffect, useState } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './management.css'

export function Management() {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [data, setData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [belowMoy, setBelowMoy] = useState([]);

    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

      useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (!userId || !startDate || !endDate) {
            toast.error("Utilisateur non trouvé.", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
          return;
        }
    
        axios.post('/getSpent', { userId, startDate, endDate })
          .then(response => {
            setData(response.data);
            const userData = {};
            let spentTotal = 0;
            let userCount = 0;
            data.forEach(item => {
              spentTotal += item.amount;
              if (!userData[item.firstName]) {
                userData[item.firstName] = {
                  amount: item.amount,
                  count: 1
                };
                userCount++;
              } else {
                userData[item.firstName].amount += item.amount;
                userData[item.firstName].count++;
              }
            });
            const spentMoy = spentTotal / userCount;
            Object.keys(userData).forEach(key => {
              userData[key].userMoy = userData[key].amount / userData[key].count;
              userData[key].diff = spentMoy - userData[key].userMoy;
              if (userData[key].diff > 0) {
                belowMoy.push({
                  name: key,
                  diff: userData[key].diff,
                });
            }
          });
          setUserData(userData);
          toast.success("Données récupéré avec succès !", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch(error => {
            toast.error("Une erreur s'est produite.", {
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

        

    }, [startDate, endDate]);

    const handleAddSpent = () => {
        axios.post('/SpentAdd', { userId, amount, date, description })
            .then(response => {
                toast.success("La dépense a été ajoutée avec succès!", {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .catch(error => {
                toast.error("Une erreur s'est produite lors de l'ajout de la dépense.", {
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
    }
    
    
    return (
      <div className='management'>
        <ToastContainer />
        <h2>Gestion des dépenses - choisissez une date de début et de fin</h2>
        <div>
          <label>
            Date de début:
            <input type="date" onChange={(e) => setStartDate(e.target.value)} />
          </label>
          <label>
            Date de fin:
            <input type="date" onChange={(e) => setEndDate(e.target.value)} />
          </label>
          <button onClick={() => setData([])}>Obtenir la moyenne des dépenses</button>
        </div>
    <div className='tableContainer'>
        <h3>Liste de dépenses</h3>
        <table>
          <thead>
            <tr>
              <th>Prix</th>
              <th>Nom Prénom</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.sort((a, b) => new Date(b.date) - new Date(a.date)).map((item, index) => (
              <tr key={index}>
                <td>{item.amount}</td>
                <td>{item.firstName} {item.lastName}</td>
                <td>{item.description}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Moyenne des dépenses</h3>
        <table>
          <thead>
            <tr>
              <th>Nom Prénom</th>
              <th>Total</th>
              <th>Moyenne</th>
              <th>Différence</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(userData).map((name, index) => (
              <tr key={index}>
                <td>{name}</td>
                <td>{userData[name].amount}</td>
                <td>{userData[name].userMoy}</td>
                <td>{userData[name].diff}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Personnes qui dépensent en dessous de la moyenne + Différence à payer</h3>
        <table>
          <thead>
            <tr>
              <th>Nom Prénom</th>
              <th>Différence</th>
            </tr>
              </thead>
              <tbody>
                {belowMoy.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3>Ajouter un achat</h3>
            <div className="add-spent-form">
                <input type="text" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Montant de la dépense" />
                <input type="date" value={date} onChange={e => setDate(e.target.value)} placeholder="Date de la dépense" />
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description de la dépense" />
                <button onClick={handleAddSpent}>Ajouter une dépense</button>
            </div>
        </div>
          </div>
        );

}
