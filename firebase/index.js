import firebase from 'firebase/app';
import 'firebase/storage';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAE3-1LQ_DXWvI43EDipEfTO59_losDq4M",
    authDomain: "blog-50b7d.firebaseapp.com",
    databaseURL: "https://blog-50b7d.firebaseio.com",
    projectId: "blog-50b7d",
    storageBucket: "blog-50b7d.appspot.com",
    messagingSenderId: "361267543105"
  };
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export {
      storage,firebase as default
  }