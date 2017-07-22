import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCsDMObR8nayfau3bmOeRXHRSE6ZQgUyVk",
    authDomain: "state-2aaa1.firebaseapp.com",
    databaseURL: "https://state-2aaa1.firebaseio.com",
    projectId: "state-2aaa1",
    storageBucket: "state-2aaa1.appspot.com",
    messagingSenderId: "551370122008"
  };
  firebase.initializeApp(config);



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

