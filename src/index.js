import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/app'
import 'firebase/analytics'

import {GlobalContextProvider} from './components/context/GlobalContext'

var firebaseConfig = {
    apiKey: "AIzaSyC-Ll4K0jcpHLPBwFtnUgVTQ1G1lt7UDKM",
    authDomain: "ice-breaker-maker.firebaseapp.com",
    projectId: "ice-breaker-maker",
    storageBucket: "ice-breaker-maker.appspot.com",
    messagingSenderId: "685679611800",
    appId: "1:685679611800:web:426b5c37f94c6e310ea5ed",
    measurementId: "G-LLCYCF2B57"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(<GlobalContextProvider><App /></GlobalContextProvider>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
