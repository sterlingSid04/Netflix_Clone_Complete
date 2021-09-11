import firebase from "firebase";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyA_STZ7NHwrQuHis7OgH8llqk84jJmp0qQ",
    authDomain: "netflix-8c237.firebaseapp.com",
    projectId: "netflix-8c237",
    storageBucket: "netflix-8c237.appspot.com",
    messagingSenderId: "768934935475",
    appId: "1:768934935475:web:14f6ced5de05feb5b0a9c6",
    measurementId: "G-MSPJFPN4RQ"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();

  export default storage;