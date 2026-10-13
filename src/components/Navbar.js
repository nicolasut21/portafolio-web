export function renderNavbar() {
  return `
    <!-- Barra de progreso de scroll -->
    <div class="scroll-progress-bar" id="scroll-progress" aria-hidden="true"></div>

    <!-- Navegación Editorial -->
    <header class="navbar">
      <nav class="nav-content" aria-label="Navegación principal">
        <a href="#hero" class="nav-brand" id="brand-link">
          <span class="nav-brand-badge">VOL. 2026</span>
          <span class="nav-brand-text">NICOLÁS URBANO</span>
          <span class="nav-brand-sub">SOFTWARE & PRODUCT JOURNAL</span>
        </a>

        <ul class="nav-links">
          <li><a href="#bento" class="nav-link"><span class="nav-num">01</span> VISIÓN</a></li>
          <li><a href="#proyectos" class="nav-link"><span class="nav-num">02</span> CASOS</a></li>
          <li><a href="#metodologia" class="nav-link"><span class="nav-num">03</span> ENFOQUE</a></li>
          <li><a href="#contacto" class="nav-link"><span class="nav-num">04</span> CONTACTO</a></li>
        </ul>

        <div class="nav-actions">
          <button id="theme-toggle" class="theme-toggle-btn" aria-label="Cambiar tema claro u oscuro" title="Alternar tema">
            <svg id="theme-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
          <a href="#contacto" class="btn-primary desktop-cta" id="btn-cta-nav">Hablemos ↗</a>
          <button id="mobile-menu-btn" class="mobile-menu-btn" aria-label="Abrir menú" aria-expanded="false">
            <svg id="hamburger-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>

      <!-- Menú desplegable para móviles -->
      <div class="mobile-menu-drawer" id="mobile-menu-drawer" aria-hidden="true">
        <div class="mobile-menu-header">
          <span class="mobile-edition-tag">SPECIAL ISSUE • 2026</span>
        </div>
        <ul class="mobile-menu-list">
          <li><a href="#hero" class="mobile-menu-link"><span>00</span> PORTADA / INICIO</a></li>
          <li><a href="#bento" class="mobile-menu-link"><span>01</span> VISIÓN EDITORIAL</a></li>
          <li><a href="#proyectos" class="mobile-menu-link"><span>02</span> CASOS DE ESTUDIO</a></li>
          <li><a href="#metodologia" class="mobile-menu-link"><span>03</span> PERFIL & ENFOQUE</a></li>
          <li><a href="#contacto" class="mobile-menu-link"><span>04</span> BUZÓN DE CONTACTO</a></li>
        </ul>
        <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1.5px solid var(--card-border);">
          <a href="#contacto" class="btn-primary btn-gradient mobile-menu-link" style="width: 100%; justify-content: center; text-align: center;">
            Hablemos Directo ↗
          </a>
        </div>
      </div>
    </header>
  `;
}
