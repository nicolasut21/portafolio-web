export function renderHero() {
  return `
    <section id="hero" class="hero-section container reveal-on-scroll is-visible">
      <div class="hero-issue-meta">
        <span class="meta-dot">●</span>
        <span class="meta-text">POPEYE TECH JOURNAL • VOL. 01 • ISSUE 2026 • SANTIAGO, CL</span>
      </div>

      <div class="hero-cover-tag">
        <span>★ SPECIAL COVER STORY ★</span>
      </div>

      <h1 class="hero-title">
        INGENIERÍA & PRODUCT VISION:
        <span class="hero-highlight-phrase">SOFTWARE ESCALABLE PARA STARTUPS.</span>
      </h1>

      <!-- Editorial Sticker Tags -->
      <div class="hero-stickers-row">
        <span class="popeye-sticker sticker-unab">🎓 TITULADO UNAB</span>
        <span class="popeye-sticker sticker-yc">🚀 YC STARTUP SCHOOL</span>
        <span class="popeye-sticker sticker-erp">💼 ERP SAAS & ODOO</span>
        <span class="popeye-sticker sticker-ai">🤖 IA GENERATIVA</span>
        <span class="popeye-sticker sticker-loc">📍 LAS CONDES, SANTIAGO</span>
      </div>

      <p class="hero-subtitle">
        Soy <strong>Abraham Nicolás Urbano Toro</strong>, Ingeniero en Computación e Informática y Desarrollador Full Stack. Con visión de producto orientada al <strong>escalamiento de startups tecnológicas (YC Startup School)</strong>, construyo soluciones web y móviles modernas (React, Node.js, React Native, MongoDB), automatizo flujos con <strong>IA Generativa</strong> y lidero la digitalización integral de procesos empresariales (ERP / SaaS).
      </p>

      <div class="hero-actions">
        <a href="#bento" class="btn-primary" id="btn-explore-hero">
          Ver Tablero Editorial ↓
        </a>
        <a href="#proyectos" class="btn-secondary" id="btn-projects-hero">
          Casos de Estudio ↗
        </a>
        <button id="btn-copy-email-hero" class="btn-secondary" title="Copiar correo: nicolasut21@gmail.com">
          📋 Copiar Email
        </button>
      </div>
    </section>
  `;
}
