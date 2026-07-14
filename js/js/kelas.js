// =====================================
// SIGAP RANI V3
// js/kelas.js
// BAGIAN 1
// =====================================

import { db } from "../firebase.js";

import {
collection,
getDocs,
query,
orderBy
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

export async function tampilKelas(){

const content=document.getElementById("content");

content.innerHTML="<h3>Memuat data kelas...</h3>";

try{

const q=query(
collection(db,"kelas"),
orderBy("nama")
);

const snapshot=await getDocs(q);

if(snapshot.empty){

content.innerHTML=`
<h2>DATA KELAS</h2>
<p>Belum ada data kelas.</p>
`;

return;

}

let html=`

<h2>🏫 DATA KELAS</h2>

<table class="table">

<thead>

<tr>

<th>No</th>

<th>Kelas</th>

<th>Tingkat</th>

<th>Wali Kelas</th>

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

<td>${d.nama}</td>

<td>${d.tingkat}</td>

<td>${d.wali}</td>

</tr>

`;

});
  // =====================================
// SIGAP RANI V3
// js/kelas.js
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

<h2>DATA KELAS</h2>

<div class="error">

<p>❌ Gagal memuat data kelas.</p>

<pre>${error.message}</pre>

</div>

`;

}

}

// =====================================
// END FILE
// =====================================
