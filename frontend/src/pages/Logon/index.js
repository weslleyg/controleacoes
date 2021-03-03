import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./styles.css";
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import tradeImg from '../../assets/investiment.png';

export default function Logon() {

    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('/session', { id });

            localStorage.setItem('userId', id);
            localStorage.setItem('balance', response.data.balance);
            history.push('/profile');
        } catch(err) {
            alert('Falha no login!');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Sua ID"
                        onChange={e => setId(e.target.value)}
                        value={id}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className='back-link' to='/register'>
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={tradeImg} alt="Trading" />
        </div>
    );
};