import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3F4pCNO1-vUW0wGnG9Z_4I6zutFKb6qM",
  authDomain: "echofeed-c16e4.firebaseapp.com",
  projectId: "echofeed-c16e4",
  storageBucket: "echofeed-c16e4.appspot.com",
  messagingSenderId: "1079234592469",
  appId: "1:1079234592469:web:ec2609f060221c1c132c5c",
  measurementId: "G-GFLLVWW6HL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
