// ================================
// SIGAP RANI
// Digital Clock
// ================================

function updateClock(){

const now = new Date();

const hari=[
"Minggu",
"Senin",
"Selasa",
"Rabu",
"Kamis",
"Jumat",
"Sabtu"
];

const bulan=[
"Januari",
"Februari",
"Maret",
"April",
"Mei",
"Juni",
"Juli",
"Agustus",
"September",
"Oktober",
"November",
"Desember"
];

let jam=String(now.getHours()).padStart(2,"0");
let menit=String(now.getMinutes()).padStart(2,"0");
let detik=String(now.getSeconds()).padStart(2,"0");

document.getElementById("jam").innerHTML=
`${jam} : ${menit} : ${detik}`;

const tanggal=
`${hari[now.getDay()]}, ${now.getDate()} ${bulan[now.getMonth()]} ${now.getFullYear()}`;

const elTanggal=document.getElementById("tanggal");

if(elTanggal){

elTanggal.innerHTML=tanggal;

}

}

setInterval(updateClock,1000);

updateClock();

console.log("SIGAP RANI aktif");
