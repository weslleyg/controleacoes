import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

export default function NewTrade() {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [type, setType] = useState('');
    const [ticket, setTicket] = useState('');
    const [entryPrice, setEntryPrice] = useState('');
    const [nShares, setNShares] = useState('');
    const [stopPrice, setStopPrice] = useState('');
    const [takePrice, setTakePrice] = useState('');
    const [exitPrice, setExitPrice] = useState('');
    const [tradeCosts, setTradeCosts] = useState('');
    const [tradeNotes, setTradeNotes] = useState('');

    const userId = localStorage.getItem('userId');

    const history = useHistory();

    async function handleNewTrade(e) {
        e.preventDefault();

        const data = {
            date,
            time,
            type,
            ticket,
            entryPrice,
            nShares,
            stopPrice,
            takePrice,
            exitPrice,
            tradeCosts,
            tradeNotes
        };

        try {
            await api.post('trades', data, {
                headers: {
                    Authorization: userId,
                }
            });

            history.push('/profile');
        } catch(err) {
            alert('Erro ao inserir novo trade');
        }
    }

    return (
        <div className='new-trade-container'>
            <div className='content'>
                <section>
                    <h1>Inserir novo trade</h1>
                    <p>Descreva detalhadamente a operação!</p>

                    <Link className='back-link' to='/profile'>
                        <FiArrowLeft size={16} color='#e02041' />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewTrade}>
                    <div className="input-group">
                        <input 
                            placeholder='Data'
                            onChange={e => setDate(e.target.value)}
                            value={date}
                        />
                        <input 
                            placeholder='Hora'
                            style={{ width: 100}}
                            onChange={e => setTime(e.target.value)}
                            value={time}
                        />
                    </div>
                    <div className="input-group">
                        <input 
                            placeholder='Long/Short'
                            onChange={e => setType(e.target.value)}
                            value={type}
                        />
                        <input 
                            placeholder='Ticket'
                            style={{ width: 100}}
                            onChange={e => setTicket(e.target.value)}
                            value={ticket}
                        />
                    </div>
                    <input 
                        placeholder='Preço de entrada'
                        onChange={e => setEntryPrice(e.target.value)}
                        value={entryPrice}
                    />
                    <div className="input-group">
                        <input 
                            placeholder='Nº de ações'
                            onChange={e => setNShares(e.target.value)}
                            value={nShares}
                        />
                        <input 
                            placeholder='Stop loss'
                            style={{ width: 130}}
                            onChange={e => setStopPrice(e.target.value)}
                            value={stopPrice}
                        />
                        <input 
                            placeholder='Take Profit'
                            style={{ width: 140}}
                            onChange={e => setTakePrice(e.target.value)}
                            value={takePrice}
                        />
                    </div>
                    <input 
                        placeholder='Preço de saída'
                        onChange={e => setExitPrice(e.target.value)}
                        value={exitPrice}
                    />
                    <input 
                        placeholder='Custos'
                        onChange={e => setTradeCosts(e.target.value)}
                        value={tradeCosts}
                    />
                    <textarea 
                        placeholder='Anotações'
                        onChange={e => setTradeNotes(e.target.value)}
                        value={tradeNotes}
                    />

                    <button className='button' type='submit'>Inserir</button>
                </form>
            </div>
        </div>
    )
} 