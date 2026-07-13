// =====================================
// SIGAP RANI V2
// APP.JS
// =====================================

import { auth } from "./firebase.js";

import {
onAuthStateChanged,
signInWithEmailAndPassword,
signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const app = document.getElementById("app");

// ================================
// HALAMAN LOGIN
// ================================

function tampilLogin(){

app.innerHTML=`

<div class="login">

<img src="logo.png" class="logo">

<h1>SIGAP RANI</h1>

<p>Sistem Informasi Gadget Absensi Pelajar</p>

<input
id="email"
type="email"
placeholder="Email Guru">

<input
id="password"
type="password"
placeholder="Password">

<button id="btnLogin">

MASUK

</button>

<div id="info"></div>

</div>

`;

document
.getElementById("btnLogin")
.onclick=login;

}

// ================================
// LOGIN
// ================================

function login(){

const email=
document.getElementById("email").value;

const password=
document.getElementById("password").value;

const info=
document.getElementById("info");

info.innerHTML="Sedang login...";

signInWithEmailAndPassword(
auth,
email,
password
)

.then(()=>{

info.innerHTML="Login berhasil";

})

.catch((err)=>{

info.innerHTML=err.message;

});

}

// ================================
// DASHBOARD
// ================================

function dashboard(user){

app.innerHTML=`

<header>

<h2>

SIGAP RANI

</h2>

<p>

${user.email}

</p>

<button id="logout">

Logout

</button>

</header>

<main>

<div class="menu">

<button id="scan">

📷 Scan QR

</button>

<button id="siswa">

👨‍🎓 Data Siswa

</button>

<button id="guru">

👩‍🏫 Data Guru

</button>

<button id="kelas">

🏫 Data Kelas

</button>

<button id="mapel">

📚 Data Mapel

</button>

<button id="rekap">

📊 Rekap

</button>

</div>

</main>

`;

document
.getElementById("logout")
.onclick=()=>{

signOut(auth);

};

}

// ================================
// CEK LOGIN
// ================================

onAuthStateChanged(auth,(user)=>{

if(user){

dashboard(user);

}else{

tampilLogin();

}

});
