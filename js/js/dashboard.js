// =====================================
// SIGAP RANI V3
// js/dashboard.js
// BAGIAN 1
// =====================================

import { logout } from "./auth.js";
import { tampilKelas } from "./kelas.js";
import { tampilGuru } from "./guru.js";
import { tampilSiswa } from "./siswa.js";
import { tampilMapel } from "./mapel.js";

export function tampilDashboard(user){

const app=document.getElementById("app");

app.innerHTML=`

<header class="header">

<div>

<h2>SIGAP RANI</h2>

<p>${user.email}</p>

</div>

<button id="logout">

Logout

</button>

</header>

<main>

<div class="menu">

<button id="scan">

📷

<br>

Scan QR

</button>

<button id="siswa">

👨‍🎓

<br>

Data Siswa

</button>

<button id="guru">

👩‍🏫

<br>

Data Guru

</button>

<button id="kelas">

🏫

<br>

Data Kelas

</button>

<button id="mapel">

📚

<br>

Data Mapel

</button>

<button id="rekap">

📊

<br>

Rekap

</button>

</div>

<div id="content">

<h2>Selamat Datang</h2>

<p>Silakan pilih menu.</p>

</div>

</main>

`;

document
.getElementById("logout")
.onclick=logout;

document
.getElementById("kelas")
.onclick=tampilKelas;

document
.getElementById("guru")
.onclick=tampilGuru;

document
.getElementById("siswa")
.onclick=tampilSiswa;

document
.getElementById("mapel")
.onclick=tampilMapel;
  // =====================================
// SIGAP RANI V3
// js/dashboard.js
// BAGIAN 2
// =====================================

document
.getElementById("scan")
.onclick=()=>{

document.getElementById("content").innerHTML=`

<h2>📷 SCAN QR</h2>

<p>Modul Scan QR akan dihubungkan pada tahap berikutnya.</p>

`;

};

document
.getElementById("rekap")
.onclick=()=>{

document.getElementById("content").innerHTML=`

<h2>📊 REKAP ABSENSI</h2>

<p>Modul Rekap akan dihubungkan pada tahap berikutnya.</p>

`;

};

}
