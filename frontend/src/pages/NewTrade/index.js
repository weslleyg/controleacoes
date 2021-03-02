import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function NewTrade() {
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

                <form>
                    <div className="input-group">
                        <input placeholder='Data' />
                        <input placeholder='Hora' style={{ width: 100}}/>
                    </div>
                    <div className="input-group">
                        <input placeholder='Long/Short' />
                        <input placeholder='Ticket' style={{ width: 100}}/>
                    </div>
                    <input placeholder='Preço de entrada' />
                    <div className="input-group">
                        <input placeholder='Nº de ações' />
                        <input placeholder='Stop loss' style={{ width: 130}}/>
                        <input placeholder='Take Profit' style={{ width: 140}}/>
                    </div>
                    <input placeholder='Preço de saída' />
                    <input placeholder='Custos' />
                    <textarea placeholder='Anotações' />

                    <button className='button' type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    )
} 