import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD51OhRveqPjKQ0dziwmu-sO2ggD9t7WVw",
  authDomain: "assignment-todo-51dc6.firebaseapp.com",
  projectId: "assignment-todo-51dc6",
  storageBucket: "assignment-todo-51dc6.appspot.com",
  messagingSenderId: "202098332588",
  appId: "1:202098332588:web:1bb5ab34e6ab43e303e009",
  measurementId: "G-MXBGQN2YTT",
});

const auth = app.auth();

export { auth };
