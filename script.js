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

        document.getElementById("guru").textContent =
            data["JumlahGuru"] || "-";

        document.getElementById("siswa").textContent =
            data["JumlahSiswa"] || "-";

        document.getElementById("kelas").textContent =
            data["JumlahKelas"] || "-";

        document.getElementById("hadir").textContent =
            data["HadirHariIni"] || "-";

        const list = document.getElementById("pengumumanList");

        list.innerHTML = "";

        [
            data["Pengumuman1"],
            data["Pengumuman2"],
            data["Pengumuman3"]
        ].forEach(item => {

            if (item && item.trim() !== "") {

                const li = document.createElement("li");
                li.textContent = item;
                list.appendChild(li);

            }

        });

        if (list.innerHTML === "") {

            list.innerHTML = "<li>Tidak ada pengumuman.</li>";

        }

    } catch (err) {

        console.error("Gagal mengambil data:", err);

    }

}

document.addEventListener("DOMContentLoaded", () => {

    loadWebsiteData();

    setInterval(loadWebsiteData, 30000);

});

document.querySelector(".btn").addEventListener("click", function (e) {

    e.preventDefault();

    const app =
        "https://www.appsheet.com/newshortcut/a0bb851c-dfd7-4280-96a1-ba27da2ea92d";

    window.location.href = app;

    setTimeout(function () {

        window.open(app, "_blank");

    }, 500);

});
// ========================================
// PWA - SIGAP RANI
// ========================================

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("./sw.js")
            .then(() => {

                console.log("SIGAP RANI berhasil diaktifkan sebagai PWA");

            })
            .catch((error) => {

                console.log("Service Worker gagal:", error);

            });

    });

}
