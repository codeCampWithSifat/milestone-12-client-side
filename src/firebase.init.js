import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLCbUzCiKhjcUQDUPxXbaoqLVm7gljT3g",
  authDomain: "milestone-12-doctor-portal.firebaseapp.com",
  projectId: "milestone-12-doctor-portal",
  storageBucket: "milestone-12-doctor-portal.appspot.com",
  messagingSenderId: "215628869533",
  appId: "1:215628869533:web:f30937dd13ec6855e38974"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth