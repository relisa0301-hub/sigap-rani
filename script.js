const API_BASE =
"https://script.google.com/macros/s/AKfycbycwVcMO_XT6HWC8cQMyTZIneK84YeFS29E13E_fQ7ogL3bI9uXI3lOZYlt2YVI6boCmg/exec";


function tampilSiswa(){

fetch(API_BASE+"?aksi=siswa")

.then(res=>res.json())

.then(data=>{


let html=`

<h2>👨‍🎓 DATA SISWA</h2>

<table>

<tr>
<th>NIS</th>
<th>NISN</th>
<th>Nama</th>
<th>Kelas</th>
<th>JK</th>
</tr>

`;


data.forEach(s=>{


html+=`

<tr>

<td>${s[0]}</td>

<td>${s[1]}</td>

<td>${s[2]}</td>

<td>${s[3]}</td>

<td>${s[4]}</td>

</tr>

`;

});


html+="</table>";


document.getElementById("konten").innerHTML=html;


});

}
function tampilGuru(){

fetch(API_BASE+"?aksi=guru")

.then(res=>res.json())

.then(data=>{


let html=`

<h2>👩‍🏫 DATA GURU</h2>

<table>

<tr>

<th>ID</th>
<th>Nama</th>
<th>Mapel</th>
<th>Email</th>

</tr>

`;


data.forEach(g=>{


html+=`

<tr>

<td>${g[0]}</td>

<td>${g[1]}</td>

<td>${g[2]}</td>

<td>${g[3]}</td>


</tr>

`;

});


html+="</table>";


document.getElementById("konten").innerHTML=html;


});


}
function tampilKelas(){

fetch(API_BASE+"?aksi=kelas")

.then(res=>res.json())

.then(data=>{


let html=`

<h2>🏫 DATA KELAS</h2>

<table>

<tr>

<th>ID</th>

<th>Kelas</th>

</tr>

`;


data.forEach(k=>{


html+=`

<tr>

<td>${k[0]}</td>

<td>${k[1]}</td>

</tr>

`;

});


html+="</table>";


document.getElementById("konten").innerHTML=html;


});


}
function beranda(){

location.reload();

}
fetch(API)

.then(response=>response.json())

.then(data=>{


document.getElementById("siswa").innerHTML=
data.jumlahSiswa;


document.getElementById("guru").innerHTML=
data.jumlahGuru;


document.getElementById("kelas").innerHTML=
data.jumlahKelas;


document.getElementById("hadir").innerHTML=
data.hadirHariIni;



let tabel="";


data.absensiTerbaru.forEach(a=>{


tabel += `

<tr>

<td>${a[5]}</td>

<td>${a[6]}</td>

<td>${a[8]}</td>

<td>${a[9]}</td>

<td>${a[3]}</td>

<td>${a[10]}</td>

</tr>

`;

});


document.getElementById("tabelAbsensi").innerHTML=tabel;


})

.catch(error=>{

console.log(error);

});
function tampilAbsensi(){


fetch(API_BASE+"?aksi=absensi")

.then(res=>res.json())

.then(data=>{


let html=`

<h2>📋 DATA ABSENSI</h2>


<table>

<tr>

<th>Tanggal</th>

<th>Jam</th>

<th>NIS</th>

<th>Nama</th>

<th>Kelas</th>

<th>Mapel</th>

<th>Guru</th>

<th>Status</th>

<th>WA</th>


</tr>

`;



data.reverse();



data.forEach(a=>{


html+=`

<tr>

<td>${formatTanggal(a[2])}</td>

<td>${a[3]}</td>

<td>${a[4]}</td>

<td>${a[5]}</td>

<td>${a[6]}</td>

<td>${a[8]}</td>

<td>${a[9]}</td>

<td>${a[10]}</td>

<td>${a[12]}</td>


</tr>

`;

});


html+="</table>";


document.getElementById("konten").innerHTML=html;


});


}
function formatTanggal(t){


let d=new Date(t);


return d.toLocaleDateString("id-ID");


}
