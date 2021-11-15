import firebase from 'firebase';
import "firebase/storage";
import "firebase/auth"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqLREM7JG8bqis6ATnvsStzut3qfT3aSI",
    authDomain: "tunetraq.firebaseapp.com",
    projectId: "tunetraq",
    storageBucket: "tunetraq.appspot.com",
    messagingSenderId: "1028954860489",
    appId: "1:1028954860489:web:9be122b22ca2cc06a31618",
    measurementId: "G-ZL81KB6FGG"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const db = app.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();

  export { auth, db, storage };