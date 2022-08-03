import React, { useState } from "react";
import Footer from '../../components/footer/index';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../store/modules/usuario/actions';
import { useNavigate } from "react-router-dom";


function Header(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(({ usuario }) => usuario.currentUser);

    return (
        <>
            <div className="header">
                <nav>
                    <div className="user-area">
                        <div className="user-nick">{user.nick}</div>
                        <div className="user-ranking">{`#${user.ranking}`}</div>
                    </div>
                    <ul>
                        <li>
                            <a onClick={() => props.onClickPerfil()}>
                                <img src={`${user.avatar}`} alt="" />
                            </a>
                        </li>
                        <li>
                            <a onClick={() => {dispatch(logOut()); navigate('/');}}>
                                <i className="fa fa-sign-out"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

function Banner(props) {
    return(
        <>
            <div className="banner">
                <div className="banner-left">

                </div>

                <div className="banner-right">

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