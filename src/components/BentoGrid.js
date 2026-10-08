export function renderBentoGrid() {
  return `
    <section id="bento" class="section bento-section container">
      <div class="section-header reveal-on-scroll">
        <span class="section-tag">Tablero de Innovación</span>
        <h2 class="section-title">Ecosistema interactivo de diseño & producto.</h2>
        <p class="section-description">
          Un recorrido integral por mi metodología: desde prototipos interactivos y métricas de negocio hasta código limpio y tecnologías de vanguardia.
        </p>
      </div>

      <div class="bento-grid stagger-parent">
        <!-- Bento 1: Proyecto Destacado (SafeTrails) -->
        <article class="bento-card bento-featured reveal-on-scroll" id="card-featured-safetrails">
          <div class="bento-card-header">
            <span class="bento-pill bento-pill-indigo">Caso Destacado</span>
            <span class="bento-pill">PWA + Leaflet + React 19</span>
          </div>
          <h3 class="bento-card-title">SafeTrails: PWA de Seguridad & Tracking</h3>
          <p class="bento-card-desc">
            Geolocalización en tiempo real con motor reactivo de geofencing (AlarmEngine), trazado dinámico de rutas con Leaflet y arquitectura offline en React 19.
          </p>
          <div class="project-preview-frame">
            <img src="./projects/safetrails_desktop.jpg" alt="Mockup de la plataforma SafeTrails" loading="lazy" />
          </div>
          <div class="bento-featured-footer">
            <span class="bento-featured-metric">Métrica: Alertas en Terreno</span>
            <button class="view-case-btn" data-case="safetrails">Explorar Caso Detallado →</button>
          </div>
        </article>

        <!-- Bento 2: Prototipado Interactivo -->
        <article class="bento-card bento-prototype reveal-on-scroll" id="card-prototype">
          <div class="bento-card-header">
            <span class="bento-pill bento-pill-indigo">Prototipo Interactivo</span>
            <span id="proto-status" style="font-size: 0.75rem; font-weight: 600; color: var(--accent-indigo);">● Vista Activa</span>
          </div>
          <h3 class="bento-card-title">Interacción Multidispositivo</h3>
          <p class="bento-card-desc">
            Explora cómo respondo a los patrones de usabilidad tanto en interfaces móviles de pulgar como en dashboards desktop de alta densidad.
          </p>
          
          <div class="prototype-tabs">
            <button class="proto-tab-btn active" data-view="mobile">Móvil</button>
            <button class="proto-tab-btn" data-view="desktop">Desktop</button>
            <button class="proto-tab-btn" data-view="flow">Flujo UX</button>
          </div>

          <div class="prototype-screen-viewport" id="proto-viewport">
            <img id="proto-img" src="./projects/safetrails_mobile.jpg" alt="Vista de prototipo interactivo" />
          </div>
        </article>

        <!-- Bento 3: Proceso de Trabajo (4 Pasos) -->
        <article class="bento-card bento-process reveal-on-scroll" id="card-process">
          <div class="bento-card-header">
            <span class="bento-pill bento-pill-indigo">Metodología de Innovación</span>
            <span style="font-size: 0.8125rem; color: var(--text-muted);">Haz clic en cada fase</span>
          </div>
          <h3 class="bento-card-title">El Ciclo de Transformación Digital</h3>
          <p class="bento-card-desc" id="process-lead-text">
            Un enfoque analítico e iterativo que garantiza que cada línea de código responda a un problema real de usuario.
          </p>

          <div class="process-steps-grid">
            <div class="process-step-item active" data-step="define">
              <div class="step-num">01</div>
              <div class="step-name">DEFINE</div>
              <div class="step-detail">Research, analítica & objetivos</div>
            </div>
            <div class="process-step-item" data-step="design">
              <div class="step-num">02</div>
              <div class="step-name">DESIGN</div>
              <div class="step-detail">Arquitectura & Design Systems</div>
            </div>
            <div class="process-step-item" data-step="build">
              <div class="step-num">03</div>
              <div class="step-name">BUILD</div>
              <div class="step-detail">Desarrollo Full-Stack modular</div>
            </div>
            <div class="process-step-item" data-step="optimize">
              <div class="step-num">04</div>
              <div class="step-name">OPTIMIZE</div>
              <div class="step-detail">Pruebas A/B & medición de KPIs</div>
            </div>
          </div>
        </article>

        <!-- Bento 4: Métricas & Enfoque Analítico -->
        <article class="bento-card bento-metrics reveal-on-scroll" id="card-metrics">
          <div class="bento-card-header">
            <span class="bento-pill bento-pill-indigo">Impacto Analítico</span>
            <span class="metric-badge-trend">↑ Rendimiento</span>
          </div>
          <div class="metric-kpi-wrap">
            <div class="metric-big-num" id="counter-metric">38%</div>
            <div style="font-size: 0.875rem; font-weight: 600; color: var(--text-secondary);">Incremento en Retención</div>
          </div>
          <p class="bento-card-desc" style="font-size: 0.8125rem;">
            Medición constante con telemetría de producto para garantizar que la experiencia sea fluida y rentable.
          </p>
          
          <svg class="sparkline-svg" viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 70 C 40 65, 70 80, 110 50 C 150 20, 190 45, 230 25 C 260 10, 280 18, 300 8" stroke="url(#sparkline-grad)" stroke-width="4" stroke-linecap="round"/>
            <path d="M0 70 C 40 65, 70 80, 110 50 C 150 20, 190 45, 230 25 C 260 10, 280 18, 300 8 L 300 90 L 0 90 Z" fill="url(#sparkline-fill)" opacity="0.2"/>
            <defs>
              <linearGradient id="sparkline-grad" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                <stop stop-color="#2563EB"/>
                <stop offset="1" stop-color="#3B82F6"/>
              </linearGradient>
              <linearGradient id="sparkline-fill" x1="0" y1="0" x2="0" y2="90" gradientUnits="userSpaceOnUse">
                <stop stop-color="#2563EB"/>
                <stop offset="1" stop-color="transparent"/>
              </linearGradient>
            </defs>
          </svg>
        </article>

        <!-- Bento 5: Live Code Preview -->
        <article class="bento-card bento-code reveal-on-scroll" id="card-code">
          <div class="bento-card-header">
            <span class="bento-pill">Live Code Preview</span>
            <button id="btn-copy-code" class="btn-secondary" style="padding: 0.25rem 0.65rem; font-size: 0.75rem;" title="Copiar código al portapapeles">
              Copiar
            </button>
          </div>
          <div class="code-box-header">
            <div class="code-tabs">
              <button class="code-tab-btn active" data-lang="react">React Hook</button>
              <button class="code-tab-btn" data-lang="node">Node.js API</button>
              <button class="code-tab-btn" data-lang="sql">SQL Query</button>
              <button class="code-tab-btn" data-lang="design">Tokens CSS</button>
            </div>
          </div>
          <pre class="code-editor-viewport"><code id="code-display"></code></pre>
        </article>

        <!-- Bento 6: Stack Tecnológico Interactivo -->
        <article class="bento-card bento-stack reveal-on-scroll" id="card-stack">
          <div class="bento-card-header">
            <span class="bento-pill bento-pill-indigo">Stack Interactivo</span>
            <span style="font-size: 0.75rem; color: var(--text-muted);" id="stack-count">20 Tecnologías</span>
          </div>
          <h3 class="bento-card-title">Habilidades & Ecosistema</h3>
          <div class="stack-filter-tabs">
            <button class="stack-tab-btn active" data-filter="frontend">Frontend</button>
            <button class="stack-tab-btn" data-filter="backend">Backend</button>
            <button class="stack-tab-btn" data-filter="design">UI/UX & Design</button>
            <button class="stack-tab-btn" data-filter="tools">Cloud & Herramientas</button>
          </div>
          <div class="stack-pills-container" id="stack-pills-wrap">
            <!-- Dynamically populated -->
          </div>
        </article>
      </div>
    </section>
  `;
}
