const API_BASE =
"https://script.google.com/macros/s/AKfycbycwVcMO_XT6HWC8cQMyTZIneK84YeFS29E13E_fQ7ogL3bI9uXI3lOZYlt2YVI6boCmg/exec";

let guruLogin =
JSON.parse(localStorage.getItem("guru"));
if(guruLogin){

document.getElementById("userGuru")
.innerHTML=

"Login : "+
guruLogin.nama+
" | "+
guruLogin.mapel;

}
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
function rekap(){


fetch(API_BASE+"?aksi=rekap")

.then(res=>res.json())

.then(data=>{


let html=`

<h2>🏆 REKAP KEHADIRAN SISWA</h2>


<table>

<tr>

<th>Ranking</th>

<th>NIS</th>

<th>Nama</th>

<th>Kelas</th>

<th>Jumlah Hadir</th>

<th>Persentase</th>

</tr>

`;



let no=1;


data.forEach(r=>{


html+=`

<tr>

<td>${no}</td>

<td>${r[0]}</td>

<td>${r[1]}</td>

<td>${r[2]}</td>

<td>${r[3]}</td>

<td>${r[4]}%</td>


</tr>


`;

no++;


});



html+="</table>";



document.getElementById("konten")
.innerHTML=html;



});


}
function loginGuru(){


let email=
document.getElementById("email").value;


let password=
document.getElementById("password").value;



fetch(API_BASE,{

method:"POST",

body:JSON.stringify({

aksi:"login",

email:email,

password:password

})

})


.then(res=>res.json())


.then(data=>{


if(data.status){


localStorage.setItem(
"guru",
JSON.stringify(data)
);



alert(
"Selamat datang "+data.nama
);



location.reload();



}else{


alert(data.pesan);


}



});


}
function logout(){

localStorage.removeItem("guru");

location.reload();

}
if(guruLogin){


if(guruLogin.level=="GURU"){


document.querySelectorAll(".admin")
.forEach(x=>{

x.style.display="none";

});


}
function mulaiScan(){


const scanner =
new Html5QrcodeScanner(

"reader",

{

fps:10,

qrbox:250

}

);



scanner.render(

function(qrCodeMessage){


scanner.clear();



prosesAbsensi(qrCodeMessage);



},


function(error){

console.log(error);

}


);


}
  function prosesAbsensi(qr){


let guru =
JSON.parse(localStorage.getItem("guru"));



fetch(API_BASE,{

method:"POST",

body:JSON.stringify({

aksi:"absen",

qr:qr,

guru:guru.email

})

})


.then(res=>res.json())


.then(data=>{


document.getElementById("hasilScan")
.innerHTML=data.pesan;



alert(data.pesan);



});


}

}
