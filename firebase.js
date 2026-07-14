// ======================================
// SIGAP RANI V3
// FIREBASE.JS
// ======================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyArUfnMmyX6JGMt5UxpidPFsjwtefkjvtc",
  authDomain: "sigap-rani-e8d1b.firebaseapp.com",
  projectId: "sigap-rani-e8d1b",
  storageBucket: "sigap-rani-e8d1b.firebasestorage.app",
  messagingSenderId: "628882873978",
  appId: "1:628882873978:web:18b27025c33616998d25c3"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db };
