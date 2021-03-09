import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAaBgLfQZat3KIgPqJagALsAdQvIQ9qoww",
  authDomain: "ella-v1.firebaseapp.com",
  databaseURL: "https://ella-v1.firebaseio.com",
  projectId: "ella-v1",
  storageBucket: "ella-v1.appspot.com",
  messagingSenderId: "1089228214558",
  appId: "1:1089228214558:web:4382fa73ee538cb0ba390f",
  measurementId: "G-CTT2K1RPG6",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
