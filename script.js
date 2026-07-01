// ========================================
// SIGAP RANI
// Script
// ========================================


// ======================
// JAM DIGITAL
// ======================

function updateClock(){

const now=new Date();

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

const jam=String(now.getHours()).padStart(2,"0");
const menit=String(now.getMinutes()).padStart(2,"0");
const detik=String(now.getSeconds()).padStart(2,"0");

const elJam=document.getElementById("jam");

if(elJam){

elJam.innerHTML=`${jam}:${menit}:${detik}`;

}

const elTanggal=document.getElementById("tanggal");

if(elTanggal){

elTanggal.innerHTML=
`${hari[now.getDay()]}, ${now.getDate()} ${bulan[now.getMonth()]} ${now.getFullYear()}`;

}

}

setInterval(updateClock,1000);

updateClock();


// ======================
// LOADING WEBSITE
// ======================

window.addEventListener("load",()=>{

setTimeout(()=>{

document
.getElementById("loadingScreen")
.classList.add("hide-loading");

},1200);

});


// ======================
// TOMBOL APPSHEET
// ======================

// ======================
// TOMBOL MASUK APPSHEET
// ======================

const tombol = document.getElementById("openApp");

if (tombol) {

    tombol.addEventListener("click", function (e) {

        e.preventDefault();

        const loading = document.getElementById("loadingScreen");

        loading.classList.remove("hide-loading");

        setTimeout(() => {

            window.location.href = tombol.href;

        },1000);

    });

}
