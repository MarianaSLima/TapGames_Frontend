import './style.css';
import React from 'react';

function Description() {
    return (
        <div className="description-area">
            <div className="description-titulo">
                Tap Game
            </div>
            <div className="description-content">
                <p>Treine seu reflexos nesse incrível jogo, estilo clique, coletando o maior número de itens
                    possíveis e evitando clicar nas bombas e caveiras.</p>
                <div className="description-btn">
                    <a className="btn" target="_blank">DOWNLOAD</a>
                </div>
            </div>
        </div>

    );
}

export default Description;