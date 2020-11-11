import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAbUZSDX4hi1Jor2JeQ_G9gKr2hfHzP978",
  authDomain: "clone-14ed3.firebaseapp.com",
  databaseURL: "https://clone-14ed3.firebaseio.com",
  projectId: "clone-14ed3",
  storageBucket: "clone-14ed3.appspot.com",
  messagingSenderId: "63092059951",
  appId: "1:63092059951:web:3e16413189891b3236bbda",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
