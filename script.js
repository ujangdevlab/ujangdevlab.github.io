// Tahun otomatis di footer
document.getElementById('year').textContent = new Date().getFullYear();

// CTA hero
document.getElementById('ctaBtn').addEventListener('click', () => {
  window.scrollTo({ top: document.getElementById('feature').offsetTop - 60, behavior: 'smooth' });
});

// Tombol sapa
document.getElementById('helloBtn')?.addEventListener('click', () => {
  alert('Halo dari Ujang DevLab! Semoga harimu produktif 😎');
});

// Reveal on scroll (IntersectionObserver)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Toggle tema (optional: hanya ubah background accent sedikit)
const toggle = document.getElementById('themeToggle');
let alt = false;
toggle.addEventListener('click', () => {
  alt = !alt;
  document.body.style.background =
    alt
      ? 'radial-gradient(1200px 600px at 10% -10%, rgba(34,211,238,.16), transparent 60%), radial-gradient(1000px 500px at 90% 10%, rgba(124,58,237,.14), transparent 60%), #0b0f16'
      : '';
});
