import React from "react";
import './style.css';

function RankingItem(props) {

    return (
        <div className="ranking-item">

            <div className="item-avatar">
                <img src={`${props.item.avatar}`} alt="" />
            </div>
            <div className="item-content">
                <div className="item-score">{props.item.score}</div>
                <div className="item-conquistas">
                </div>
            </div>
        </div>
    );
}

export default RankingItem;