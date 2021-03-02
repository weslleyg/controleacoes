import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";
import { FiLogIn } from 'react-icons/fi';

import tradeImg from '../../assets/investiment.png';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID" />
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