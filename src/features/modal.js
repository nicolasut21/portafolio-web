import { caseStudies } from '../data/caseStudies.js';

export function setupCaseStudiesModal() {
  const modal = document.querySelector('#case-modal');
  const modalArea = document.querySelector('#modal-content-area');
  const closeBtn = document.querySelector('#modal-close-btn');

  if (!modal || !modalArea || !closeBtn) return;

  function openCaseModal(caseId) {
    const cs = caseStudies.find(c => c.id === caseId);
    if (!cs) return;

    modalArea.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <span class="section-tag">${cs.role}</span>
        <h2 style="font-size: 1.75rem; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 0.5rem;">${cs.title}</h2>
        <p style="color: var(--text-secondary); font-size: 1.05rem;">${cs.subtitle}</p>
      </div>

      ${cs.extraImg ? `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
          <div style="border-radius: 16px; overflow: hidden; border: 1px solid var(--card-border); background: var(--card-bg-subtle);">
            <div style="padding: 0.6rem 1rem; font-size: 0.8125rem; font-weight: 700; color: var(--text-secondary); border-bottom: 1px solid var(--card-border);">
              🖥️ Vista Desktop (Sistema Caja & Panel General)
            </div>
            <img src="${cs.img}" alt="${cs.title} Desktop" style="width: 100%; height: auto; display: block;" />
          </div>
          <div style="border-radius: 16px; overflow: hidden; border: 1px solid var(--card-border); background: var(--card-bg-subtle);">
            <div style="padding: 0.6rem 1rem; font-size: 0.8125rem; font-weight: 700; color: var(--text-secondary); border-bottom: 1px solid var(--card-border);">
              📱 Vista Móvil (Panel General & Alertas)
            </div>
            <img src="${cs.extraImg}" alt="${cs.title} Móvil" style="width: 100%; height: auto; display: block;" />
          </div>
        </div>
      ` : `
        <div style="border-radius: 18px; overflow: hidden; margin-bottom: 2rem; border: 1px solid var(--card-border);">
          <img src="${cs.img}" alt="${cs.title}" style="width: 100%; height: auto;" />
        </div>
      `}

      <div class="modal-split-grid" style="margin-bottom: 2rem;">
        <div style="background: var(--card-bg-subtle); padding: 1.5rem; border-radius: 16px;">
          <h4 style="font-size: 0.9375rem; font-weight: 700; color: #ef4444; margin-bottom: 0.5rem;">El Desafío / Problema</h4>
          <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6;">${cs.challenge}</p>
        </div>
        <div style="background: var(--card-bg-subtle); padding: 1.5rem; border-radius: 16px;">
          <h4 style="font-size: 0.9375rem; font-weight: 700; color: #10b981; margin-bottom: 0.5rem;">La Solución de Producto</h4>
          <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6;">${cs.solution}</p>
        </div>
      </div>

      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.125rem; font-weight: 700; margin-bottom: 1rem;">Impacto & Métricas Clave</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.65rem;">
          ${cs.impact.map(imp => `
            <li style="display: flex; align-items: center; gap: 0.75rem; font-size: 0.9375rem; font-weight: 500; color: var(--text-primary);">
              <span style="color: var(--accent-indigo); font-weight: 800;">✓</span>
              <span>${imp}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div>
        <h4 style="font-size: 0.875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 0.75rem;">Tecnologías & Herramientas</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${cs.stack.map(st => `
            <span style="font-size: 0.8125rem; font-weight: 600; padding: 0.35rem 0.8rem; background: var(--card-bg-subtle); border-radius: 8px;">
              ${st}
            </span>
          `).join('')}
        </div>
      </div>
    `;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-case]');
    if (trigger) {
      openCaseModal(trigger.dataset.case);
    }
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
}
