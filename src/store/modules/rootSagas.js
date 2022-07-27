import { all } from 'redux-saga/effects';

import usuario from './usuario/reducers';
//quais modulos vou controlar
export default function* rootSaga() {
    return yield all([
        usuario,
    ]);
}