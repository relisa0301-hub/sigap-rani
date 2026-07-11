const csvUrl="https://docs.google.com/spreadsheets/d/e/2PACX-1vRDCyyb7vASeWR8gDo_oMJwnfJ_On4wLXs3erVi0Uehsb2ILuC5RJqJ0YbYHjuXUv6yC-8a_xAXrVCB/pub?gid=40560239&single=true&output=csv";

async function loadWebsiteData(){

try{

const res=await fetch(csvUrl+"?t="+Date.now(),{
cache:"no-store"
});

const text=await res.text();

const rows=text.trim().split("\n");

const data={};

rows.forEach(r=>{

const c=r.split(",");

if(c.length>=2){

data[c[0].trim()]=c.slice(1).join(",").trim();

}

});

document.getElementById("guru").textContent=data["JumlahGuru"]||"-";
document.getElementById("siswa").textContent=data["JumlahSiswa"]||"-";
document.getElementById("kelas").textContent=data["JumlahKelas"]||"-";
document.getElementById("hadir").textContent=data["HadirHariIni"]||"-";

const ul=document.getElementById("pengumuman");

if(ul){

ul.innerHTML="";

["Pengumuman1","Pengumuman2","Pengumuman3"].forEach(item=>{

if(data[item]){

const li=document.createElement("li");

li.textContent="📌 "+data[item];

ul.appendChild(li);

}

});

}

}catch(e){

console.log(e);

}

}

function updateClock(){

const now=new Date();

const jam=String(now.getHours()).padStart(2,"0");
const menit=String(now.getMinutes()).padStart(2,"0");
const detik=String(now.getSeconds()).padStart(2,"0");

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

const jamEl=document.getElementById("jam");
const tanggalEl=document.getElementById("tanggal");

if(jamEl){

jamEl.textContent=`${jam}:${menit}:${detik}`;

}

if(tanggalEl){

tanggalEl.textContent=`${hari[now.getDay()]}, ${now.getDate()} ${bulan[now.getMonth()]} ${now.getFullYear()}`;

}

}

document.addEventListener("DOMContentLoaded",()=>{

loadWebsiteData();

setInterval(loadWebsiteData,30000);

updateClock();

setInterval(updateClock,1000);

});
