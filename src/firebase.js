import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6IHW49H0gj6lwhm0gPQDHpn-9h48FROs",
    authDomain: "clone-84dd3.firebaseapp.com",
    projectId: "clone-84dd3",
    storageBucket: "clone-84dd3.appspot.com",
    messagingSenderId: "483202066986",
    appId: "1:483202066986:web:a5205796fcecfe1659f153",
    measurementId: "G-HSQDTDT0N6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); // passing firebase config to setup our app
  const db = firebaseApp.firestore(); // creating firestore instance db 
  const auth = firebase.auth(); // authentication handler

  export { db, auth };