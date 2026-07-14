// =====================================
// SIGAP RANI V3
// app.js
// BAGIAN 1
// =====================================

import { cekLogin, login } from "./js/auth.js";
import { tampilDashboard } from "./js/dashboard.js";

const app = document.getElementById("app");

// ===============================
// HALAMAN LOGIN
// ===============================

function tampilLogin() {

app.innerHTML = `

<div class="login">

<img src="assets/logo.png" class="logo">

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
.onclick = prosesLogin;

}

// ===============================
// LOGIN
// ===============================

async function prosesLogin(){

const email =
document.getElementById("email").value.trim();

const password =
document.getElementById("password").value;

const info =
document.getElementById("info");

if(email==""){

info.innerHTML="Masukkan email.";

return;

}

if(password==""){

info.innerHTML="Masukkan password.";

return;

}

info.innerHTML="Sedang login...";

try{

await login(email,password);

info.innerHTML="Login berhasil...";

}catch(err){

switch(err.code){

case "auth/invalid-email":

info.innerHTML="Email tidak valid.";

break;

case "auth/user-not-found":

info.innerHTML="Email tidak ditemukan.";

break;

case "auth/wrong-password":

info.innerHTML="Password salah.";

break;

case "auth/invalid-credential":

info.innerHTML="Email atau password salah.";

break;

default:

info.innerHTML=err.message;

}

}

}

// ===============================
// DASHBOARD
// ===============================

function dashboard(user){

tampilDashboard(user);

}
// =====================================
// SIGAP RANI V3
// app.js
// BAGIAN 2
// =====================================

// ===============================
// CEK STATUS LOGIN
// ===============================

cekLogin((user)=>{

if(user){

dashboard(user);

}else{

tampilLogin();

}

});

// ===============================
// UTILITAS
// ===============================

window.$ = function(id){

return document.getElementById(id);

};

window.tampilPesan = function(pesan){

const info = document.getElementById("info");

if(info){

info.innerHTML = pesan;

}

};

// ===============================
// VERSI APLIKASI
// ===============================

console.log("================================");
console.log("SIGAP RANI V3");
console.log("Versi : 3.0");
console.log("Developer : Re Lisa & ChatGPT");
console.log("================================");
