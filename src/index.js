

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import reportWebVitals from './reportWebVitals'
import {Provider} from 'react-redux'
import store from './store/faults'


const root= ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <Provider store={store}> 
    <React.StrictMode>
       <GoogleOAuthProvider clientId={"166059900103-ms2q3t8ppn752v8371abhn3s2ahmmf6r.apps.googleusercontent.com"} > 
      <App />
      </GoogleOAuthProvider >
    </React.StrictMode>
    </Provider >
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

















