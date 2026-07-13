import { auth } from "./firebase.js";

import {
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const tombol = document.getElementById("loginBtn");

const email = document.getElementById("email");

const password = document.getElementById("password");

const pesan = document.getElementById("pesan");

tombol.addEventListener("click", () => {

    pesan.innerHTML = "Sedang login...";

    signInWithEmailAndPassword(

        auth,

        email.value.trim(),

        password.value.trim()

    )

    .then((userCredential)=>{

        localStorage.setItem(

            "login",

            "true"

        );

        localStorage.setItem(

            "email",

            userCredential.user.email

        );

        window.location.href="dashboard.html";

    })

    .catch((error)=>{

        pesan.innerHTML="❌ "+error.message;

    });

});
