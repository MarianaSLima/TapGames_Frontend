import React from "react";
import './styles.css';

function Signup(props) {
    return (
        <div className="signup-area">
            <div class="login-area">
                <div class="form-area">
                    <form action="" method="post">
                        <div class="form-content">
                            <div class="input-area">
                                <label for="nome">Nome</label>
                                <input type="text" name="nome" id="nome" />
                            </div>

                            <div class="input-area">
                                <label for="nick">Nick</label>
                                <input type="text" name="nick" id="nick" />
                            </div>

                            <div class="input-area">
                                <label for="email">E-mail</label>
                                <input type="email" name="email" id="email" />
                            </div>
                            <div class="input-area">
                                <label for="password">Senha</label>
                                <input type="password" name="password" id="password" />
                            </div>

                        </div>
                        <div class="form-text">
                        </div>
                        <div class="form-btn-area">
                            <button class="btn" type="submit">CADASTRAR</button>
                            <button class="btn" type="button" onClick={() => props.onClickCancel()}>CANCELAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Signup;


