import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeApp } from "firebase/app";
import App from './App';
import reportWebVitals from './reportWebVitals';




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVskt-foIPO3wTRRoqnRx3kiz-ucj6EQY",
  authDomain: "ceramica-mela.firebaseapp.com",
  projectId: "ceramica-mela",
  storageBucket: "ceramica-mela.appspot.com",
  messagingSenderId: "802078097604",
  appId: "1:802078097604:web:ac22d86a229095233cc991"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
