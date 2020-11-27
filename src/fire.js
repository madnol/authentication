import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBVmdfva6LrCv5QHbMgX97s_bvHNPN2GuE",
  authDomain: "authantication-11921.firebaseapp.com",
  databaseURL: "https://authantication-11921.firebaseio.com",
  projectId: "authantication-11921",
  storageBucket: "authantication-11921.appspot.com",
  messagingSenderId: "23972109201",
  appId: "1:23972109201:web:013c4b162ea55d7ce79830",
};
// Initialize Firebase

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
