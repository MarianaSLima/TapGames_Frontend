import './style.css';
import React, { useEffect, useState } from 'react';
import Api from '../../services/api';
import RankingItem from '../rankingItem/RankingItem';

function RankingList() {
    const [ranking, setRanking] = useState([]);
    
    useEffect (() => {
        async function carregarRanking() {
            const { data } = await Api.get('/ranking');
            setRanking([...data.data]);
        }
        carregarRanking();
    }, []);
    
    return (
        <div className="ranking-area">
            <div className="ranking-header">
                ranking
            </div>
            <div className="ranking-list">

                {ranking.map((item, index) => {
                    return <RankingItem key={index} item={item} />
                })}

            </div>
        </div>
    );
}

export default RankingList;