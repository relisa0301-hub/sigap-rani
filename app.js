// =====================================
// SIGAP RANI V2
// APP.JS
// =====================================

import { auth, db } from "./firebase.js";
import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


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
document
.getElementById("kelas")
.onclick=tampilKelas;

  
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
  // ================================
// DATA KELAS
// ================================

async function tampilKelas(){

const snap=await getDocs(collection(db,"kelas"));

let html=`

<header>

<h2>DATA KELAS</h2>

<button id="kembali">

Kembali

</button>

</header>

<div style="padding:20px;">

`;

snap.forEach((doc)=>{

const d=doc.data();

html+=`

<div style="background:white;
padding:15px;
margin-bottom:15px;
border-radius:10px;
box-shadow:0 2px 10px rgba(0,0,0,.15);">

<h3>Kelas ${d.nama}</h3>

<p>Tingkat : ${d.tingkat}</p>

<p>Wali Kelas : ${d.wali}</p>

</div>

`;

});

html+="</div>";

app.innerHTML=html;

document
.getElementById("kembali")
.onclick=()=>{

dashboard(auth.currentUser);

};

}

});
