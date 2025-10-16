// ====== Ujang DevLab Script.js ======

// Toggle navigasi mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('primary-navigation');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !expanded);
    navMenu.classList.toggle('open');
  });
}

// Dropdown Sosial Media
document.querySelectorAll('.has-dropdown .dropdown-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true' || false;
    btn.setAttribute('aria-expanded', !expanded);
    btn.nextElementSibling.classList.toggle('open');
  });
});

// Toggle tema (dark / light)
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });

  // Set tema awal sesuai preferensi
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
}

// Reveal efek saat scroll
const reveals = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) el.classList.add('active');
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Tombol “Sapa Ujang”
const helloBtn = document.getElementById('helloBtn');
if (helloBtn) {
  helloBtn.addEventListener('click', () => {
    window.open('https://wa.me/6282310078067?text=Halo%20Ujang%20DevLab%20👋', '_blank');
  });
}

// Update tahun footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
