import firebase from "firebase";
import "firebase/firestore";

var firebaseApp = {
  apiKey: "AIzaSyBn_aCAKcgpMqYLgRAV9qwUM9VdgzUdXfo",
  authDomain: "firbase-learn-360.firebaseapp.com",
  databaseURL: "https://firbase-learn-360-default-rtdb.firebaseio.com",
  projectId: "firbase-learn-360",
  storageBucket: "firbase-learn-360.appspot.com",
  messagingSenderId: "196987928754",
  appId: "1:196987928754:web:d41acbd8444bbaa47d49ab",
};

// const db = firebaseApp.firestore();
firebase.initializeApp(firebaseApp);
export default firebase;
