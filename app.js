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

  const content =
    document.getElementById("content");

  content.innerHTML =
    "<h3>Memuat data kelas...</h3>";

  try {

    const snapshot =
      await getDocs(
        collection(db, "kelas")
      );

    let html = `

      <h2>🏫 DATA KELAS</h2>

      <table
      style="
      width:100%;
      border-collapse:collapse;
      margin-top:20px;
      ">

      <tr
      style="
      background:#800000;
      color:white;
      ">

      <th style="padding:10px;">No</th>

      <th>Nama Kelas</th>

      <th>Tingkat</th>

      <th>Wali Kelas</th>

      </tr>

    `;

    let no = 1;

    snapshot.forEach((doc) => {

      const d = doc.data();

      html += `

      <tr>

      <td
      style="
      border:1px solid #ddd;
      padding:10px;
      text-align:center;
      ">

      ${no++}

      </td>

      <td
      style="
      border:1px solid #ddd;
      padding:10px;
      ">

      ${d.nama}

      </td>

      <td
      style="
      border:1px solid #ddd;
      padding:10px;
      ">

      ${d.tingkat}

      </td>

      <td
      style="
      border:1px solid #ddd;
      padding:10px;
      ">

      ${d.wali}

      </td>

      </tr>

      `;

    });

    html += "</table>";

    content.innerHTML = html;

  } catch (err) {

    content.innerHTML = `

    <h3 style="color:red;">

    Gagal membaca Firestore

    </h3>

    <pre>

${err}

    </pre>

    `;

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
