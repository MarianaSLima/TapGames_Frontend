import './style.css';
import React from 'react';

function RankingList() {
    return (
        <div className="ranking-area">
            <div className="ranking-header">
                ranking
            </div>
            <div className="ranking-list">

                <div className="ranking-item">

                    <div className="item-avatar">
                        <img src={"./images/icons/avatar1.png"} alt="" />
                    </div>
                    <div className="item-content">
                        <div className="item-score">789456</div>
                        <div className="item-conquistas">
                            <img src="./images/icons/1.png" alt="" />
                            <img src="./images/icons/2.png" alt="" />
                            <img src="./images/icons/3.png" alt="" />
                            <img src="./images/icons/4.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="ranking-item">

                    <div className="item-avatar">
                        <img src="./images/icons/avatar2.png" alt="" />
                    </div>
                    <div className="item-content">
                        <div className="item-score">789456</div>
                        <div className="item-conquistas">
                            <img src="./images/icons/1.png" alt="" />
                            <img src="./images/icons/3.png" alt="" />
                            <img src="./images/icons/4.png" alt="" />

                        </div>
                    </div>
                </div>

                <div className="ranking-item">

                    <div className="item-avatar">
                        <img src="./images/icons/avatar3.png" alt="" />
                    </div>
                    <div className="item-content">
                        <div className="item-score">789456</div>
                        <div className="item-conquistas">
                            <img src="./images/icons/5.png" alt="" />
                            <img src="./images/icons/6.png" alt="" />
                            <img src="./images/icons/7.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="ranking-item">

                    <div className="item-avatar">
                        <img src="./images/icons/avatar4.png" alt="" />
                    </div>
                    <div className="item-content">
                        <div className="item-score">789456</div>
                        <div className="item-conquistas">
                            <img src="./images/icons/5.png" alt="" />
                            <img src="./images/icons/6.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="ranking-item">

                    <div className="item-avatar">
                        <img src="./images/icons/avatar5.png" alt="" />
                    </div>
                    <div className="item-content">
                        <div className="item-score">789456</div>
                        <div className="item-conquistas">
                            <img src="./images/icons/8.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="ranking-item">

                    <div className="item-avatar">
                        <img src="./images/icons/avatar6.png" alt="" />
                    </div>
                    <div className="item-content">
                        <div className="item-score">789456</div>
                        <div className="item-conquistas">
                            <img src="./images/icons/9.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default RankingList;