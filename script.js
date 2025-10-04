// Tahun otomatis
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll halus ke fitur
document.getElementById("ctaBtn").addEventListener("click", () => {
  const target = document.getElementById("feature");
  window.scrollTo({ top: target.offsetTop - 50, behavior: "smooth" });
});

// Tombol sapa
document.getElementById("helloBtn").addEventListener("click", () => {
  alert("Halo dari Ujang DevLab! Semoga harimu penuh inspirasi 😎");
});

// Efek muncul saat scroll
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("revealed"); }),
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Toggle tema (opsional)
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const btn = document.getElementById("themeToggle");
  btn.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});
