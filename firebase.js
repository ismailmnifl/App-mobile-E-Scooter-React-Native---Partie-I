// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqiH18DObsdVkEoS61KXGNp-uVP4AOvXU",
  authDomain: "e-scooter-1cd56.firebaseapp.com",
  projectId: "e-scooter-1cd56",
  storageBucket: "e-scooter-1cd56.appspot.com",
  messagingSenderId: "1035859472211",
  appId: "1:1035859472211:web:fa443644936f3ec44e7ba6"
};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };