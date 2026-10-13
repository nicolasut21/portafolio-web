export function renderFooter() {
  return `
    <footer class="footer container">
      <div class="footer-content">
        <div>
          <span class="footer-brand-imprint">POPEYE WEB TECH JOURNAL • VOL. 2026</span><br />
          © ${new Date().getFullYear()} <strong>Abraham Nicolás Urbano Toro</strong>. Ingeniero en Computación e Informática (UNAB). Santiago, Chile.
        </div>
        <div style="display: flex; gap: 1rem; align-items: center;">
          <a href="#hero" class="btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.75rem;">
            VOLVER ARRIBA ↑
          </a>
        </div>
      </div>
    </footer>
  `;
}
