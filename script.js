function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// tombol menu sederhana (mobile)
document.getElementById("menuBtn").addEventListener("click", function () {
  const nav = document.querySelector("nav");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
});
