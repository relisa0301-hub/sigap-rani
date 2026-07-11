const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRDCyyb7vASeWR8gDo_oMJwnfJ_On4wLXs3erVi0Uehsb2ILuC5RJqJ0YbYHjuXUv6yC-8a_xAXrVCB/pub?gid=40560239&single=true&output=csv";

async function loadWebsiteData() {
    try {
        const response = await fetch(csvUrl + "&t=" + Date.now(), {
            cache: "no-store"
        });

        const csv = await response.text();
        const rows = csv.replace(/\r/g, "").trim().split("\n");

        const data = {};

        rows.forEach(row => {
            const cols = row.split(",");
            if (cols.length >= 2) {
                data[cols[0].trim()] = cols.slice(1).join(",").trim();
            }
        });

        const guru = document.getElementById("guru");
        const siswa = document.getElementById("siswa");
        const kelas = document.getElementById("kelas");
        const hadir = document.getElementById("hadir");

        if (guru) guru.textContent = data["JumlahGuru"] || "-";
        if (siswa) siswa.textContent = data["JumlahSiswa"] || "-";
        if (kelas) kelas.textContent = data["JumlahKelas"] || "-";
        if (hadir) hadir.textContent = data["HadirHariIni"] || "-";

    } catch (e) {
        console.log(e);
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const loading = document.getElementById("loadingScreen");
    if (loading) {
        loading.style.display = "none";
    }

    loadWebsiteData();
    setInterval(loadWebsiteData, 30000);

    const tombol = document.getElementById("openApp");

    if (tombol) {
        tombol.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "https://www.appsheet.com/newshortcut/a0bb851c-dfd7-4280-96a1-ba27da2ea92d";
        });
    }

});
