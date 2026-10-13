import { caseStudies } from '../data/caseStudies.js';
import { inProgressProjects } from '../data/inProgressProjects.js';

export function renderProjects() {
  return `
    <section id="proyectos" class="section projects-section container">
      <div class="section-header reveal-on-scroll">
        <span class="section-tag">★ FEATURED STORIES & PROYECTOS</span>
        <h2 class="section-title">CASOS DE ESTUDIO EN PRODUCCIÓN</h2>
        <p class="section-description">
          Reportajes técnicos de proyectos reales: arquitectura full-stack, digitalización empresarial e impacto cuantificable de negocio.
        </p>
      </div>

      <div class="projects-grid stagger-parent">
        ${caseStudies.map((cs, idx) => `
          <article class="project-card reveal-on-scroll" id="project-${cs.id}">
            <div class="project-card-top-bar">
              <span class="project-issue-num">FEATURE #0${idx + 1}</span>
              <span class="project-metric-pill">${cs.metric}</span>
            </div>
            <div class="project-img-wrapper">
              <img src="${cs.img}" alt="${cs.title}" loading="lazy" />
            </div>
            <div class="project-card-body">
              <div class="project-tags">
                ${cs.tags.slice(0, 4).map(t => `<span class="project-tag">${t}</span>`).join('')}
              </div>
              <h3 class="project-title">${cs.title}</h3>
              <p class="project-description">${cs.subtitle}</p>
              <div class="project-metrics-row">
                <span class="project-role-tag">${cs.role}</span>
                <button class="view-case-btn" data-case="${cs.id}">
                  VER CASO ↗
                </button>
              </div>
            </div>
          </article>
        `).join('')}
      </div>

      <!-- Sección Town Talk / Lab WIP -->
      <div class="building-now-block reveal-on-scroll">
        <div class="building-now-header">
          <div class="building-header-tag-wrap">
            <span class="pulse-indicator"></span>
            <span class="section-tag" style="background: var(--pop-orange); color: #ffffff; margin-bottom: 0;">
              TOWN TALK • EN TALLER & DESARROLLO
            </span>
          </div>
          <h3 class="building-now-title">INICIATIVAS EN CONSTRUCCIÓN ACTIVA</h3>
          <p class="building-now-desc">
            Nuevas soluciones en proceso de prototipado, arquitectura y validación con usuarios reales (EdTech & Deporte).
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
                <div class="building-phase-indicator">
                  <span class="phase-label">FASE ACTUAL:</span>
                  <span class="phase-value">${proj.phase}</span>
                </div>
                <h4 class="building-title">${proj.title}</h4>
                <p class="building-desc">${proj.subtitle}</p>
                <div class="building-progress-bar-wrap">
                  <div class="building-progress-fill" style="width: ${proj.progress}%;"></div>
                </div>
                <div class="building-highlights-list">
                  ${proj.highlights.map(h => `<div class="building-highlight-item">✓ ${h}</div>`).join('')}
                </div>
                <div class="building-stack-tags">
                  ${proj.stack.map(st => `<span class="building-stack-pill">${st}</span>`).join('')}
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
