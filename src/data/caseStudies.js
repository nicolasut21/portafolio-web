export const caseStudies = [
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
