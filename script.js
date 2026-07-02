const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRDCyyb7vASeWR8gDo_oMJwnfJ_On4wLXs3erVi0Uehsb2ILuC5RJqJ0YbYHjuXUv6yC-8a_xAXrVCB/pub?gid=40560239&single=true&output=csv";

async function loadWebsiteData(){

    try{

        const res = await fetch(csvUrl + "&t=" + Date.now());
        const text = await res.text();

        const rows = text.trim().split("\n");

        const data = {};

        rows.forEach(row=>{

            const col = row.split(",");

            data[col[0].trim()] = col[1].trim();

        });

        document.getElementById("guru").innerHTML = data.JumlahGuru;
        document.getElementById("siswa").innerHTML = data.JumlahSiswa;
        document.getElementById("kelas").innerHTML = data.JumlahKelas;
        document.getElementById("hadir").innerHTML = data.HadirHariIni;

        document.querySelector("#pengumuman ul").innerHTML = `
            <li>📌 ${data.Pengumuman1}</li>
            <li>📌 ${data.Pengumuman2}</li>
            <li>📌 ${data.Pengumuman3}</li>
        `;

    }catch(e){

        console.log(e);

    }

}

loadWebsiteData();

setInterval(loadWebsiteData,30000);
