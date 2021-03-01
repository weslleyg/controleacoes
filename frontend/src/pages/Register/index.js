import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function Register() {
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

                <form>
                    <input placeholder='Patrimônio' />

                    <button className='button' type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}