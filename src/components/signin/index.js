import React, { useEffect, useState } from "react";
import './styles.css';
import { useDispatch, useSelector } from "react-redux";
import { loginStart } from "../../store/modules/usuario/actions";
import { useNavigate } from "react-router-dom";

function SignIn() {

    const auth = useSelector(({usuario}) => usuario);
    let navigate = useNavigate();

    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginStart(credentials));
    }

    useEffect(() => {
        if(auth.currentUser) {
            navigate('/painel');
        }
    }, [auth]);
    
    return (
            <div class="dropdown-content" id="loginDropdown">
                <div className="login-area">
                    <div className="form-area">
                        <form className="form-content" onSubmit={handleSubmit} method="post">
                            <div className="form-top">
                                <div className="input-area">
                                    <label for="email">E-mail</label>
                                    <input type="email" name="email" id="email" value={credentials.email} onChange={handleChange}/>
                                </div>
                                <div className="input-area">
                                    <label for="password">Senha</label>
                                    <input type="password" name="password" id="password" value={credentials.password} onChange={handleChange}/>
                                </div>
                            </div>

                            <div className="form-bottom">
                                <div className="form-text">
                                    <a href="#" target="_blank">Esqueceu a senha?</a>
                                </div>

                                <div className="form-btn-area">
                                    <button className="btn" type="submit">Entrar</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
    );
}

export default SignIn;


