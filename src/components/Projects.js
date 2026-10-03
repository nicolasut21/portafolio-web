import { caseStudies } from '../data/caseStudies.js';

export function renderProjects() {
  return `
    <section id="proyectos" class="section projects-section container">
      <div class="section-header reveal-on-scroll">
        <span class="section-tag">Portafolio Seleccionado</span>
        <h2 class="section-title">Casos de estudio & proyectos aplicados.</h2>
        <p class="section-description">
          Proyectos reales donde combiné diseño centrado en el usuario, desarrollo full-stack e impacto cuantificable en producto.
        </p>
      </div>

      <div class="projects-grid stagger-parent">
        ${caseStudies.map(cs => `
          <article class="project-card reveal-on-scroll" id="project-${cs.id}">
            <div class="project-img-wrapper">
              <img src="${cs.img}" alt="${cs.title}" loading="lazy" />
            </div>
            <div class="project-card-body">
              <div class="project-tags">
                ${cs.tags.slice(0, 3).map(t => `<span class="project-tag">${t}</span>`).join('')}
              </div>
              <h3 class="project-title">${cs.title}</h3>
              <p class="project-description">${cs.subtitle}</p>
              <div class="project-metrics-row">
                <span class="project-metric-highlight">${cs.metric}</span>
                <button class="view-case-btn" data-case="${cs.id}">
                  Ver Caso ↗
                </button>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}
