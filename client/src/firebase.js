// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGQsp6iaPRwkzi4IfQKP2B4ivpbfM2me4",
  authDomain: "podstream-c42e4.firebaseapp.com",
  projectId: "podstream-c42e4",
  storageBucket: "podstream-c42e4.appspot.com",
  messagingSenderId: "741842860090",
  appId: "1:741842860090:web:9ffcba02cab86b68399d03",
  // measurementId: "G-R55L90MY11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
