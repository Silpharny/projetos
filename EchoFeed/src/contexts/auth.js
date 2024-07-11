import react, { createContext, useState, useEffect } from "react";
import { auth, db } from "../.firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { doc, getDoc, setDoc } from "firebase/firestore";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const [authLoading, setAuthLoading] = useState(false);

  async function storageUser(data) {
    await AsyncStorage.setItem("@echofeed", JSON.stringify(data));
  }

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem("@echofeed");

      if (storageUser) {
        setAuthUser(JSON.parse(storageUser));
        setLoading(false);
      } else {
        setAuthUser(null);
        setLoading(false);
      }
    }
    loadStorage();
  }, []);

  async function handleCreateUser(email, password, name) {
    setAuthLoading(true);

    if (email === "" || password === "" || name === "") {
      alert("Preencha todos os campos!");
      setAuthLoading(false);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        let uid = value.user.uid;
        let data = {
          name: name,
          createAt: new Date(),
        };

        setDoc(doc(db, "users", uid), data);

        setAuthUser(data);
        storageUser(data);
        setAuthLoading(false);
      })

      .catch((err) => {
        console.error("Erro ao criar usuário:", err);
        setAuthLoading(false);
      });
  }

  async function handleLoginUser(email, password) {
    setAuthLoading(true);

    if (email === "" || password === "") {
      alert("Preencha todos os campos!");
      setAuthLoading(false);
      return;
    }
    await signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        let uid = value.user.uid;
        const docRef = doc(db, "users", uid);
        getDoc(docRef).then((doc) => {
          let data = {
            uid: value.user.uid,
            name: doc.data().name,
            email: value.user.email,
          };

          setAuthUser(data);
          storageUser(data);
          setAuthLoading(false);
        });
      })
      .catch((err) => {
        console.log("Erro ao entrar:", err);
        setAuthLoading(false);
      });
  }

  async function handleLogout() {
    signOut(auth);
    AsyncStorage.clear().then(() => setAuthUser(null));
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!authUser,
        loading,
        handleCreateUser,
        handleLoginUser,
        handleLogout,
        authUser,
        authLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
