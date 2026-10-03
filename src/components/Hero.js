export function renderHero() {
  return `
    <section id="hero" class="hero-section container reveal-on-scroll is-visible">
      <div class="hero-badge-wrap">
        <span class="pulse-indicator"></span>
        <span>Disponible para proyectos & innovación digital</span>
      </div>

      <h1 class="hero-title">
        Diseñando el futuro digital: <br />
        <span class="hero-gradient-text">Interfaces intuitivas & código escalable.</span>
      </h1>

      <p class="hero-subtitle">
        Soy <strong>Nicolás</strong>, Full-Stack Developer & UI/UX Product Engineer. Graduado hace un año, con mentalidad analítica orientada a la <strong>transformación digital</strong> y la creación de experiencias web modernas donde el diseño centrado en el usuario se une a una sólida arquitectura de software.
      </p>

      <div class="hero-actions">
        <a href="#bento" class="btn-primary btn-gradient" id="btn-explore-hero">
          Explorar Tablero Bento ↓
        </a>
        <a href="#proyectos" class="btn-secondary" id="btn-projects-hero">
          Ver Proyectos ↗
        </a>
        <button id="btn-copy-email-hero" class="btn-secondary" title="Copiar correo electrónico">
          📋 Copiar Email
        </button>
      </div>
    </section>
  `;
}
