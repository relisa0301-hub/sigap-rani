// =====================================
// SIGAP RANI V3
// js/auth.js
// =====================================

import { auth } from "../firebase.js";

import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

export async function login(email, password) {

  return await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

}

export async function logout() {

  return await signOut(auth);

}

export function cekLogin(callback) {

  onAuthStateChanged(auth, (user) => {

    callback(user);

  });

}
