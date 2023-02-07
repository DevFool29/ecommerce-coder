import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgU19NwDqpfqWxgcn3rD4uYry1z46nd4M",
  authDomain: "coderhouse-ecommerce-656ea.firebaseapp.com",
  projectId: "coderhouse-ecommerce-656ea",
  storageBucket: "coderhouse-ecommerce-656ea.appspot.com",
  messagingSenderId: "754804266822",
  appId: "1:754804266822:web:41579bc2a6be895e297747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);


