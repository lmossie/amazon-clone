// import firebase from "firebase/compat/app";
// // auth
// import { getAuth } from "firebase/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA03qibdiEax_dyEhOnAG6JaVmcvC1bSZo",
//   authDomain: "new-clone-670a6.firebaseapp.com",
//   projectId: "new-clone-670a6",
//   storageBucket: "new-clone-670a6.appspot.com",
//   messagingSenderId: "20666464538",
//   appId: "1:20666464538:web:07fa7d74287949cccc54a3"
// };
// // Initialize Firebase
// const app =firebase.initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = app.firestore();
//********************************* */
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA03qibdiEax_dyEhOnAG6JaVmcvC1bSZo",
  authDomain: "new-clone-670a6.firebaseapp.com",
  projectId: "new-clone-670a6",
  storageBucket: "new-clone-670a6.appspot.com",
  messagingSenderId: "20666464538",
  appId: "1:20666464538:web:07fa7d74287949cccc54a3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = firebase.firestore();

export { auth, db };
