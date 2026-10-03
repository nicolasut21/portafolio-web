export function renderFooter() {
  return `
    <footer class="footer container">
      <div class="footer-content">
        <div>
          © ${new Date().getFullYear()} Nicolás. Diseñado & Desarrollado con <strong>Vite, Vanilla JS & CSS Moderno</strong>.
        </div>
        <div style="display: flex; gap: 1rem; align-items: center;">
          <a href="#hero" style="color: var(--accent-indigo); font-weight: 600;">Volver arriba ↑</a>
        </div>
      </div>
    </footer>
  `;
}
