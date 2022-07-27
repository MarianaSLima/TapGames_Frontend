import Api from '../../../services/api'
import { loginFailure, loginSuccess, registerFailure } from "./actions";
import { all, put, takeLatest } from 'redux-saga/effects';
import md5 from 'react-native-md5';


function getGravatarURL(email) {
    const address = String(email).trim().toLowerCase();
    const hash = md5.hex_md5(address);
    return `https://www.gravatar.com/avatar/${hash}`;
}

async function logIn(email, password) {
    const data = JSON.stringify({
        email,
        password
    });
    const response = await Api.post('/signin', data);
    return response.data.data;
}

//implementar essse
async function signUp(nome, nick, email, password) {
    const data = JSON.stringify({
        "avatar": getGravatarURL(email),
        nome,
        nick,
        email,
        password,
        "score": 0,
        "ranking": 0
    });
    await Api.post('/signup', data);
}

function logInWithCredentials({ credentials }) {
    try {
        const user = yield logIn(credentials.email, credentials.password);
        yield put(loginSuccess(user));
    } catch (error) {
        yield put(loginFailure(error));
    }
}

//ESSE AQUI
function* registerWithCredentials({ credentials }) {
    const { nome, nick, email, password } = credentials;
    try {
        yield signUp(nome, nick, email, password);
    } catch (error) {
        yield put(registerFailure(error));
    }
}

//fala que a função vai disparar quando a ação for executada
export default all([
    takeLatest("@usuario/LOGIN_START", logInWithCredentials),
    takeLatest("@usuario/REGISTER_START", registerWithCredentials),
]);