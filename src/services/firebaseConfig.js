import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJhrzkN7BLZtVOSeNZaWvNb8NoIl2KSKQ",
  authDomain: "eatio-2148d.firebaseapp.com",
  projectId: "eatio-2148d",
  storageBucket: "eatio-2148d.appspot.com",
  messagingSenderId: "33320458600",
  appId: "1:33320458600:web:be53e8837462980b4c1edd",
  measurementId: "G-ZXRGP1DN2Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
