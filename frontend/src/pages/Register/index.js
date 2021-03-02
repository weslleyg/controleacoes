import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

export default function Register() {

    const [balance, setBalance] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {balance};

        const response = await api.post('register', data);

        try {
            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/')
        } catch(err) {
            alert('Erro no cadastro!')
        }
    }

    return (
        <div className='register-container'>
            <div className='content'>
                <section>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e controle os seus trades!</p>

                    <Link className='back-link' to='/'>
                        <FiArrowLeft size={16} color='#e02041' />
                        Já possuo cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder='Patrimônio'
                        onChange={e => setBalance(e.target.value)}
                        value={balance}
                    />

                    <button className='button' type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}