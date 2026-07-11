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

        document.getElementById("guru").textContent = data["JumlahGuru"] || "-";
        document.getElementById("siswa").textContent = data["JumlahSiswa"] || "-";
        document.getElementById("kelas").textContent = data["JumlahKelas"] || "-";
        document.getElementById("hadir").textContent = data["HadirHariIni"] || "-";

    } catch (e) {
        console.log(e);
    }
}

document.addEventListener("DOMContentLoaded", function () {

    loadWebsiteData();
    setInterval(loadWebsiteData,30000);

    // langsung membuka AppSheet di HP
    const tombol = document.getElementById("openApp");

    tombol.addEventListener("click",function(){

        window.location.href="https://www.appsheet.com/newshortcut/a0bb851c-dfd7-4280-96a1-ba27da2ea92d";

    });

});
