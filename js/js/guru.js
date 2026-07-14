// =====================================
// SIGAP RANI V3
// js/guru.js
// BAGIAN 1
// =====================================

import { db } from "../firebase.js";

import {
collection,
getDocs,
query,
orderBy
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

export async function tampilGuru(){

const content=document.getElementById("content");

content.innerHTML="<h3>Memuat data guru...</h3>";

try{

const q=query(
collection(db,"guru"),
orderBy("nama")
);

const snapshot=await getDocs(q);

if(snapshot.empty){

content.innerHTML=`

<h2>👩‍🏫 DATA GURU</h2>

<p>Belum ada data guru.</p>

`;

return;

}

let html=`

<h2>👩‍🏫 DATA GURU</h2>

<table class="table">

<thead>

<tr>

<th>No</th>

<th>Nama Guru</th>

<th>NIP</th>

<th>Mata Pelajaran</th>

<th>Email</th>

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

<td>${d.nama ?? "-"}</td>

<td>${d.nip ?? "-"}</td>

<td>${d.mapel ?? "-"}</td>

<td>${d.email ?? "-"}</td>

</tr>

`;

});
// =====================================
// SIGAP RANI V3
// js/guru.js
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

<h2>👩‍🏫 DATA GURU</h2>

<div class="error">

<p>❌ Gagal memuat data guru.</p>

<pre>${error.message}</pre>

</div>

`;

}

}

// =====================================
// END FILE
// =====================================
