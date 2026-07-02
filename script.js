// ===========================================
// LOADING SCREEN
// ===========================================

window.addEventListener("load", () => {

    const loading = document.getElementById("loadingScreen");

    setTimeout(() => {

        loading.classList.add("hide-loading");

    }, 1200);

});

// ===========================================
// JAM DIGITAL
// ===========================================

function updateClock() {

    const now = new Date();

    const jam = String(now.getHours()).padStart(2, "0");
    const menit = String(now.getMinutes()).padStart(2, "0");
    const detik = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("jam").innerHTML =
        `${jam}:${menit}:${detik}`;

    const hari = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
    ];

    const bulan = [
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

    document.getElementById("tanggal").innerHTML =
        `${hari[now.getDay()]}, ${now.getDate()} ${bulan[now.getMonth()]} ${now.getFullYear()}`;

}

updateClock();

setInterval(updateClock,1000);

// ===========================================
// COUNTER ANIMATION
// ===========================================

function counter(id,target){

let element=document.getElementById(id);

let start=0;

let speed=Math.ceil(target/80);

let interval=setInterval(()=>{

start+=speed;

if(start>=target){

start=target;

clearInterval(interval);

}

element.innerHTML=start;

},20);

}

window.addEventListener("load",()=>{

counter("guru",45);

counter("siswa",612);

counter("kelas",24);

counter("hadir",578);

});

// ===========================================
// NAVBAR SCROLL
// ===========================================

window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>80){

nav.style.background="rgba(7,20,46,.92)";
nav.style.padding="12px 8%";
nav.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}else{

nav.style.background="rgba(8,18,45,.35)";
nav.style.padding="15px 8%";
nav.style.boxShadow="none";

}

});

// ===========================================
// SMOOTH BUTTON
// ===========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// ===========================================
// HERO PARALLAX
// ===========================================

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

hero.style.backgroundPositionY=(window.pageYOffset*0.5)+"px";

});

// ===========================================
// CARD ANIMATION
// ===========================================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".box,.dash-card,.card,.clock,.announcement-card").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".8s";

observer.observe(el);

});

// ===========================================
// OPEN APPSHEET
// ===========================================

document.getElementById("openApp").addEventListener("click",()=>{

console.log("SIGAP RANI Dibuka");

});

// ===========================================
// COPYRIGHT YEAR
// ===========================================

const year=new Date().getFullYear();

const footer=document.querySelector("footer p");

footer.innerHTML=footer.innerHTML.replace("2026",year);

// ===========================================
// END SCRIPT
// ===========================================
