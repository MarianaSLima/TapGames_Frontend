import {all} from 'redux-saga/effects';

import usuario from './usuario/sagas';
//quais moduklos vou controlar 

export default function* rootSagas(){
    return yield all([
        usuario
    ]);
}