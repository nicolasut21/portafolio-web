export function renderAbout() {
  return `
    <section id="metodologia" class="section about-section container">
      <div class="about-grid">
        <div class="about-photo-card reveal-on-scroll">
          <div class="about-highlight-box">
            <div style="font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.5rem; opacity: 0.9;">
              Perfil Profesional
            </div>
            <h3 class="about-role-title">Nicolás</h3>
            <p class="about-role-sub">
              Full-Stack Developer & UI/UX Product Engineer.<br />
              Especializado en transformar ideas complejas en interfaces simples y arquitecturas robustas.
            </p>
            <div style="margin-top: 1.5rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <span style="font-size: 0.75rem; background: rgba(255,255,255,0.2); padding: 0.3rem 0.75rem; border-radius: 9999px;">🎓 Graduado Universitario</span>
              <span style="font-size: 0.75rem; background: rgba(255,255,255,0.2); padding: 0.3rem 0.75rem; border-radius: 9999px;">💡 Innovación Continua</span>
            </div>
          </div>
        </div>

        <div class="about-content-text reveal-on-scroll">
          <span class="section-tag">Mi Filosofía de Trabajo</span>
          <h2 class="section-title">El puente entre la empatía del diseño y el rigor de la ingeniería.</h2>
          <p>
            Mi formación y pasión se encuentran en el punto exacto donde convergen el <strong>diseño UI/UX y el desarrollo Full-Stack</strong>. No considero que el diseño y el código sean disciplinas aisladas: una gran experiencia de usuario depende tanto de un flujo visual intuitivo como de tiempos de respuesta ultrarrápidos y una base de datos optimizada.
          </p>
          <p>
            Me apasiona la <strong>transformación digital</strong> y el análisis de datos de comportamiento. Como profesional recién egresado hace un año, aporto una perspectiva fresca, metodologías modernas, proactividad y una enorme motivación para resolver problemas complejos con soluciones elegantes.
          </p>

          <div class="about-pillars-grid">
            <div class="pillar-card">
              <div class="pillar-icon">📊</div>
              <div class="pillar-title">Mentalidad Analítica</div>
              <div class="pillar-desc">Toma de decisiones respaldada por métricas, pruebas de usabilidad y datos reales.</div>
            </div>
            <div class="pillar-card">
              <div class="pillar-icon">⚡</div>
              <div class="pillar-title">Agilidad Full-Stack</div>
              <div class="pillar-desc">Capacidad de materializar un prototipo de Figma directamente en código funcional y escalable.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
