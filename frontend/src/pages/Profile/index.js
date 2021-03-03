import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

export default function Profile() {
    const [trades, setTrades] = useState([]);

    const userId = localStorage.getItem('userId');
    const balance = localStorage.getItem('balance');

    useEffect(() => {
        api.get('trades', {
            headers: {
                Authorization: userId,
            }
        }).then(response => {
            setTrades(response.data);
        })
    }, [userId]);

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
                {trades.map(trade => (
                    <li>
                        <strong>Data</strong>
                        <p>{trade.date}</p>

                        <strong>Hora</strong>
                        <p>{trade.time}</p>

                        <strong>Long/Short</strong>
                        <p>{trade.type}</p>

                        <strong>Ticket</strong>
                        <p>{trade.ticket}</p>

                        <strong>Preço de Entrada</strong>
                        <p>{trade.entryPrice}</p>

                        <strong>Nº Ações</strong>
                        <p>{trade.nShares}</p>

                        <strong>Stop loss</strong>
                        <p>{trade.stopPrice}</p>

                        <strong>Take profit</strong>
                        <p>{trade.takePrice}</p>

                        <strong>Preço de saída</strong>
                        <p>{trade.exitPrice}</p>

                        <strong>Custos</strong>
                        <p>{trade.tradeCosts}</p>

                        <strong>Anotações</strong>
                        <p>{trade.tradeNotes}</p>

                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    );
}