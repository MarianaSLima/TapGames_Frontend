import './style.css';
import React from 'react';
import { useSelector } from 'react-redux';


function MeuRanking() {
    const user = useSelector(({ usuario }) => usuario.currentUser);
    return(
        <div className='ranking-list'>
            <div className='meuranking-header'>
                <div className='meuranking-img'>
                    <img src={`${user.avatar}`}/>
                </div>
                <div className='meuranking-header-content'>
                    <div className='header-content-nick'>
                        {user.nick}
                    </div>
                    <div className='ranking-content-ranking text'>
                        {`#${user.ranking}`}
                    </div>
                </div>
            </div>
            <div className='meuranking-content'>
                <div className='meuranking-score text'>
                    {user.score}
                </div>
            </div>
        </div>
    );
}

export default MeuRanking;