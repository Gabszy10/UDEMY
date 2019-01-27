import * as firebase from 'firebase';


  var config = {
    apiKey: "AIzaSyA7kVGTWk2pvTPCRS-iV3VcliXSNPoYVUY",
    authDomain: "diary-412ed.firebaseapp.com",
    databaseURL: "https://diary-412ed.firebaseio.com",
    projectId: "diary-412ed",
    storageBucket: "diary-412ed.appspot.com",
    messagingSenderId: "260288781669"
  };
  firebase.initializeApp(config);

  export const database = firebase.database().ref('/notes');
  export const auth = firebase.auth();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  export const twitterProvider = new firebase.auth.TwitterAuthProvider();

