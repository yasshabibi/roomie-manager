import { useEffect, useState } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './dashboard.css'

export function Dashboard() {

    const [roomieList, setRoomieList] = useState([]);
    const [email, setEmail] = useState("");
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        axios.post("/getRoomData", { userId })
            .then(response => {
                setRoomieList(response.data);
                if (response.data.length > 0) {
                    toast.success("Membres de la collocation trouvés!", {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                } else {
                    toast.warning("Aucun membre de la collocation trouvé.", {
                        position: toast.POSITION.BOTTOM_LEFT
                    });
                }
            })
            .catch(error => {
                console.error(error);
                toast.error("Une erreur s'est produite lors de la récupération des membres de la collocation.", {
                    position: toast.POSITION.BOTTOM_LEFT
                });
            });
    }, []);
    
    const handleInvite = () => {
        axios.post("/addRoomie", { userId, email })
            .then(response => {
                toast.success("Invitation envoyée avec succès!", {
                    position: toast.POSITION.BOTTOM_LEFT
                });
            })
            .catch(error => {
                console.error(error);
                toast.error("Une erreur s'est produite lors de l'envoi de l'invitation.", {
                    position: toast.POSITION.BOTTOM_LEFT
                });
            });
    }


    return (
        <>
            <ToastContainer />
            <div className="roomie">
                <h2>Membres de la collocation</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Date d'arrivée</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roomieList.map((roomie, index) => (
                            <tr key={index}>
                                <td>{roomie.lastName}</td>
                                <td>{roomie.firstName}</td>
                                <td>{roomie.joinDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h2>Ajout de membre</h2>
                <div className="invite">
                    <input type="email" value={email} onChange={e => setInviteEmail(e.target.value)} placeholder="Email de la personne à inviter" />
                    <button onClick={handleInvite}>Inviter</button>
                </div>
            </div>
        </>
    );
}