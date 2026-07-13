import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {

  apiKey: "AIzaSyDlHdalkrTj_VMI7TPf2its4eE-89HodTY",

  authDomain: "sigap-rani.firebaseapp.com",

  projectId: "sigap-rani",

  storageBucket: "sigap-rani.firebasestorage.app",

  messagingSenderId: "25822414711",

  appId: "1:25822414711:web:d564982c21fad3bc310372"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { app, db, auth };
