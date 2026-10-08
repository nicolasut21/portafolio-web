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
    desktopLabel: '🖥️ Vista Desktop (Sistema Caja & Panel General)',
    mobileLabel: '📱 Vista Móvil (Panel General & Alertas)',
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
    id: 'difunab',
    title: 'difUnab — Sistema de Agendamiento & Difusión UNAB',
    subtitle: 'Plataforma para coordinar visitas a colegios, charlas vocacionales y ferias para la Universidad Andrés Bello.',
    role: 'Full-Stack Developer & UI/UX Designer',
    tags: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
    metric: '+70% Eficiencia en Agendamiento',
    img: './projects/difunab.jpg',
    extraImg: './projects/difunab_mobile.jpg',
    desktopLabel: '🖥️ Vista Desktop (Calendario de Actividades & KPIs)',
    mobileLabel: '📱 Vista Móvil (Agenda Diaria & Asistencia en Terreno)',
    summary: 'difUnab es una solución web integral desarrollada para el área de Difusión y Admisión de la Universidad Andrés Bello (UNAB). Centraliza y automatiza el agendamiento y seguimiento de actividades de reclutamiento vocacional: visitas guiadas a campus, charlas en colegios y participación en ferias vocacionales a nivel nacional.',
    challenge: 'La coordinación de cientos de actividades semestrales con colegios dependía de planillas dispersas y correos manuales, provocando traslapes de fechas, falta de visibilidad en tiempo real para coordinadores de sede y dificultades para proyectar la asistencia de postulantes.',
    solution: 'Desarrollo de una plataforma Full-Stack con React y TailwindCSS en el frontend y Node.js con Express en el backend, conectado a MongoDB. Implementación de un calendario interactivo con filtros por tipo de evento y sede, control de disponibilidad en tiempo real, registro de colegios asociados y módulo móvil para confirmación de asistencia en terreno.',
    impact: [
      'Digitalización y centralización del 100% del calendario de visitas y charlas vocacionales',
      'Eliminación de traslapes de actividades y reducción del 70% en tiempos de confirmación con colegios',
      'Monitoreo en tiempo real de más de 8,400 postulantes estimados y métricas de convocatoria por sede',
      'Interfaz multidispositivo optimizada para uso en oficina (desktop) y coordinadores en terreno (móvil)'
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS', 'REST API', 'Figma UI/UX']
  },
  {
    id: 'safetrails',
    title: 'SafeTrails — Plataforma PWA de Seguridad & Tracking en Senderos',
    subtitle: 'Aplicación web progresiva de geolocalización en tiempo real con motor de alarmas por proximidad (geofencing) y trazado de rutas.',
    role: 'Lead Frontend Developer & UI/UX Designer',
    tags: ['React 19', 'TypeScript', 'Leaflet', 'PWA', 'TailwindCSS'],
    metric: 'Geofencing Reactivo & Alertas en Terreno',
    img: './projects/safetrails_desktop.jpg',
    extraImg: './projects/safetrails_mobile.jpg',
    desktopLabel: '🖥️ Vista Desktop (Centro de Control & Telemetría de Rutas)',
    mobileLabel: '📱 Vista Móvil (App PWA & Alarmas en Terreno)',
    github: 'https://github.com/safetrailscl-cyber/safetrails-frontend',
    summary: 'SafeTrails es una Progressive Web App (PWA) de seguridad y navegación al aire libre desarrollada con React 19 y TypeScript. Diseñada para excursionistas y senderistas, integra geolocalización continua en tiempo real, mapas topográficos reactivos con Leaflet, gestión de puntos de interés (POIs) y un motor reactivo de alarmas con advertencias sonoras y visuales ante zonas de riesgo.',
    challenge: 'En rutas agrestes o senderos de montaña, la pérdida de orientación, el desconocimiento de tramos peligrosos (curvas ciegas, acantilados, cruces complejos) y la falta de cobertura representan un riesgo crítico para la integridad de los excursionistas.',
    solution: 'Arquitectura PWA orientada al rendimiento y fiabilidad en campo: rastreo continuo mediante Geolocation API, motor inteligente de geofencing (AlarmEngine) que calcula en tiempo real la proximidad a POIs de precaución emitiendo alertas acústicas y visuales, trazado dinámico de polilíneas de ruta, e interfaz de alto contraste diseñada para visibilidad bajo luz solar directa.',
    impact: [
      'Detección perimetral instantánea de zonas de precaución con alertas visuales y auditivas en tiempo real',
      'Rastreo GPS de alta precisión con registro continuo de distancia, ritmo y desniveles acumulados',
      'Arquitectura PWA instalable con soporte offline y respuesta ultrarrápida impulsada por Vite y React 19',
      'Experiencia mobile-first intuitiva pensada para operación con una sola mano en movimiento'
    ],
    stack: ['React 19', 'TypeScript', 'Leaflet / React-Leaflet', 'PWA (Service Workers)', 'TailwindCSS', 'Lucide Icons', 'Vite', 'HTML5 Geolocation']
  }
];
