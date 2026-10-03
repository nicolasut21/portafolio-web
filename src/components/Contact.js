export function renderContact() {
  return `
    <section id="contacto" class="section contact-section container">
      <div class="contact-card-box reveal-on-scroll">
        <div class="contact-info-col">
          <span class="section-tag">Iniciemos una Conversación</span>
          <h3>¿Tienes un proyecto en mente o una oportunidad de equipo?</h3>
          <p style="color: var(--text-secondary); line-height: 1.6;">
            Estoy abierto a colaboraciones, nuevos retos profesionales en innovación digital y proyectos donde pueda aportar valor tanto en diseño como en desarrollo.
          </p>

          <div class="contact-links-list">
            <a href="mailto:nicolasut21@gmail.com" class="contact-link-item" id="link-email">
              <span>✉️</span>
              <span>nicolasut21@gmail.com</span>
            </a>
            <a href="https://github.com/nicolasut21" target="_blank" rel="noopener noreferrer" class="contact-link-item" id="link-github">
              <span>🐙</span>
              <span>github.com/nicolasut21</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="contact-link-item" id="link-linkedin">
              <span>💼</span>
              <span>linkedin.com/in/nicolas</span>
            </a>
          </div>
        </div>

        <form class="contact-form" id="contact-form">
          <div class="form-group">
            <label for="form-name" class="form-label">Tu Nombre</label>
            <input type="text" id="form-name" class="form-input" placeholder="Ej. Ana Morales" required />
          </div>

          <div class="form-group">
            <label for="form-email" class="form-label">Tu Correo Electrónico</label>
            <input type="email" id="form-email" class="form-input" placeholder="tu@empresa.com" required />
          </div>

          <div class="form-group">
            <label for="form-message" class="form-label">Mensaje o Detalle del Proyecto</label>
            <textarea id="form-message" class="form-textarea" rows="4" placeholder="Cuéntame sobre tu propuesta o idea..." required></textarea>
          </div>

          <button type="submit" class="btn-primary btn-gradient" id="btn-submit-form" style="justify-content: center; width: 100%; padding: 0.85rem;">
            Enviar Mensaje Directo 🚀
          </button>
        </form>
      </div>
    </section>
  `;
}
