import firebase from 'firebase';
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCFNSc3YbNbHRAv_eKC4oZ-88ESfiHuMUA",
  authDomain: "myownapp-43a14.firebaseapp.com",
  projectId: "myownapp-43a14",
  storageBucket: "myownapp-43a14.appspot.com",
  messagingSenderId: "14116767789",
  appId: "1:14116767789:web:c47fde1abaf80249ddd0a4"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();