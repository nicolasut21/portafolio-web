export const caseStudies = [
  {
    id: 'maldonado',
    title: 'Ferretería Maldonado — Transformación Digital & ERP SaaS Integral',
    subtitle: 'Liderazgo técnico en plataforma ERP SaaS para una empresa con baja adopción tecnológica, digitalizando inventario, ventas y reportería analítica.',
    role: 'Practicante – Transformación Digital y Desarrollo Full Stack (2026)',
    tags: ['React', 'Node.js', 'MongoDB', 'ERP / Odoo', 'Vercel', 'Render'],
    metric: 'Digitalización Operativa & Control Total',
    img: './projects/maldonado.png',
    extraImg: './projects/maldonado_mobile.png',
    desktopLabel: '🖥️ Vista Desktop (Sistema Caja & Panel General)',
    mobileLabel: '📱 Vista Móvil (Panel General & Alertas)',
    summary: 'Diseño e implementación de una plataforma ERP SaaS integral a medida para Ferretería Maldonado (sucursal Las Cabras). Permitió transformar una empresa con baja adopción tecnológica y nula visibilidad en un ecosistema 100% digitalizado con gestión de inventario, control de stock crítico, caja en tiempo real y reportería analítica basada en principios de gestión empresarial (ERP / Odoo).',
    challenge: 'El negocio operaba con cero control sistematizado de ventas, inventario y finanzas diarias. Las existencias críticas se detectaban tarde provocando quiebres de stock, y no existían métricas centralizadas para evaluar el rendimiento ni tomar decisiones comerciales con certeza.',
    solution: 'Implementación de arquitectura Full Stack con React en frontend (desplegado en Vercel) y Node.js con Express en backend (desplegado en Render), conectado a MongoDB. Integración de bases de datos, flujos automatizados de caja, alertas tempranas de stock crítico y reportería ejecutiva orientada al negocio.',
    impact: [
      'Liderazgo técnico en la transición de procesos manuales a un manejo 100% digitalizado',
      'Visibilidad en tiempo real de ingresos diarios y mensuales ($1.374.520+ monitoreados)',
      'Alertas tempranas de stock crítico evitando quiebres de inventario en mostrador',
      'Despliegue bajo ciclo de mejora continua e interfaz optimizada para desktop y móvil'
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'ERP / Odoo', 'Vercel', 'Render', 'REST API', 'CSS Responsivo']
  },
  {
    id: 'difunab',
    title: 'Proyecto difUnab — Coordinación y Desarrollo de Sistemas UNAB (2025)',
    subtitle: 'Plataforma institucional para coordinar visitas a colegios, charlas vocacionales y ferias para la Universidad Andrés Bello.',
    role: 'Coordinación y Desarrollo Frontend (Scrum) | UNAB (2025)',
    tags: ['React', 'Node.js', 'APIs REST', 'Scrum', 'TailwindCSS'],
    metric: '+70% Eficiencia en Agendamiento',
    img: './projects/difunab.jpg',
    extraImg: './projects/difunab_mobile.jpg',
    desktopLabel: '🖥️ Vista Desktop (Calendario de Actividades & KPIs)',
    mobileLabel: '📱 Vista Móvil (Agenda Diaria & Asistencia en Terreno)',
    summary: 'difUnab es una solución web integral desarrollada para el área de Difusión y Admisión de la Universidad Andrés Bello (UNAB). Centraliza y automatiza el agendamiento y seguimiento de actividades de reclutamiento vocacional: visitas guiadas a campus, charlas en colegios y participación en ferias vocacionales a nivel nacional.',
    challenge: 'La coordinación de cientos de actividades semestrales con colegios dependía de planillas dispersas y correos manuales, provocando traslapes de fechas, falta de visibilidad en tiempo real para coordinadores de sede y dificultades para proyectar la asistencia de postulantes.',
    solution: 'Participación en desarrollo frontend e integración de APIs para la plataforma institucional. Coordinación y liderazgo técnico parcial del equipo de desarrollo bajo metodología ágil Scrum, con apoyo en levantamiento de requerimientos y alineación con los objetivos del proyecto.',
    impact: [
      'Digitalización y centralización del 100% del calendario de visitas y charlas vocacionales',
      'Eliminación de traslapes de actividades y reducción del 70% en tiempos de confirmación con colegios',
      'Monitoreo en tiempo real de más de 8,400 postulantes estimados y métricas por sede',
      'Coordinación ágil efectiva entre diseñadores, desarrolladores y coordinadores institucionales'
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS', 'REST APIs', 'Scrum Ágil', 'Figma UX/UI']
  },
  {
    id: 'safetrails',
    title: 'SafeTrails — Proyecto de Título UNAB | Geolocalización & Alertas GPS',
    subtitle: 'Aplicación basada en React Native y Web con geolocalización continua, seguimiento GPS en tiempo real y motor reactivo de alarmas (AlarmEngine).',
    role: 'Desarrollador Móvil / Frontend & UI/UX (Proyecto de Título UNAB 2025)',
    tags: ['React Native', 'React', 'TypeScript', 'Leaflet', 'GPS Tiempo Real', 'UX/UI'],
    metric: 'Geofencing Reactivo & Alertas en Terreno',
    img: './projects/safetrails_desktop.jpg',
    extraImg: './projects/safetrails_mobile.jpg',
    desktopLabel: '🖥️ Vista Desktop (Centro de Control & Telemetría de Rutas)',
    mobileLabel: '📱 Vista Móvil (App PWA / Móvil & Alarmas en Terreno)',
    github: 'https://github.com/safetrailscl-cyber/safetrails-frontend',
    summary: 'Proyecto de Título (2025) desarrollado en la Universidad Andrés Bello. SafeTrails es una plataforma móvil y web de seguridad y navegación al aire libre desarrollada con React Native, React 19 y TypeScript. Diseñada para excursionistas, integra seguimiento GPS en tiempo real, mapas reactivos, motor de geofencing (AlarmEngine) y diseño mobile-first enfocado en usabilidad bajo condiciones extremas.',
    challenge: 'En rutas agrestes o senderos de montaña, la pérdida de orientación, el desconocimiento de tramos peligrosos (curvas ciegas, acantilados) y la falta de cobertura representan un riesgo crítico para la integridad de los excursionistas.',
    solution: 'Desarrollo de aplicación móvil y web con geolocalización y seguimiento GPS continuo en tiempo real, implementación de funcionalidades enfocadas en experiencia de usuario (UX/UI), monitoreo de rutas y planificación técnica bajo metodología ágil Scrum.',
    impact: [
      'Aprobado como Proyecto de Título en Ingeniería en Computación e Informática (UNAB)',
      'Detección perimetral instantánea de zonas de precaución con alertas visuales y auditivas',
      'Rastreo GPS de alta precisión con registro continuo de distancia y desniveles',
      'Experiencia mobile-first intuitiva optimizada para interacción rápida en terreno'
    ],
    stack: ['React Native', 'React 19', 'TypeScript', 'Leaflet / React-Leaflet', 'HTML5 Geolocation', 'TailwindCSS', 'Figma UX/UI']
  }
];
