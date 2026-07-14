// =====================================
// SIGAP RANI V3
// js/dashboard.js
// =====================================

import { logout } from "./auth.js";

export function tampilDashboard(user) {

document.getElementById("app").innerHTML=`

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
👨‍🏫
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

<div id="content"></div>

</main>

`;

document
.getElementById("logout")
.onclick=logout;

document
.getElementById("scan")
.onclick=()=>{

document.getElementById("content").innerHTML=`
<h2>SCAN QR</h2>
<p>Modul sedang dibuat...</p>
`;

};

document
.getElementById("siswa")
.onclick=()=>{

document.getElementById("content").innerHTML=`
<h2>DATA SISWA</h2>
<p>Modul sedang dibuat...</p>
`;

};

document
.getElementById("guru")
.onclick=()=>{

document.getElementById("content").innerHTML=`
<h2>DATA GURU</h2>
<p>Modul sedang dibuat...</p>
`;

};

document
.getElementById("kelas")
.onclick=()=>{

document.getElementById("content").innerHTML=`
<h2>DATA KELAS</h2>
<p>Modul sedang dibuat...</p>
`;

};

document
.getElementById("mapel")
.onclick=()=>{

document.getElementById("content").innerHTML=`
<h2>DATA MAPEL</h2>
<p>Modul sedang dibuat...</p>
`;

};

document
.getElementById("rekap")
.onclick=()=>{

document.getElementById("content").innerHTML=`
<h2>REKAP ABSENSI</h2>
<p>Modul sedang dibuat...</p>
`;

};

}
