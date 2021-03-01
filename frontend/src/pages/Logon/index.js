import React from 'react';
import "./styles.css";
import { FiLogIn } from 'react-icons/fi';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>

                    <a href='/register'>
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </a>
                </form>
            </section>
        </div>
    );
};