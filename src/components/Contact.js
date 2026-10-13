export function renderContact() {
  return `
    <section id="contacto" class="section contact-section container">
      <div class="contact-card-box reveal-on-scroll">
        <!-- Air Mail Stamp Decoration -->
        <div class="contact-stamp-badge">
          <span>PAR AVION / AIR MAIL</span>
          <span class="stamp-code">SCL • 2026</span>
        </div>

        <div class="contact-info-col">
          <span class="section-tag" style="background: var(--pop-blue); color: #ffffff;">
            BUZÓN EDITORIAL & CONTACTO
          </span>
          <h3 class="contact-box-title">¿TIENES UN PROYECTO O UNA OPORTUNIDAD?</h3>
          <p class="contact-box-desc">
            Estoy abierto a colaboraciones técnicas, nuevos desafíos en startups y empresas tecnológicas, y proyectos donde la ingeniería de software y la visión de producto marquen una diferencia real.
          </p>

          <div class="contact-links-list">
            <a href="mailto:nicolasut21@gmail.com" class="contact-link-item" id="link-email">
              <span class="contact-icon">✉️</span>
              <span class="contact-link-text">nicolasut21@gmail.com</span>
            </a>
            <a href="tel:+56932628383" class="contact-link-item" id="link-phone">
              <span class="contact-icon">📱</span>
              <span class="contact-link-text">+56 9 3262 8383</span>
            </a>
            <div class="contact-link-item" style="cursor: default;">
              <span class="contact-icon">📍</span>
              <span class="contact-link-text">Las Condes, Santiago, Chile</span>
            </div>
            <a href="https://www.linkedin.com/in/abraham-urbano-toro/" target="_blank" rel="noopener noreferrer" class="contact-link-item" id="link-linkedin">
              <span class="contact-icon">💼</span>
              <span class="contact-link-text">linkedin.com/in/abraham-urbano-toro</span>
            </a>
            <a href="https://github.com/nicolasut21" target="_blank" rel="noopener noreferrer" class="contact-link-item" id="link-github">
              <span class="contact-icon">🐙</span>
              <span class="contact-link-text">github.com/nicolasut21</span>
            </a>
          </div>
        </div>

        <form class="contact-form" id="contact-form">
          <div class="form-group">
            <label for="form-name" class="form-label">TU NOMBRE / EMPRESA</label>
            <input type="text" id="form-name" class="form-input" placeholder="Ej. Ana Morales" required />
          </div>

          <div class="form-group">
            <label for="form-email" class="form-label">CORREO ELECTRÓNICO</label>
            <input type="email" id="form-email" class="form-input" placeholder="tu@empresa.com" required />
          </div>

          <div class="form-group">
            <label for="form-message" class="form-label">MENSAJE O DETALLE DEL PROYECTO</label>
            <textarea id="form-message" class="form-textarea" rows="4" placeholder="Cuéntame sobre tu propuesta, startup o idea..." required></textarea>
          </div>

          <button type="submit" class="btn-primary btn-gradient" id="btn-submit-form" style="justify-content: center; width: 100%; padding: 0.85rem; font-size: 0.875rem;">
            ENVIAR MENSAJE DIRECTO 🚀
          </button>
        </form>
      </div>
    </section>
  `;
}
