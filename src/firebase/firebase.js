import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD35MyjUodOpGmYxxRan3UWu6Rx2JPXDOA",
  authDomain: "netflix-clone-3ab9d.firebaseapp.com",
  projectId: "netflix-clone-3ab9d",
  storageBucket: "netflix-clone-3ab9d.appspot.com",
  messagingSenderId: "419568121709",
  appId: "1:419568121709:web:9d4c073b7a43023b5b0c64",
  measurementId: "G-S95037RBY8"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
