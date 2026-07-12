const API = 
"https://script.google.com/macros/s/AKfycbycwVcMO_XT6HWC8cQMyTZIneK84YeFS29E13E_fQ7ogL3bI9uXI3lOZYlt2YVI6boCmg/exec?aksi=dashboard";



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
