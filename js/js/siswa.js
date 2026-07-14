// =====================================
// SIGAP RANI V3
// js/siswa.js
// BAGIAN 1
// =====================================

import { db } from "../firebase.js";

import {
collection,
getDocs,
query,
orderBy
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

export async function tampilSiswa(){

const content=document.getElementById("content");

content.innerHTML="<h3>Memuat data siswa...</h3>";

try{

const q=query(
collection(db,"siswa"),
orderBy("nama")
);

const snapshot=await getDocs(q);

if(snapshot.empty){

content.innerHTML=`

<h2>👨‍🎓 DATA SISWA</h2>

<p>Belum ada data siswa.</p>

`;

return;

}

let html=`

<h2>👨‍🎓 DATA SISWA</h2>

<table class="table">

<thead>

<tr>

<th>No</th>

<th>NIS</th>

<th>Nama</th>

<th>Kelas</th>

<th>JK</th>

</tr>

</thead>

<tbody>

`;

let no=1;

snapshot.forEach((doc)=>{

const d=doc.data();

html+=`

<tr>

<td>${no++}</td>

<td>${d.nis ?? "-"}</td>

<td>${d.nama ?? "-"}</td>

<td>${d.kelas ?? "-"}</td>

<td>${d.jk ?? "-"}</td>

</tr>

`;

});
// =====================================
// SIGAP RANI V3
// js/siswa.js
// BAGIAN 2
// =====================================

html += `

</tbody>

</table>

`;

content.innerHTML = html;

}catch(error){

console.error(error);

content.innerHTML = `

<h2>👨‍🎓 DATA SISWA</h2>

<div class="error">

<p>❌ Gagal memuat data siswa.</p>

<pre>${error.message}</pre>

</div>

`;

}

}

// =====================================
// END FILE
// =====================================
