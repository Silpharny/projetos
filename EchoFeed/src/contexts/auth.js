import react, { createContext, useState, useEffect } from "react";
import { auth, db } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

import {
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  collection,
} from "firebase/firestore";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser({
          uid: user.uid,
          name: user.displayName,
          email: user.email,
        });
        setLoading(false);
      } else {
        setAuthUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  async function handleCreateUser(email, password, name) {
    if (email === "" || password === "" || name === "") {
      alert("Preencha todos os campos!");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password, name)
      .then((user) => {
        setAuthUser({
          uid: user.user.uid,
          name: user.user.displayName,
          email: user.user.email,
        });

        console.log("Usuário criado:", user);
      })
      .catch((err) => console.error("Erro ao criar usuário:", err));
  }

  async function handleLoginUser(email, password) {
    if (email === "" || password === "") {
      alert("Preencha todos os campos!");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setAuthUser({
          uid: user.user.uid,
          name: user.user.displayName,
          email: user.user.email,
        });
        console.log("usuário logado!");
      })
      .catch((err) => console.log(err));
  }

  async function handleLogout() {
    signOut(auth);
  }

  // =========== Firestore ===========

  async function handleRegister() {
    await setDoc(doc(db, "users", 3), {});
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!authUser,
        loading,
        handleCreateUser,
        handleLoginUser,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
