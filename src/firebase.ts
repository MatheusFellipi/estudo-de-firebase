import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

if (!firebase.app) {
  firebase.initializeApp(firebaseConfig);
}
export const firebaseDB =firebase.database()
