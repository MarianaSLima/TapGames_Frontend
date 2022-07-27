import { bindActionCreators } from "redux";
//não tem nada programado aqui ainda
import rootReReducers from '../rootReducers';

//credentials login e senha
export const loginStart = (credentials) => ({
    type: '@usuario/LOGIN_START',
    credentials,
});

//objeto usuário
export const loginSuccess = (user) => ({
    type: '@usuario/LOGIN_SUCCESS',
    user,
});

//erro
export const loginFailure = (error) => ({
    type: '@usuario/LOGIN_FAILURE',
    error,
});


export const registerStart = (credentials) => ({
    type: '@usuario/REGISTER_START',
    credentials,
});

//objeto usuário
export const registerSuccess = (user) => ({
    type: '@usuario/REGISTER_SUCCESS',
    user,
});

//erro
export const registerFailure = (error) => ({
    type: '@usuario/REGISTER_FAILURE',
    error,
});

export const logOut = () => ({
    type: '@usuario/LOG_OUT',
});