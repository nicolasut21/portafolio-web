export const inProgressProjects = [
  {
    id: 'pruebapp',
    title: 'PruebApp — Plataforma EdTech de Preparación y Ensayos PAES',
    badge: 'En Desarrollo • Beta Activa',
    badgeType: 'beta',
    phase: 'Fase Beta & Validación',
    progress: 75,
    subtitle: 'Ecosistema de aprendizaje adaptativo para la Prueba de Acceso a la Educación Superior (PAES) en Chile.',
    description: 'Plataforma web y móvil para estudiantes y profesores que optimiza la preparación para los exámenes PAES (Matemática M1/M2, Lenguaje, Ciencias e Historia). Incorpora ensayos cronometrados con feedback instantáneo, analítica de proyección de puntajes y dashboards pedagógicos.',
    highlights: [
      'Simulacros cronometrados y modo de práctica por ejes temáticos',
      'Dashboards analíticos de evolución y proyección de puntaje',
      'Arquitectura modular PWA para estudio continuo'
    ],
    stack: ['React 19', 'Tailwind CSS 4', 'Firebase / Firestore', 'Express', 'PWA', 'Vite'],
    img: './projects/pruebapp.jpg'
  },
  {
    id: 'semillero-team-chile',
    title: 'Semillero Team Chile — Red Multidisciplinaria de Alto Rendimiento',
    badge: 'En Planificación & Prototipado',
    badgeType: 'planning',
    phase: 'Arquitectura & Diseño UX/UI',
    progress: 40,
    subtitle: 'Conexión entre estudiantes de ciencias del deporte y jóvenes talentos formativos para el futuro olímpico chileno.',
    description: 'Plataforma que vincula a estudiantes avanzados de carreras deportivas y de la salud (kinesiología, preparación física, nutrición y biomecánica) con atletas juveniles de Team Chile para potenciar su entrenamiento, recuperación física y desarrollo formativo.',
    highlights: [
      'Fichas biomecánicas y planes de recuperación física supervisados',
      'Monitoreo semanal de carga de entrenamiento, potencia y fatiga',
      'Alianza colaborativa entre universidades y deportistas formativos'
    ],
    stack: ['React', 'TypeScript', 'Figma UX/UI', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
    img: './projects/semillero_teamchile.jpg'
  }
];
