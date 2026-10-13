export function renderAbout() {
  return `
    <section id="metodologia" class="section about-section container">
      <div class="about-grid">
        <div class="about-photo-card reveal-on-scroll">
          <div class="about-highlight-box">
            <div style="font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.5rem; opacity: 0.9;">
              Perfil Profesional
            </div>
            <h3 class="about-role-title">Abraham Nicolás Urbano Toro</h3>
            <p class="about-role-sub">
              Ingeniero en Computación e Informática (UNAB — Titulado).<br />
              Desarrollador Full Stack con visión de producto y mentalidad orientada a la creación y escalamiento de startups tecnológicas.
            </p>
            <div style="margin-top: 1.25rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <span style="font-size: 0.75rem; background: rgba(255,255,255,0.2); padding: 0.3rem 0.75rem; border-radius: 9999px;">🎓 Titulado UNAB</span>
              <span style="font-size: 0.75rem; background: rgba(255,255,255,0.2); padding: 0.3rem 0.75rem; border-radius: 9999px;">🚀 YC Startup School</span>
              <span style="font-size: 0.75rem; background: rgba(255,255,255,0.2); padding: 0.3rem 0.75rem; border-radius: 9999px;">🤖 IA Generativa</span>
              <span style="font-size: 0.75rem; background: rgba(255,255,255,0.2); padding: 0.3rem 0.75rem; border-radius: 9999px;">👥 +3 Años Tutor UNAB</span>
            </div>
          </div>
        </div>

        <div class="about-content-text reveal-on-scroll">
          <span class="section-tag">Propuesta de Valor & Trayectoria</span>
          <h2 class="section-title">Ingeniería rigurosa, mentalidad de producto y aceleración tecnológica.</h2>
          <p>
            Cuento con experiencia en el diseño e implementación de aplicaciones web y móviles utilizando <strong>React, Node.js, MongoDB, React Native y JavaScript</strong>, especializándome en integración de APIs, automatización de flujos y construcción de soluciones tecnológicas orientadas al negocio.
          </p>
          <p>
            Poseo experiencia práctica en <strong>sistemas ERP y plataformas de gestión (Odoo / SaaS)</strong>, además de un alto dominio de herramientas de <strong>Inteligencia Artificial generativa</strong> (ChatGPT, Claude, Gemini y Copilot) aplicadas a la aceleración de ciclos de desarrollo y prototipado mediante ingeniería de prompts. Actualmente profundizo en metodologías de validación y crecimiento en <strong>Startup School de Y Combinator</strong>.
          </p>
          <p>
            Con <strong>más de 3 años de trayectoria en mentoría académica y difusión en la Universidad Andrés Bello</strong>, aporto un fuerte entendimiento del usuario en entornos formativos (EdTech), capacidad de liderazgo técnico y un firme compromiso por generar impacto real mediante la tecnología.
          </p>

          <div class="about-pillars-grid">
            <div class="pillar-card">
              <div class="pillar-icon">🚀</div>
              <div class="pillar-title">Visión de Producto & Startups</div>
              <div class="pillar-desc">Metodologías de validación ágil, product management y escalamiento inspiradas en Y Combinator.</div>
            </div>
            <div class="pillar-card">
              <div class="pillar-icon">🤖</div>
              <div class="pillar-title">IA Generativa & Prompts</div>
              <div class="pillar-desc">Aceleración de ciclos de ingeniería con LLMs para desarrollo, refactorización y arquitectura de software.</div>
            </div>
            <div class="pillar-card">
              <div class="pillar-icon">💼</div>
              <div class="pillar-title">Sistemas ERP & Gestión SaaS</div>
              <div class="pillar-desc">Digitalización de empresas de baja adopción tecnológica, flujos de caja, stock y principios Odoo.</div>
            </div>
            <div class="pillar-card">
              <div class="pillar-icon">👥</div>
              <div class="pillar-title">Mentoría & Liderazgo EdTech</div>
              <div class="pillar-desc">+3 años en docencia y tutoría universitaria, comunicando ideas complejas con máxima claridad.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
