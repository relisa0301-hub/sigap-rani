// =====================================
// SIGAP RANI V2
// APP.JS
// BAGIAN 1
// =====================================

import { auth, db } from "./firebase.js";

import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const app = document.getElementById("app");

// ================================
// LOGIN
// ================================

function tampilLogin() {

  app.innerHTML = `
  <div class="login">

      <img src="logo.png" class="logo">

      <h1>SIGAP RANI</h1>

      <p>Sistem Informasi Gadget Absensi Pelajar</p>

      <input
        id="email"
        type="email"
        placeholder="Email Guru">

      <input
        id="password"
        type="password"
        placeholder="Password">

      <button id="btnLogin">

        MASUK

      </button>

      <div id="info"></div>

  </div>
  `;

  document
    .getElementById("btnLogin")
    .onclick = login;

}

// ================================
// PROSES LOGIN
// ================================

function login() {

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  const info =
    document.getElementById("info");

  info.innerHTML = "Sedang login...";

  signInWithEmailAndPassword(
    auth,
    email,
    password
  )

  .then(() => {

    info.innerHTML = "Login berhasil";

  })

  .catch((err) => {

    info.innerHTML = err.message;

  });

}
// ================================
// DASHBOARD
// ================================

function dashboard(user) {

  app.innerHTML = `

  <header class="header">

      <div>

          <h2>SIGAP RANI</h2>

          <small>${user.email}</small>

      </div>

      <button id="logout">

          Logout

      </button>

  </header>

  <main>

      <div class="menu">

          <button id="scan">
              📷
              <br>
              Scan QR
          </button>

          <button id="siswa">
              👨‍🎓
              <br>
              Data Siswa
          </button>

          <button id="guru">
              👩‍🏫
              <br>
              Data Guru
          </button>

          <button id="kelas">
              🏫
              <br>
              Data Kelas
          </button>

          <button id="mapel">
              📚
              <br>
              Data Mapel
          </button>

          <button id="rekap">
              📊
              <br>
              Rekap
          </button>

      </div>

      <div id="content"
           style="margin-top:25px;"></div>

  </main>

  `;

  // Logout
  document
    .getElementById("logout")
    .onclick = () => {

      signOut(auth);

    };

  // Semua tombol menu
  document
    .getElementById("kelas")
    .onclick = tampilKelas;

  document
    .getElementById("scan")
    .onclick = () => {

      document.getElementById("content").innerHTML =
      "<h3>🚧 Modul Scan QR sedang dibuat...</h3>";

    };

  document
    .getElementById("siswa")
    .onclick = () => {

      document.getElementById("content").innerHTML =
      "<h3>🚧 Modul Data Siswa sedang dibuat...</h3>";

    };

  document
    .getElementById("guru")
    .onclick = () => {

      document.getElementById("content").innerHTML =
      "<h3>🚧 Modul Data Guru sedang dibuat...</h3>";

    };

  document
    .getElementById("mapel")
    .onclick = () => {

      document.getElementById("content").innerHTML =
      "<h3>🚧 Modul Data Mapel sedang dibuat...</h3>";

    };

  document
    .getElementById("rekap")
    .onclick = () => {

      document.getElementById("content").innerHTML =
      "<h3>🚧 Modul Rekap sedang dibuat...</h3>";

    };

}
// ================================
// DATA KELAS
// ================================
async function tampilKelas() {

  const content = document.getElementById("content");

  content.innerHTML = "Memuat data...";

  try {

    const snapshot = await getDocs(collection(db, "kelas"));

    console.log("Jumlah dokumen:", snapshot.size);

    if (snapshot.empty) {
      content.innerHTML = "<h3>Tidak ada data kelas.</h3>";
      return;
    }

    let html = `
      <h2>🏫 DATA KELAS</h2>

      <table border="1" cellpadding="8" cellspacing="0" width="100%">
      <tr>
        <th>No</th>
        <th>Nama Kelas</th>
        <th>Tingkat</th>
        <th>Wali Kelas</th>
      </tr>
    `;

    let no = 1;

    snapshot.forEach((doc) => {

      const d = doc.data();

      console.log(doc.id, d);

      html += `
        <tr>
          <td>${no++}</td>
          <td>${d.nama}</td>
          <td>${d.tingkat}</td>
          <td>${d.wali}</td>
        </tr>
      `;

    });

    html += "</table>";

    content.innerHTML = html;

  } catch (e) {

    console.error(e);

    content.innerHTML = `
      <h3 style="color:red;">ERROR</h3>
      <pre>${e.message}</pre>
    `;

  }

}

}
// ================================
// CEK STATUS LOGIN
// ================================

onAuthStateChanged(auth, (user) => {

  if (user) {

    dashboard(user);

  } else {

    tampilLogin();

  }

});
