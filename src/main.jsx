import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import {store} from './redux/store/index';
import persistor from './redux/store/index';
import {PersistGate} from "redux-persist/integration/react"


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate> 
  </Provider>,
  );
