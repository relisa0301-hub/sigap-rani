// =====================================
// SIGAP RANI V3
// js/mapel.js
// BAGIAN 1
// =====================================

import { db } from "../firebase.js";

import {
collection,
getDocs,
query,
orderBy
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

export async function tampilMapel(){

const content=document.getElementById("content");

content.innerHTML="<h3>Memuat data mata pelajaran...</h3>";

try{

const q=query(
collection(db,"mapel"),
orderBy("nama")
);

const snapshot=await getDocs(q);

if(snapshot.empty){

content.innerHTML=`

<h2>📚 DATA MATA PELAJARAN</h2>

<p>Belum ada data mata pelajaran.</p>

`;

return;

}

let html=`

<h2>📚 DATA MATA PELAJARAN</h2>

<table class="table">

<thead>

<tr>

<th>No</th>

<th>Kode</th>

<th>Mata Pelajaran</th>

<th>Kelas</th>

<th>Guru</th>

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

<td>${d.kode ?? doc.id}</td>

<td>${d.nama ?? "-"}</td>

<td>${d.kelas ?? "-"}</td>

<td>${d.guru ?? "-"}</td>

</tr>

`;

});
// =====================================
// SIGAP RANI V3
// js/mapel.js
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

<h2>📚 DATA MATA PELAJARAN</h2>

<div class="error">

<p>❌ Gagal memuat data mata pelajaran.</p>

<pre>${error.message}</pre>

</div>

`;

}

}

// =====================================
// END FILE
// =====================================
