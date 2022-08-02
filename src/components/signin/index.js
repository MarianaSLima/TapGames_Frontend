import React from "react";
import './styles.css';

function SignIn() {
    return (
        <div className="dropdown-background">
            <div class="dropdown-content" id="loginDropdown">
                <div className="login-area">
                    <div className="form-area">
                        <form className="form-content" action="" method="post">
                            <div className="form-top">
                                <div className="input-area">
                                    <label for="email">E-mail</label>
                                    <input type="email" name="email" id="email" />
                                </div>
                                <div className="input-area">
                                    <label for="password">Senha</label>
                                    <input type="password" name="password" id="password" />
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
        </div>
    );
}

export default SignIn;


