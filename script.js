const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRDCyyb7vASeWR8gDo_oMJwnfJ_On4wLXs3erVi0Uehsb2ILuC5RJqJ0YbYHjuXUv6yC-8a_xAXrVCB/pub?gid=40560239&single=true&output=csv";

async function loadWebsiteData() {

    try {

        const response = await fetch(csvUrl + "&t=" + new Date().getTime(), {
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

        document.querySelector("#pengumuman ul").innerHTML = `
            <li>📌 ${data["Pengumuman1"] || ""}</li>
            <li>📌 ${data["Pengumuman2"] || ""}</li>
            <li>📌 ${data["Pengumuman3"] || ""}</li>
        `;

    } catch (err) {

        console.error(err);

    }

}

document.addEventListener("DOMContentLoaded", () => {

    loadWebsiteData();

    setInterval(loadWebsiteData, 30000);

});
