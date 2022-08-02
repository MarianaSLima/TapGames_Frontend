import { applyMiddleware, createStore } from 'redux';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducers';
import rootSagas from './modules/rootSagas';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['usuario']
}

const sagaMiddleware = createSagaMiddleware();


const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer, applyMiddleware(sagaMiddleware));


sagaMiddleware.run(rootSagas);

const persistor = persistStore(store);

export {store, persistor}