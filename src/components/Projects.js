import { caseStudies } from '../data/caseStudies.js';
import { inProgressProjects } from '../data/inProgressProjects.js';

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

      <!-- Sección Dedicada: Actualmente Construyendo / Lab WIP -->
      <div class="building-now-block reveal-on-scroll">
        <div class="building-now-header">
          <div class="building-header-tag-wrap">
            <span class="pulse-indicator"></span>
            <span class="section-tag" style="margin-bottom: 0;">Actualmente Construyendo • Lab WIP</span>
          </div>
          <h3 class="building-now-title">Innovaciones & Proyectos en Curso</h3>
          <p class="building-now-desc">
            Iniciativas de alto impacto en desarrollo activo: arquitectura de software, experiencia de usuario y validación con usuarios reales.
          </p>
        </div>

        <div class="building-now-grid stagger-parent">
          ${inProgressProjects.map(proj => `
            <article class="building-card reveal-on-scroll" id="building-${proj.id}">
              <div class="building-card-media">
                <img src="${proj.img}" alt="${proj.title}" loading="lazy" />
                <span class="building-badge building-badge-${proj.badgeType}">
                  ${proj.badge}
                </span>
              </div>
              <div class="building-card-body">
                <div class="building-card-meta">
                  <span class="building-phase">${proj.phase}</span>
                  <div class="building-progress-wrap" title="${proj.progress}% completado">
                    <div class="building-progress-track">
                      <div class="building-progress-fill" style="width: ${proj.progress}%;"></div>
                    </div>
                    <span class="building-progress-text">${proj.progress}%</span>
                  </div>
                </div>
                <h4 class="building-title">${proj.title}</h4>
                <p class="building-desc">${proj.description}</p>
                <div class="building-highlights">
                  ${proj.highlights.map(h => `
                    <div class="building-highlight-item">
                      <span class="building-check">✦</span>
                      <span>${h}</span>
                    </div>
                  `).join('')}
                </div>
                <div class="building-stack-row">
                  ${proj.stack.map(s => `<span class="project-tag">${s}</span>`).join('')}
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
