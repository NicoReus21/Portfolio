export const personal = {
  name: 'Nicolás Carmona',
  fullName: 'Nicolás Carmona Ahumada',
  title: 'Ingeniero en Computación e Informática',
  location: 'Antofagasta, Chile',
  email: 'nicolas.ahumada0605@gmail.com',
  phone: '+56 9 5906 8792',
  github: 'https://github.com/NicoReus21',
  githubHandle: 'github.com/NicoReus21',
  available: true,
  bio: [
    'Soy Ingeniero en Computación e Informática egresado de la Universidad Católica del Norte (Antofagasta, 2020–2025), con experiencia práctica en desarrollo de software, automatización de procesos y arquitectura de sistemas.',
    'Me motiva construir soluciones que realmente impacten las operaciones de las organizaciones. He trabajado en proyectos que van desde módulos críticos para el ERP del Cuerpo de Bomberos de Antofagasta, hasta la transformación digital de gerencias mediante Microsoft 365 en el sector privado.',
    'Soy colaborativo, me adapto rápido a nuevas tecnologías y disfruto tanto del trabajo técnico como del análisis de requerimientos con los equipos. Mi nivel de inglés C1 (certificado EF SET) me permite trabajar en entornos internacionales con comodidad.',
  ],
}

export const stats = [
  { number: '5+', label: 'Años de formación' },
  { number: '3',  label: 'Empresas / Instituciones' },
  { number: 'C1', label: 'Inglés certificado EF SET' },
  { number: '10+', label: 'Tecnologías dominadas' },
]

export const education = {
  degree: 'Ingeniería en Computación e Informática',
  school: 'Universidad Católica del Norte',
  period: '2020 — 2025',
  location: 'Antofagasta',
}

export const languages = [
  { name: 'Español', level: 'Nativo', percent: 100 },
  { name: 'Inglés',  level: 'C1 Avanzado', percent: 85 },
]

export const experience = [
  {
    id: 1,
    icon: '🚒',
    role: 'Desarrollador de Software',
    company: 'Cuerpo de Bomberos de Antofagasta',
    period: 'Ago 2025 — Dic 2025',
    bullets: [
      'Lideré el diseño y ejecución de módulos críticos para el **ERP institucional** (Gestión de Activos y Bomberos Lesionados).',
      'Arquitecté solución Full Stack con **Laravel** (backend) y **Angular + Material Design** (frontend).',
      'Desarrollé e integré APIs RESTful siguiendo el patrón MVC, garantizando mantenibilidad y escalabilidad.',
    ],
    tags: ['Laravel', 'Angular', 'Material Design', 'REST API', 'MVC', 'MySQL'],
  },
  {
    id: 2,
    icon: '💼',
    role: 'Desarrollador IT',
    company: 'Prime Integral SPA',
    period: 'Ene 2025 — Jul 2025',
    bullets: [
      'Impulsé la **transformación digital** de Gerencia General mediante módulos personalizados para el ERP central.',
      'Automaticé procesos de negocio complejos con **PowerApps y Power Automate** (Microsoft 365).',
      'Reduje tiempos de respuesta y errores manuales en flujos de trabajo críticos.',
    ],
    tags: ['PowerApps', 'Power Automate', 'SharePoint', 'Microsoft 365'],
  },
  {
    id: 3,
    icon: '🎓',
    role: 'Ayudante de Cátedra — Estadística y Probabilidad',
    company: 'Universidad Católica del Norte',
    period: 'Jul 2024 — Ene 2025',
    bullets: [
      'Fomenté el dominio de **R Studio** como herramienta de análisis estadístico.',
      'Traduje conceptos abstractos en implementaciones prácticas de programación estadística.',
    ],
    tags: ['R Studio', 'Estadística', 'Docencia'],
  },
  {
    id: 4,
    icon: '🏥',
    role: 'Asistente Administrativo',
    company: 'Hospital Regional de Antofagasta',
    period: 'Ene 2023 — Mar 2023',
    bullets: [
      'Optimicé la integridad de datos del archivo clínico resolviendo **duplicidades en registros médicos** críticos.',
      'Mejoré la eficiencia operativa del sistema hospitalario con manejo responsable de datos sensibles.',
    ],
    tags: ['Gestión de datos', 'Registros clínicos'],
  },
]

export const projects = [
  {
    id: 1,
    icon: '🔐',
    name: 'Auth App',
    description: 'Sistema de autenticación Full Stack con registro seguro, login con JWT, contraseñas encriptadas (bcryptjs) y rutas privadas protegidas en React. Backend en Node.js + Express.',
    tags: ['React', 'Node.js', 'Express', 'JWT', 'bcryptjs', 'Vite'],
    github: 'https://github.com/NicoReus21/auth-app',
    demo: null,
  },
  {
    id: 2,
    icon: '🚒',
    name: 'ERP Bomberos Antofagasta',
    description: 'Módulos de Gestión de Activos y Bomberos Lesionados para el ERP institucional. Arquitectura MVC con API RESTful, frontend en Angular y backend en Laravel.',
    tags: ['Laravel', 'Angular', 'Material Design', 'REST API', 'MySQL'],
    github: 'https://sigba.itmanagement.cl/login',
    demo: null,
  },
  {
    id: 3,
    icon: '⚡',
    name: 'ERP Sistema de Gestión Prime Integral',
    description: 'Automatización de procesos críticos de negocio para Prime Integral SPA. Reducción de tiempos de respuesta mediante flujos en Power Automate y creación de módulos (Asistencia, Inventario Epp, Sistema de Logística, Propuestas de Negocio, Asignaciones de personal) en PowerApps.',
    tags: ['PowerApps', 'Power Automate', 'SharePoint', 'Microsoft 365'],
    github: null,
    demo: null,
  },
]

export const skills = [
  {
    icon: '💻',
    title: 'Lenguajes de Programación',
    items: [
      { name: 'JavaScript', hot: true },
      { name: 'PHP', hot: true },
      { name: 'Python', hot: true },
      { name: 'SQL / PL-SQL', hot: true },
      { name: 'Java', hot: false },
      { name: 'C++', hot: false },
      { name: 'C#', hot: false },
      { name: 'HTML / CSS', hot: false },
      { name: 'R', hot: false },
    ],
  },
  {
    icon: '🧩',
    title: 'Frameworks & Librerías',
    items: [
      { name: 'Laravel', hot: true },
      { name: 'Angular', hot: true },
      { name: 'React', hot: true },
      { name: 'Node.js', hot: true },
      { name: 'Express', hot: false },
      { name: 'Material Design', hot: false },
      { name: 'React Router', hot: false },
      { name: 'Axios', hot: false },
      { name: 'Vite', hot: false },
    ],
  },
  {
    icon: '☁️',
    title: 'Microsoft 365 & Plataformas',
    items: [
      { name: 'PowerApps', hot: true },
      { name: 'Power Automate', hot: true },
      { name: 'SharePoint', hot: true },
      { name: 'Microsoft Office', hot: false },
    ],
  },
  {
    icon: '🛠️',
    title: 'Herramientas & Buenas Prácticas',
    items: [
      { name: 'Git / GitHub', hot: true },
      { name: 'REST API', hot: true },
      { name: 'Patrón MVC', hot: true },
      { name: 'JWT', hot: false },
      { name: 'bcryptjs', hot: false },
      { name: 'R Studio', hot: false },
      { name: 'Vercel', hot: false },
    ],
  },
]