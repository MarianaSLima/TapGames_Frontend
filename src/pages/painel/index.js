import React, { useState } from "react";
import Footer from '../../components/footer/index';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../store/modules/usuario/actions';
import RankingList from '../../components/rankingList/index';
import Signup from '../../components/signup/index';
import MeuRanking from "../../components/meuRanking/meuRanking";

function Header(props) {
    const dispatch = useDispatch();
    const user = useSelector(({ usuario }) => usuario.currentUser);

    return (
        <>
            <header>
                <nav>
                    <div className="user-area">
                        <div className="user-nick text">{user.nick}</div>
                        <div className="user-ranking text">{`#${user.ranking}`}</div>
                    </div>
                    <ul>
                        <li>
                            <a onClick={() => props.onClickPerfil()}>
                                <img className="foto-user" src={`${user.avatar}`} alt="" />
                            </a>
                        </li>
                        <li>
                            <a className="btn" onClick={() => dispatch(logOut())}>
                                <i className="fa fa-sign-out"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

function Banner(props) {
    return(
        <>
            <div className="banner-painel painel">
                <div className="banner-painel-left">
                    <RankingList />
                </div>

                <div className="banner-painel-right">
                    {props.openPerfil === true ?
                        <Signup onClickCancel={props.onClickCancel}/>
                        :
                        <MeuRanking />
                    }
                </div> 
            </div>
        </>
    );
}

function Painel() {
    const [openPerfil, setOpenPerfil] = useState(false);

    function handlePerfil() {
        setOpenPerfil(!openPerfil);
    }

    return(
        <>
           <Header onClickPerfil={handlePerfil} />
           <Banner openPerfil={openPerfil} onClickCancel={handlePerfil}/>
           <Footer />
        </>
    );
}

export default Painel;