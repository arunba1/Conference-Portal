import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB0dL3pKVPpfw4fvTZAFQ6Gn5C1QEbxwB4",
  authDomain: "emailpasswordlogin-1c672.firebaseapp.com",
  projectId: "emailpasswordlogin-1c672",
  storageBucket: "emailpasswordlogin-1c672.appspot.com",
  messagingSenderId: "226896580719",
  appId: "1:226896580719:web:bf2926b129f5300eae7d9a",
  measurementId: "G-Q2D2J37SXY"
};

const app = initializeApp(firebaseConfig);
export const database=getAuth(app)
