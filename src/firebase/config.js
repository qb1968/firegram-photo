import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBT9JnbBRJYx-YsmR4Q4B_RaNk29REf82E",
    authDomain: "ninja-firegram-e4964.firebaseapp.com",
    databaseURL: "https://ninja-firegram-e4964.firebaseio.com",
    projectId: "ninja-firegram-e4964",
    storageBucket: "ninja-firegram-e4964.appspot.com",
    messagingSenderId: "311715605434",
    appId: "1:311715605434:web:f4ca6a2cb2a5abe6d9cb83"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
