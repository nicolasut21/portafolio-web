import './style.css';

// Project Case Studies Data
const caseStudies = [
  {
    id: 'maldonado',
    title: 'Ferretería Maldonado — Sistema POS & Control de Negocio',
    subtitle: 'Plataforma integral de punto de venta, gestión de inventario y caja en tiempo real para optimizar la toma de decisiones comerciales.',
    role: 'Full-Stack Developer & UI/UX Designer',
    tags: ['React', 'Node.js', 'MongoDB', 'Vercel', 'Render'],
    metric: 'Control Total & Toma de Decisiones',
    img: './projects/maldonado.png',
    extraImg: './projects/maldonado_mobile.png',
    summary: 'Sistema web a medida desarrollado para Ferretería Maldonado (sucursal Las Cabras). Permitió transformar una operación con nula visibilidad en un entorno digitalizado con control integral de ventas diarias y mensuales, caja, productos bajo stock crítico, cotizaciones y despachos.',
    challenge: 'El negocio operaba con cero control sistematizado de ventas, inventario y finanzas diarias. Las existencias críticas se detectaban tarde provocando quiebres de stock, y no existían métricas centralizadas para evaluar el rendimiento ni tomar decisiones comerciales con certeza.',
    solution: 'Desarrollo de una solución Full-Stack con React en frontend (desplegado en Vercel) y Node.js con Express en backend (desplegado en Render), conectado a MongoDB. Arquitectura con dashboard de KPIs en tiempo real, alertas automáticas para productos con bajo stock, y una interfaz limpia y responsiva adaptada a mostrador y móvil.',
    impact: [
      'Transición de cero control a un manejo 100% digital y centralizado del negocio',
      'Visibilidad en tiempo real de ingresos diarios y mensuales ($1.374.520+ monitoreados)',
      'Alertas tempranas de stock crítico evitando quiebres de inventario en mostrador',
      'Diseño 100% responsivo para operar en mostrador (desktop) y en movilidad (smartphone)'
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel', 'Render', 'REST API', 'CSS Responsivo']
  },
  {
    id: 'fintech',
    title: 'Luma Fintech — Ecosistema Bancario & Pagos Inteligentes',
    subtitle: 'Rediseño de producto digital móvil y web con enfoque en reducción de fricción transaccional.',
    role: 'Lead UI/UX & Full-Stack Developer',
    tags: ['UI/UX', 'React Native', 'Node.js', 'PostgreSQL', 'Design Systems'],
    metric: '+38% Tasa de Conversión',
    img: './projects/fintech.jpg',
    summary: 'Luma es una solución financiera de última generación diseñada para simplificar el flujo de pagos y presupuestos personales mediante una interfaz minimalista, accesible y transparente.',
    challenge: 'Los usuarios experimentaban una tasa de abandono del 42% en la pantalla de confirmación de transferencia bancaria debido a una sobrecarga cognitiva de pasos e interfaces poco claras.',
    solution: 'Implementación de un flujo de checkout en 4 pasos simplificados con micro-interacciones, retroalimentación táctil y un backend optimizado que redujo la latencia de respuesta de 420ms a 48ms.',
    impact: [
      '+38% incremento en transferencias completadas con éxito',
      '-65% reducción en tickets de soporte técnico sobre dudas en transferencias',
      'Puntuación de usabilidad (SUS) incrementada de 64 a 89 puntos'
    ],
    stack: ['React 18', 'TypeScript', 'Node.js', 'Express', 'Figma', 'TailwindCSS Tokens']
  },
  {
    id: 'design-system',
    title: 'Neo Commerce — Design System Modular & Plataforma Headless',
    subtitle: 'Arquitectura de componentes unificada para acelerar el desarrollo y mantener coherencia de marca.',
    role: 'Product Designer & Frontend Architect',
    tags: ['Design System', 'UI/UX', 'Figma Tokens', 'Vue/React', 'Storybook'],
    metric: '4x Velocidad de Desarrollo',
    img: './projects/design_system.jpg',
    summary: 'Creación de un sistema de diseño integral y biblioteca de componentes reutilizables orientado a plataformas e-commerce con más de 120 módulos accesibles (WCAG AA).',
    challenge: 'Equipos dispersos creaban componentes duplicados sin alineación estética, generando inconsistencias visuales en checkout y aumento de deuda técnica en frontend.',
    solution: 'Diseño e implementación de un Design System en Figma con tokens sincronizados automáticamente mediante scripts de CI/CD hacia paquetes npm de React y CSS variables.',
    impact: [
      'Reducción del 70% en tiempo de entrega de nuevas funcionalidades',
      '100% de cumplimiento en directrices de accesibilidad WCAG 2.1 AA',
      'Adopción completa por 3 equipos interdisciplinarios en menos de 2 meses'
    ],
    stack: ['Figma', 'Design Tokens', 'Storybook', 'Vanilla CSS Custom Properties', 'GitHub Actions']
  },
  {
    id: 'analytics',
    title: 'Aura Analytics — Dashboard SaaS de Transformación Digital',
    subtitle: 'Plataforma B2B para visualización y análisis predictivo de procesos de modernización digital.',
    role: 'Full-Stack Engineer & Data UX Designer',
    tags: ['Analytics', 'Data Viz', 'Fastify', 'Chart.js / D3', 'Docker'],
    metric: '<48ms Latencia de API',
    img: './projects/analytics.jpg',
    summary: 'Plataforma de inteligencia de negocio que traduce métricas complejas de adopción tecnológica y eficiencia operativa en paneles claros para toma de decisiones ejecutivas.',
    challenge: 'Los reportes de transformación digital requerían consolidar datos dispersos de múltiples fuentes con tiempos de carga superiores a 5 segundos.',
    solution: 'Construcción de un dashboard responsivo con arquitectura de microservicios ligera, consultas SQL optimizadas con indexación y gráficos interactivos de alto rendimiento.',
    impact: [
      'Visualización en tiempo real de más de 150,000 puntos de datos sin congelamiento',
      'Aceleración de 5x en la generación de reportes ejecutivos mensuales',
      'Satisfacción de usuario superior al 98% en encuestas trimestrales'
    ],
    stack: ['JavaScript ESNext', 'PostgreSQL', 'Docker', 'D3.js', 'Vite', 'RESTful API']
  }
];

// Tech stack data for interactive filtering
const techStack = [
  { name: 'JavaScript / ESNext', category: 'frontend', icon: '⚡' },
  { name: 'TypeScript', category: 'frontend', icon: '🔷' },
  { name: 'React & Hooks', category: 'frontend', icon: '⚛️' },
  { name: 'HTML5 Semántico', category: 'frontend', icon: '📄' },
  { name: 'CSS3 / Variables & Grid', category: 'frontend', icon: '🎨' },
  { name: 'Node.js', category: 'backend', icon: '🟢' },
  { name: 'MongoDB', category: 'backend', icon: '🍃' },
  { name: 'Express / REST APIs', category: 'backend', icon: '🚀' },
  { name: 'PostgreSQL & SQL', category: 'backend', icon: '🐘' },
  { name: 'Arquitectura Limpia', category: 'backend', icon: '🏛️' },
  { name: 'Figma & Prototipado', category: 'design', icon: '🎯' },
  { name: 'Design Systems & Tokens', category: 'design', icon: '📐' },
  { name: 'Investigación de Usuarios (UX)', category: 'design', icon: '🔍' },
  { name: 'Wireframing & UI Flow', category: 'design', icon: '✏️' },
  { name: 'Vercel & Render', category: 'tools', icon: '▲' },
  { name: 'Git & GitHub Actions', category: 'tools', icon: '🐙' },
  { name: 'Docker Containers', category: 'tools', icon: '🐳' },
  { name: 'Vite & Webpack', category: 'tools', icon: '⚡' },
  { name: 'Google Cloud Platform (GCP)', category: 'tools', icon: '☁️' },
  { name: 'Análisis de Métricas / KPIs', category: 'tools', icon: '📊' }
];

// Innovation Process Data
const processData = {
  define: {
    num: '01',
    name: 'DEFINE',
    desc: 'Investigación exhaustiva, empatía con el usuario y análisis de requerimientos de negocio para identificar los cuellos de botella clave.'
  },
  design: {
    num: '02',
    name: 'DESIGN',
    desc: 'Arquitectura de información, wireframing interactivo y diseño de componentes con rigor en accesibilidad, ritmo visual y jerarquía.'
  },
  build: {
    num: '03',
    name: 'BUILD',
    desc: 'Desarrollo Full-Stack modular, código limpio y testeable, arquitecturas desacopladas y microservicios escalables.'
  },
  optimize: {
    num: '04',
    name: 'OPTIMIZE',
    desc: 'Pruebas de usabilidad reales, medición de KPIs de conversión y refinamiento continuo basado en analítica de producto.'
  }
};

// Live Code Snippets
const codeSnippets = {
  react: `// Custom Hook para micro-interacciones suaves
import { useState, useEffect } from 'react';

export function useInteractionMetric(elementId) {
  const [metrics, setMetrics] = useState({ clicks: 0, hoverTime: 0 });

  useEffect(() => {
    const el = document.getElementById(elementId);
    let start = 0;
    
    const onEnter = () => { start = performance.now(); };
    const onLeave = () => {
      const duration = performance.now() - start;
      setMetrics(prev => ({ ...prev, hoverTime: prev.hoverTime + duration }));
    };

    el?.addEventListener('mouseenter', onEnter);
    el?.addEventListener('mouseleave', onLeave);
    return () => {
      el?.removeEventListener('mouseenter', onEnter);
      el?.removeEventListener('mouseleave', onLeave);
    };
  }, [elementId]);

  return metrics;
}`,
  node: `// Endpoint de Transformación y Validación de Datos
import express from 'express';
const router = express.Router();

router.post('/api/v1/metrics/track', async (req, res) => {
  const { eventType, userId, latencyMs } = req.body;
  
  if (!eventType || !userId) {
    return res.status(400).json({ error: 'Parámetros requeridos faltantes' });
  }

  // Registro optimizado con auditoría asíncrona
  const record = await db.analytics.insert({
    eventType,
    userId,
    latencyMs: latencyMs ?? 0,
    timestamp: new Date()
  });

  return res.status(201).json({ success: true, id: record.id });
});`,
  sql: `-- Consulta de Cohortes y Tasa de Retención
SELECT 
  DATE_TRUNC('month', u.created_at) AS cohort_month,
  COUNT(DISTINCT u.id) AS total_users,
  COUNT(DISTINCT CASE WHEN a.event_date >= u.created_at + INTERVAL '30 days' THEN u.id END) AS retained_30d,
  ROUND(
    COUNT(DISTINCT CASE WHEN a.event_date >= u.created_at + INTERVAL '30 days' THEN u.id END) * 100.0 / 
    NULLIF(COUNT(DISTINCT u.id), 0), 2
  ) AS retention_rate_pct
FROM users u
LEFT JOIN activity_logs a ON u.id = a.user_id
GROUP BY 1
ORDER BY 1 DESC;`,
  design: `/* Design Tokens: Variables Centralizadas */
:root {
  --token-color-primary: #2563eb;
  --token-color-surface: #ffffff;
  --token-radius-bento: 24px;
  --token-transition-smooth: cubic-bezier(0.16, 1, 0.3, 1);
  --token-shadow-soft: 0 4px 20px -2px rgba(15, 23, 42, 0.05);
  --token-spacing-base: 1rem;
}`
};

// Render Main App
function renderApp() {
  const app = document.querySelector('#app');
  app.innerHTML = `
    <!-- Barra de progreso de scroll dinámica -->
    <div class="scroll-progress-bar" id="scroll-progress" aria-hidden="true"></div>

    <!-- Navegación Sticky Minimalista -->
    <header class="navbar">
      <nav class="nav-content" aria-label="Navegación principal">
        <a href="#hero" class="nav-brand" id="brand-link">
          <span class="nav-brand-dot"></span>
          <span>Nicolás</span>
        </a>

        <ul class="nav-links">
          <li><a href="#bento" class="nav-link">Visión General</a></li>
          <li><a href="#proyectos" class="nav-link">Casos de Estudio</a></li>
          <li><a href="#metodologia" class="nav-link">Mi Enfoque</a></li>
          <li><a href="#contacto" class="nav-link">Contacto</a></li>
        </ul>

        <div class="nav-actions">
          <button id="theme-toggle" class="theme-toggle-btn" aria-label="Cambiar tema claro u oscuro" title="Alternar tema">
            <svg id="theme-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
          <a href="#contacto" class="btn-primary desktop-cta" id="btn-cta-nav">Hablemos ↗</a>
          <button id="mobile-menu-btn" class="mobile-menu-btn" aria-label="Abrir menú" aria-expanded="false">
            <svg id="hamburger-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>

      <!-- Menú desplegable para móviles -->
      <div class="mobile-menu-drawer" id="mobile-menu-drawer" aria-hidden="true">
        <ul class="mobile-menu-list">
          <li><a href="#hero" class="mobile-menu-link">Inicio</a></li>
          <li><a href="#bento" class="mobile-menu-link">Visión General</a></li>
          <li><a href="#proyectos" class="mobile-menu-link">Casos de Estudio</a></li>
          <li><a href="#metodologia" class="mobile-menu-link">Mi Enfoque</a></li>
          <li><a href="#contacto" class="mobile-menu-link">Contacto</a></li>
        </ul>
        <div style="margin-top: 0.85rem; padding-top: 0.85rem; border-top: 1px solid var(--card-border);">
          <a href="#contacto" class="btn-primary btn-gradient mobile-menu-link" style="width: 100%; justify-content: center; text-align: center;">
            Hablemos Directo ↗
          </a>
        </div>
      </div>
    </header>

    <main>
      <!-- Hero Section -->
      <section id="hero" class="hero-section container reveal-on-scroll is-visible">
        <div class="hero-badge-wrap">
          <span class="pulse-indicator"></span>
          <span>Disponible para proyectos & innovación digital</span>
        </div>

        <h1 class="hero-title">
          Diseñando el futuro digital: <br />
          <span class="hero-gradient-text">Interfaces intuitivas & código escalable.</span>
        </h1>

        <p class="hero-subtitle">
          Soy <strong>Nicolás</strong>, Full-Stack Developer & UI/UX Product Engineer. Graduado hace un año, con mentalidad analítica orientada a la <strong>transformación digital</strong> y la creación de experiencias web modernas donde el diseño centrado en el usuario se une a una sólida arquitectura de software.
        </p>

        <div class="hero-actions">
          <a href="#bento" class="btn-primary btn-gradient" id="btn-explore-hero">
            Explorar Tablero Bento ↓
          </a>
          <a href="#proyectos" class="btn-secondary" id="btn-projects-hero">
            Ver Casos de Estudio
          </a>
          <button id="btn-copy-email-hero" class="btn-secondary" title="Copiar correo electrónico">
            📋 Copiar Email
          </button>
        </div>
      </section>

      <!-- Bento Grid Showcase (Propuesta 2.5 Core) -->
      <section id="bento" class="section bento-section container">
        <div class="section-header reveal-on-scroll">
          <span class="section-tag">Tablero de Innovación</span>
          <h2 class="section-title">Ecosistema interactivo de diseño & producto.</h2>
          <p class="section-description">
            Un recorrido integral por mi metodología: desde prototipos interactivos y métricas de negocio hasta código limpio y tecnologías de vanguardia.
          </p>
        </div>

        <div class="bento-grid stagger-parent">
          <!-- Bento 1: Proyecto Destacado (Fintech) -->
          <article class="bento-card bento-featured reveal-on-scroll" id="card-featured-fintech">
            <div class="bento-card-header">
              <span class="bento-pill bento-pill-indigo">Caso Destacado</span>
              <span class="bento-pill">UI/UX + Full-Stack</span>
            </div>
            <h3 class="bento-card-title">Luma: Ecosistema Bancario & Pagos</h3>
            <p class="bento-card-desc">
              Simplificación radical de la experiencia de pago móvil y dashboard web. Reducción del abandono transaccional y arquitectura de datos optimizada en PostgreSQL.
            </p>
            <div class="project-preview-frame">
              <img src="./projects/fintech.jpg" alt="Mockup de la plataforma Fintech Luma" loading="lazy" />
            </div>
            <div style="margin-top: 1.25rem; display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.8125rem; font-weight: 700; color: var(--accent-indigo);">Métrica: +38% conversión</span>
              <button class="view-case-btn" data-case="fintech">Explorar Caso Detallado →</button>
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
              <img id="proto-img" src="./projects/fintech.jpg" alt="Vista de prototipo interactivo" />
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
            
            <!-- Minimal SVG Sparkline Chart -->
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
              <span style="font-size: 0.75rem; color: var(--text-muted);" id="stack-count">18 Tecnologías</span>
            </div>
            <h3 class="bento-card-title">Habilidades & Ecosistema</h3>
            <div class="stack-filter-tabs">
              <button class="stack-tab-btn active" data-filter="all">Todos</button>
              <button class="stack-tab-btn" data-filter="frontend">Frontend</button>
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

      <!-- Galería de Casos de Estudio Detallados -->
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

      <!-- Sobre Mí & Metodología de Innovación -->
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

      <!-- Contacto & Footer -->
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
    </main>

    <!-- Footer -->
    <footer class="footer container">
      <div class="footer-content">
        <div>
          © ${new Date().getFullYear()} Nicolás. Diseñado & Desarrollado con <strong>Vite, Vanilla JS & CSS Moderno</strong>.
        </div>
        <div style="display: flex; gap: 1rem; align-items: center;">
          <a href="#hero" style="color: var(--accent-indigo); font-weight: 600;">Volver arriba ↑</a>
        </div>
      </div>
    </footer>

    <!-- Modal Detalle de Caso de Estudio -->
    <div class="modal-backdrop" id="case-modal" aria-hidden="true" role="dialog">
      <div class="modal-container">
        <button class="modal-close-btn" id="modal-close-btn" aria-label="Cerrar modal">&times;</button>
        <div id="modal-content-area"></div>
      </div>
    </div>

    <!-- Toast Notification -->
    <div class="toast-msg" id="toast-notification">
      <span>✓</span>
      <span id="toast-text">Acción completada con éxito</span>
    </div>
  `;

  // Attach all interactive event listeners
  setupThemeToggle();
  setupMobileMenu();
  setupSmartNavbar();
  setupBentoPrototype();
  setupBentoProcess();
  setupLiveCodePreview();
  setupTechStackFilter();
  setupCaseStudiesModal();
  setupContactForm();
  setupCopyButtons();
  setupScrollAnimations();
}

// 1. Theme Toggle (Light / Dark)
function setupThemeToggle() {
  const toggleBtn = document.querySelector('#theme-toggle');
  const themeIcon = document.querySelector('#theme-icon');
  
  // Check persisted preference or default to light
  const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
  document.documentElement.className = savedTheme;
  updateThemeIcon(savedTheme, themeIcon);

  toggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';
    document.documentElement.className = newTheme;
    localStorage.setItem('portfolio-theme', newTheme);
    updateThemeIcon(newTheme, themeIcon);
    showToast(`Modo ${newTheme === 'dark' ? 'oscuro' : 'claro'} activado`);
  });
}

function updateThemeIcon(theme, iconEl) {
  if (theme === 'dark') {
    // Sun icon
    iconEl.innerHTML = `
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    `;
  } else {
    // Moon icon
    iconEl.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
  }
}

// 2. Bento Interactive Prototype Tabs
function setupBentoPrototype() {
  const tabs = document.querySelectorAll('.proto-tab-btn');
  const protoImg = document.querySelector('#proto-img');
  const protoStatus = document.querySelector('#proto-status');

  const views = {
    mobile: { src: './projects/fintech.jpg', label: '● Vista Móvil (iOS/Android)' },
    desktop: { src: './projects/analytics.jpg', label: '● Vista Dashboard Desktop' },
    flow: { src: './projects/design_system.jpg', label: '● Flujo de Arquitectura UX' }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const viewKey = tab.dataset.view;
      if (views[viewKey]) {
        protoImg.style.opacity = '0';
        setTimeout(() => {
          protoImg.src = views[viewKey].src;
          protoStatus.textContent = views[viewKey].label;
          protoImg.style.opacity = '1';
        }, 150);
      }
    });
  });
}

// 3. Bento Process Step Switcher
function setupBentoProcess() {
  const stepItems = document.querySelectorAll('.process-step-item');
  const leadText = document.querySelector('#process-lead-text');

  stepItems.forEach(item => {
    item.addEventListener('click', () => {
      stepItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const stepKey = item.dataset.step;
      if (processData[stepKey]) {
        leadText.innerHTML = `<strong>Fase ${processData[stepKey].num} (${processData[stepKey].name}):</strong> ${processData[stepKey].desc}`;
      }
    });
  });
}

// 4. Bento Live Code Preview
function setupLiveCodePreview() {
  const codeEl = document.querySelector('#code-display');
  const codeTabs = document.querySelectorAll('.code-tab-btn');
  const copyBtn = document.querySelector('#btn-copy-code');
  let currentLang = 'react';

  function updateCode(lang) {
    currentLang = lang;
    codeEl.textContent = codeSnippets[lang] || '';
  }

  codeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      codeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      updateCode(tab.dataset.lang);
    });
  });

  copyBtn.addEventListener('click', () => {
    const textToCopy = codeSnippets[currentLang];
    navigator.clipboard.writeText(textToCopy).then(() => {
      copyBtn.textContent = '¡Copiado! ✓';
      setTimeout(() => { copyBtn.textContent = 'Copiar'; }, 2000);
      showToast('Código copiado al portapapeles');
    });
  });

  // Initial code render
  updateCode('react');
}

// 5. Tech Stack Filter in Bento
function setupTechStackFilter() {
  const container = document.querySelector('#stack-pills-wrap');
  const countEl = document.querySelector('#stack-count');
  const filterTabs = document.querySelectorAll('.stack-tab-btn');

  function renderPills(filter = 'all') {
    const filtered = filter === 'all' 
      ? techStack 
      : techStack.filter(item => item.category === filter);
    
    countEl.textContent = `${filtered.length} Tecnologías`;

    container.innerHTML = filtered.map(tech => `
      <div class="tech-tag-pill">
        <span>${tech.icon}</span>
        <span>${tech.name}</span>
      </div>
    `).join('');
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderPills(tab.dataset.filter);
    });
  });

  renderPills('all');
}

// 6. Case Studies Modal
function setupCaseStudiesModal() {
  const modal = document.querySelector('#case-modal');
  const modalArea = document.querySelector('#modal-content-area');
  const closeBtn = document.querySelector('#modal-close-btn');

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

  // Trigger buttons
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

// 7. Contact Form Simulation
function setupContactForm() {
  const form = document.querySelector('#contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#form-name').value;
    const btn = document.querySelector('#btn-submit-form');
    
    btn.disabled = true;
    btn.textContent = 'Enviando...';

    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = '¡Mensaje Enviado con Éxito! ✓';
      form.reset();
      showToast(`¡Gracias ${name}! Mensaje recibido, te responderé pronto.`);
      setTimeout(() => {
        btn.textContent = 'Enviar Mensaje Directo 🚀';
      }, 3500);
    }, 800);
  });
}

// 8. Copy email buttons & Toast
function setupCopyButtons() {
  const copyEmailHero = document.querySelector('#btn-copy-email-hero');
  const email = 'nicolasut21@gmail.com';

  if (copyEmailHero) {
    copyEmailHero.addEventListener('click', () => {
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copiado al portapapeles: ' + email);
      });
    });
  }
}

function showToast(message) {
  const toast = document.querySelector('#toast-notification');
  const toastText = document.querySelector('#toast-text');
  toastText.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// 9. Animaciones de scroll y barra de progreso
function setupScrollAnimations() {
  const progressBar = document.querySelector('#scroll-progress');

  // Actualizar barra de progreso con el scroll
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) {
      progressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
    }
  }, { passive: true });

  // IntersectionObserver para reveal suave de secciones y tarjetas
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }
}

// 10. Menú móvil interactivo
function setupMobileMenu() {
  const btn = document.querySelector('#mobile-menu-btn');
  const drawer = document.querySelector('#mobile-menu-drawer');
  const icon = document.querySelector('#hamburger-icon');
  const links = document.querySelectorAll('.mobile-menu-link');

  if (!btn || !drawer) return;

  function toggleMenu(forceClose = false) {
    const isOpen = forceClose ? false : !drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
      if (icon) {
        icon.innerHTML = `
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        `;
      }
    } else {
      drawer.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
      if (icon) {
        icon.innerHTML = `
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        `;
      }
    }
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  links.forEach(link => {
    link.addEventListener('click', () => toggleMenu(true));
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#mobile-menu-drawer') && !e.target.closest('#mobile-menu-btn')) {
      toggleMenu(true);
    }
  });
}

// 11. Smart Navbar - Ocultar barra al scrollear hacia abajo y reaparecer al subir o al tope
function setupSmartNavbar() {
  const navbar = document.querySelector('.navbar');
  const drawer = document.querySelector('#mobile-menu-drawer');
  if (!navbar) return;

  let lastScrollY = window.scrollY || document.documentElement.scrollTop;
  let ticking = false;
  const threshold = 8;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY || document.documentElement.scrollTop;
        const diff = currentScrollY - lastScrollY;

        // Si está en el tope inicial de la página (<= 35px), siempre mostrar
        if (currentScrollY <= 35) {
          navbar.classList.remove('nav-hidden');
        } else if (diff > threshold && currentScrollY > 70) {
          // Scrolleando hacia abajo: ocultar para dejar libre la lectura
          navbar.classList.add('nav-hidden');

          // Si el menú móvil estaba abierto, cerrarlo automáticamente
          if (drawer && drawer.classList.contains('open')) {
            const btn = document.querySelector('#mobile-menu-btn');
            const icon = document.querySelector('#hamburger-icon');
            drawer.classList.remove('open');
            drawer.setAttribute('aria-hidden', 'true');
            if (btn) btn.setAttribute('aria-expanded', 'false');
            if (icon) {
              icon.innerHTML = `
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              `;
            }
          }
        } else if (diff < -threshold) {
          // Scrolleando hacia arriba: reaparecer suavemente
          navbar.classList.remove('nav-hidden');
        }

        lastScrollY = Math.max(0, currentScrollY);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// Launch application
renderApp();
