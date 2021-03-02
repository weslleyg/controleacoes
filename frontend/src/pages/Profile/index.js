import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css'

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <span>Bem vindo</span>
                <Link to="/trades/new" className="button">Inserir novo trade</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <h1>Trades cadastrados</h1>

            <ul>
                <li>
                    <strong>Data</strong>
                    <p>Teste</p>

                    <strong>Hora</strong>
                    <p>11:40</p>

                    <strong>Long/Short</strong>
                    <p>Long</p>

                    <strong>Ticket</strong>
                    <p>B3SA3</p>

                    <strong>Preço de Entrada</strong>
                    <p>11,40</p>

                    <strong>Nº Ações</strong>
                    <p>100</p>

                    <strong>Stop loss</strong>
                    <p>10,40</p>

                    <strong>Take profit</strong>
                    <p>12,40</p>

                    <strong>Preço de saída</strong>
                    <p>12,20</p>

                    <strong>Custos</strong>
                    <p>2,10</p>

                    <strong>Anotações</strong>
                    <p>ahsyasuhausmalhbgufs</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Data</strong>
                    <p>Teste</p>

                    <strong>Hora</strong>
                    <p>11:40</p>

                    <strong>Long/Short</strong>
                    <p>Long</p>

                    <strong>Ticket</strong>
                    <p>B3SA3</p>

                    <strong>Preço de Entrada</strong>
                    <p>11,40</p>

                    <strong>Nº Ações</strong>
                    <p>100</p>

                    <strong>Stop loss</strong>
                    <p>10,40</p>

                    <strong>Take profit</strong>
                    <p>12,40</p>

                    <strong>Preço de saída</strong>
                    <p>12,20</p>

                    <strong>Custos</strong>
                    <p>2,10</p>

                    <strong>Anotações</strong>
                    <p>ahsyasuhausmalhbgufs</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>

        </div>
    );
}