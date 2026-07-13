// =====================================
// SIGAP RANI V2
// SCRIPT.JS
// =====================================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading").style.display = "none";
        document.getElementById("app").style.display = "block";

    }, 1500);

});


// ===============================
// Tombol Login Guru
// ===============================

document.getElementById("btnMasuk").addEventListener("click", () => {

    window.location.href = "login.html";

});


// ===============================
// Menu Dashboard
// ===============================

const menu = document.querySelectorAll(".card");

menu[0].addEventListener("click", () => {

    window.location.href = "scan.html";

});

menu[1].addEventListener("click", () => {

    window.location.href = "siswa.html";

});

menu[2].addEventListener("click", () => {

    window.location.href = "guru.html";

});

menu[3].addEventListener("click", () => {

    window.location.href = "dashboard.html";

});

menu[4].addEventListener("click", () => {

    window.location.href = "rekap.html";

});


// ===============================
// Cek Firebase
// ===============================

setTimeout(() => {

    if (window.db) {

        console.log("Firebase Connected");

    } else {

        console.log("Firebase Not Connected");

    }

}, 1000);
