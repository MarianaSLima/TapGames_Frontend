import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Rotas from './Routes';
import './responsividade.css';
import { Provider } from 'react-redux';
import {store, persistor} from './store'
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <BrowserRouter>
          <Rotas />
        </BrowserRouter>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
