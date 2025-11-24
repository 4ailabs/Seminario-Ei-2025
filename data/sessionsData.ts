export interface SessionData {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  objectives: string[];
  multimedia: Array<{
    id: string;
    type: 'video' | 'download' | 'podcast' | 'article';
    title: string;
    description: string;
    url: string;
    duration?: string;
    fileSize?: string;
    category: 'intro' | 'practice' | 'reference' | 'supplement';
  }>;
  topics: Array<{
    id: string;
    title: string;
    description: string;
    subTopics: Array<{
      title: string;
      description: string;
    }>;
    duration: string;
  }>;
  materials: string[];
}

export const sessionsData: SessionData[] = [
  {
    id: 1,
    title: "Neuroplasticidad y Reprocesamiento Bilateral",
    date: "5 de Diciembre 2025",
    time: "10:00 AM - 6:00 PM",
    location: "Hotel Galería Plaza Reforma, Ciudad de México (Presencial/Online)",
    description: "La primera sesión establece los fundamentos neurobiológicos de la transformación consciente. Los participantes comprenderán cómo el sistema nervioso procesa información emocional y aprenderán protocolos de reprocesamiento bilateral basados en investigación científica actualizada.",
    objectives: [
      "Comprender la neurobiología del sistema de supervivencia y adaptación",
      "Dominar técnicas de visualización neurofisiológica para estados óptimos",
      "Aprender TRSB: Técnica de Reprocesamiento Somato-Cognitivo Bilateral con sus 4 etapas",
      "Dominar PONS: Sistema de Posicionamiento Neurocognitivo con las 8 posiciones de acceso visual",
      "Practicar protocolos de reprocesamiento en sesiones supervisadas con casos reales",
      "Transformar patrones automáticos en decisiones conscientes mediante neuroplasticidad aplicada"
    ],
    multimedia: [
      {
        id: "video-intro-1",
        type: "video",
        title: "Del cerebro reactivo al creativo",
        description: "Video introductorio que establece las bases conceptuales del programa",
        url: "https://vimeo.com/1122501757/9d6c991bc4",
        duration: "15 min",
        category: "intro"
      },
      {
        id: "pdf-guia-1",
        type: "download",
        title: "Guía de Ejercicios de Respiración",
        description: "Manual completo con técnicas paso a paso",
        url: "#",
        fileSize: "2.3 MB",
        category: "practice"
      },
      {
        id: "podcast-meditacion-1",
        type: "podcast",
        title: "Meditación de Coherencia Cardíaca",
        description: "Audio guiado para práctica diaria",
        url: "#",
        duration: "25 min",
        category: "practice"
      },
      {
        id: "lsp-insight-system",
        type: "article",
        title: "LSP Insight System",
        description: "Sistema innovador que combina LEGO® Serious Play® con inteligencia artificial para facilitar procesos de exploración simbólica y desarrollo personal.",
        url: "https://inteligencia-energetica.com/lsp-system/lsp-system-ia",
        category: "reference"
      }
    ],
    topics: [
      {
        id: "tema-1-1",
        title: "Bienvenida y Encuadre del Seminario",
        description: "Presentación del programa, objetivos de transformación y creación del contenedor seguro. Establecimiento de fundamentos neurobiológicos de la transformación consciente.",
        duration: "1 hora",
        subTopics: [
          {
            title: "Presentación del programa",
            description: "Estructura completa del seminario, metodologías y marco teórico científico"
          },
          {
            title: "Objetivos de transformación",
            description: "Establecimiento de metas, expectativas y compromiso con el proceso de 90 días"
          },
          {
            title: "Creación del contenedor seguro",
            description: "Fundamentos para un espacio de trabajo seguro y transformador basado en neurociencia"
          },
          {
            title: "Marco teórico y científico",
            description: "Introducción a neuroplasticidad, Polyvagal Theory, y bases de reprocesamiento bilateral"
          }
        ]
      },
      {
        id: "tema-1-2",
        title: "El Cerebro Reactivo: Neurobiología del Sistema de Supervivencia",
        description: "Comprensión profunda de cómo el sistema nervioso procesa información emocional. Exploración de la neurobiología del sistema de supervivencia y adaptación, y cómo transformar patrones automáticos en decisiones conscientes mediante neuroplasticidad aplicada.",
        duration: "2 horas",
        subTopics: [
          {
            title: "Neurobiología del sistema de supervivencia y adaptación",
            description: "Fundamentos científicos del cerebro reactivo basados en investigación actualizada"
          },
          {
            title: "Procesamiento emocional en el sistema nervioso",
            description: "Cómo el sistema nervioso procesa y almacena información emocional"
          },
          {
            title: "Patrones automáticos y respuestas reactivas",
            description: "Comprensión de los mecanismos de respuesta automática y su origen neurobiológico"
          },
          {
            title: "Transformación mediante neuroplasticidad",
            description: "Proceso de cambio de reactividad a consciencia mediante neuroplasticidad aplicada"
          }
        ]
      },
      {
        id: "tema-1-3",
        title: "TRSB: Técnica de Reprocesamiento Somato-Cognitivo Bilateral",
        description: "Protocolo completo de reprocesamiento bilateral basado en investigación científica. Aprendizaje de fundamentos, las 4 etapas de transformación, y práctica supervisada con casos reales.",
        duration: "2.5 horas",
        subTopics: [
          {
            title: "Fundamentos científicos de TRSB",
            description: "Bases teóricas y científicas de la técnica de reprocesamiento somato-cognitivo bilateral"
          },
          {
            title: "Las 4 etapas de transformación",
            description: "Proceso completo de reprocesamiento desde identificación hasta integración"
          },
          {
            title: "Protocolo completo paso a paso",
            description: "Aplicación detallada de la técnica con guía estructurada"
          },
          {
            title: "Técnicas de visualización neurofisiológica",
            description: "Métodos para crear estados óptimos mediante visualización y regulación del sistema nervioso autónomo"
          },
          {
            title: "Práctica supervisada con casos reales",
            description: "Ejercicio práctico en parejas y grupos pequeños bajo supervisión del facilitador"
          }
        ]
      },
      {
        id: "tema-1-4",
        title: "PONS: Sistema de Posicionamiento Neurocognitivo",
        description: "Sistema completo reprocesamiento visual para estados internos y memorias traumáticas. Aprendizaje de anclaje espacial de recursos internos, técnicas de recuperación de recursos cuando se necesitan, e integración práctica en contextos terapéuticos y de vida cotidiana.",
        duration: "2 horas",
        subTopics: [
          {
            title: "Las 8 posiciones de acceso visual",
            description: "Sistema completo de posicionamiento neurocognitivo para acceso a estados internos"
          },
          {
            title: "Anclaje espacial de recursos",
            description: "Técnicas avanzadas de anclaje y recuperación de recursos internos mediante posicionamiento"
          },
          {
            title: "Integración de recursos en estados óptimos",
            description: "Cómo acceder y mantener recursos internos cuando se necesitan"
          },
          {
            title: "Integración práctica en contextos reales",
            description: "Aplicación del sistema PONS en situaciones terapéuticas y de vida cotidiana"
          }
        ]
      }
    ],
    materials: [
      "Ropa cómoda y holgada para prácticas",
      "Botella de agua",
      "Cuaderno para notas personales y reflexión",
      "Manual de TRSB: Técnica de Reprocesamiento Somato-Cognitivo Bilateral (proporcionado)",
      "Guía de técnicas de visualización neurofisiológica (proporcionado)",
      "Manta o cojín para meditación (opcional)"
    ]
  },
  {
    id: 2,
    title: "Bioenergética Holográfica y Context Engineering",
    date: "6 de Diciembre 2025",
    time: "10:00 AM - 6:00 PM",
    location: "Hotel Galería Plaza Reforma, Ciudad de México (Presencial/Online)",
    description: "Esta sesión integra sistemas de evaluación energética con metodologías de indagación estratégica. Los participantes aprenderán a identificar patrones bioenergéticos específicos y a diseñar intervenciones de precisión mediante la fusión de Bioenergética y Context Engineering (Context Bioenergetics).",
    objectives: [
      "Dominar el sistema de 13 hologramas bioenergéticos y su correlación clínica",
      "Identificar las 20 sensaciones viscerales como indicadores diagnósticos precisos",
      "Aplicar protocolo de test muscular para evaluación bioenergética",
      "Dominar Context Engineering: Esquema de Contexto de 4 Niveles (Presente, Pasado, Transgeneracional, Sistema Actual)",
      "Aprender los 4 Protocolos de intervención diferenciada (Alpha, Beta, Gamma, Delta) y su algoritmo de decisión",
      "Realizar rastreo transgeneracional y identificación de patrones sistémicos",
      "Diseñar intervenciones terapéuticas de precisión mediante Context Bioenergetics"
    ],
    multimedia: [
      {
        id: "video-intro-2",
        type: "video",
        title: "Priming Neurofisiológico Entrena tu Cerebro para Estados Óptimos",
        description: "Video preparatorio para técnicas avanzadas",
        url: "https://vimeo.com/1122509089/a1f5880cc0",
        duration: "20 min",
        category: "intro"
      },
      {
        id: "pdf-ejercicios-2",
        type: "download",
        title: "Manual de Técnicas Avanzadas",
        description: "Guía completa con ejercicios progresivos",
        url: "#",
        fileSize: "3.1 MB",
        category: "practice"
      },
      {
        id: "article-neurociencia",
        type: "article",
        title: "Neuroplasticidad y Transformación",
        description: "Artículo científico sobre los fundamentos neurológicos",
        url: "#",
        category: "reference"
      }
    ],
    topics: [
      {
        id: "tema-2-1",
        title: "Bioenergética Holográfica: Sistema de Evaluación Energética",
        description: "Dominio del sistema de 13 hologramas bioenergéticos y su correlación clínica. Identificación de las 20 sensaciones viscerales como indicadores diagnósticos precisos y aplicación del protocolo de test muscular para evaluación bioenergética.",
        duration: "2.5 horas",
        subTopics: [
          {
            title: "Los 13 hologramas bioenergéticos y su correlación clínica",
            description: "Sistema completo de hologramas bioenergéticos y su aplicación en diagnóstico diferencial"
          },
          {
            title: "Las 20 sensaciones viscerales como indicadores diagnósticos",
            description: "Identificación precisa de sensaciones corporales y su significado en evaluación energética"
          },
          {
            title: "Protocolo de test muscular para evaluación bioenergética",
            description: "Técnica de kinesiología aplicada para diagnóstico y evaluación de patrones energéticos"
          },
          {
            title: "Correlación entre síntomas físicos y patrones energéticos",
            description: "Comprensión de la conexión entre manifestaciones físicas y desequilibrios energéticos"
          }
        ]
      },
      {
        id: "tema-2-2",
        title: "Protocolo de Rastreo Completo: Del Síntoma al Origen",
        description: "Protocolo completo de rastreo que incluye recesión de edad, búsqueda de sensación visceral, ámbito transgeneracional y demostración en vivo con casos reales. Identificación de patrones sistémicos y transgeneracionales.",
        duration: "2.5 horas",
        subTopics: [
          {
            title: "Recesión de edad y acceso a experiencias formativas",
            description: "Técnica para acceder a experiencias pasadas que originaron patrones actuales"
          },
          {
            title: "Búsqueda de sensación visceral raíz",
            description: "Identificación precisa de la raíz corporal del síntoma mediante rastreo sistemático"
          },
          {
            title: "Rastreo transgeneracional y patrones sistémicos",
            description: "Exploración de patrones familiares, lealtades invisibles y dinámicas transgeneracionales"
          },
          {
            title: "Integración de niveles: Presente, Pasado y Sistema",
            description: "Cómo integrar información de diferentes niveles temporales y sistémicos"
          },
          {
            title: "Demostración en vivo con casos reales",
            description: "Aplicación práctica del protocolo completo con participantes voluntarios"
          }
        ]
      },
      {
        id: "tema-2-3",
        title: "Context Engineering: El Arte de la Pregunta Estratégica",
        description: "Dominio del Esquema de Contexto de 4 Niveles para diseño de intervenciones de precisión. Aprendizaje de formulación de preguntas estratégicas y rastreo guiado con casos reales.",
        duration: "2 horas",
        subTopics: [
          {
            title: "Esquema de Contexto de 4 Niveles: Marco metodológico",
            description: "Sistema completo de Context Engineering para evaluación y diseño de intervenciones"
          },
          {
            title: "Nivel Presente: Patrones actuales y manifestaciones",
            description: "Exploración de patrones actuales, síntomas presentes y dinámicas visibles"
          },
          {
            title: "Nivel Pasado: Orígenes históricos y experiencias formativas",
            description: "Rastreo de orígenes históricos, eventos formativos y experiencias que crearon el patrón"
          },
          {
            title: "Nivel Transgeneracional: Patrones familiares y sistémicos",
            description: "Exploración de patrones familiares, lealtades invisibles y dinámicas transgeneracionales"
          },
          {
            title: "Nivel Sistema Actual: Dinámicas que sostienen el patrón",
            description: "Identificación de dinámicas actuales, creencias y estructuras que mantienen el patrón activo"
          },
          {
            title: "Formulación de preguntas estratégicas de alta calidad",
            description: "El arte de crear preguntas que generan insights profundos y transformación"
          },
          {
            title: "Rastreo guiado con caso real",
            description: "Aplicación práctica del Esquema de 4 Niveles con caso de ejemplo en vivo"
          }
        ]
      },
      {
        id: "tema-2-4",
        title: "Los 4 Protocolos Bioenergéticos",
        description: "Protocolo Alpha (síntomas físicos), Beta (conflictos emocionales), Gamma (dinámicas sistémicas), Delta (integración existencial) y algoritmo de decisión.",
        duration: "2 horas",
        subTopics: [
          {
            title: "Protocolo Alpha",
            description: "Para síntomas físicos y manifestaciones corporales"
          },
          {
            title: "Protocolo Beta",
            description: "Para conflictos emocionales y bloqueos afectivos"
          },
          {
            title: "Protocolo Gamma",
            description: "Para dinámicas sistémicas y relaciones"
          },
          {
            title: "Protocolo Delta",
            description: "Para integración existencial y propósito"
          },
          {
            title: "Algoritmo de decisión",
            description: "Cómo elegir el protocolo adecuado para cada caso"
          }
        ]
      },
      {
        id: "tema-2-5",
        title: "Sorpresa Especial",
        description: "Introducción a una herramienta transformadora que trabajaremos al día siguiente.",
        duration: "30 min",
        subTopics: [
          {
            title: "Presentación de la herramienta",
            description: "Introducción a la metodología del sobre"
          },
          {
            title: "Preparación para el día siguiente",
            description: "Contexto y expectativas para la sesión 3"
          }
        ]
      }
    ],
    materials: [
      "Ropa cómoda para prácticas",
      "Cuaderno de trabajo y reflexión",
      "Manual de Context Bioenergetics: 13 hologramas y 20 sensaciones (proporcionado)",
      "Guía de Context Engineering y Esquema de 4 Niveles (proporcionado)",
      "Protocolo de los 4 Protocolos: Alpha, Beta, Gamma, Delta (proporcionado)",
      "Algoritmo de decisión terapéutica (proporcionado)",
      "Objetos personales significativos (opcional)"
    ]
  },
  {
    id: 3,
    title: "Integración y Transformación Sostenible",
    date: "7 de Diciembre 2025",
    time: "10:00 AM - 6:00 PM",
    location: "Hotel Galería Plaza Reforma, Ciudad de México (Presencial/Online)",
    description: "La sesión final del bloque presencial se enfoca en la integración de metodologías y el diseño de sistemas de transformación a largo plazo. Se introducen herramientas avanzadas para casos complejos y se establece el protocolo de seguimiento estructurado.",
    objectives: [
      "Comprender la neurobiología del ritual y diseñar prácticas transformadoras personalizadas",
      "Aplicar el Protocolo de las 7 Excepciones para casos resistentes al cambio",
      "Dominar la Metodología de Decisión Consciente en tres elementos (Enfoque, Resignificación, Acción)",
      "Establecer el Programa estructurado de 90 días post-seminario con seguimiento continuo",
      "Introducirse al LSP Insight System (LEGO Serious Play adaptado para terapia)",
      "Conocer herramientas de Inteligencia Artificial aplicadas a procesos terapéuticos",
      "Realizar síntesis metodológica integral de todas las técnicas aprendidas",
      "Recibir certificación de primer nivel al completar el bloque presencial"
    ],
    multimedia: [
      {
        id: "video-intro-3",
        type: "video",
        title: "Sistemas de Decisión Consciente",
        description: "Video introductorio sobre el marco de transformación personal",
        url: "#",
        duration: "18 min",
        category: "intro"
      },
      {
        id: "pdf-decision-3",
        type: "download",
        title: "Manual de Decisión Consciente",
        description: "Guía completa del marco de transformación",
        url: "#",
        fileSize: "2.8 MB",
        category: "practice"
      }
    ],
    topics: [
      {
        id: "tema-3-1",
        title: "El Poder de los Rituales",
        description: "Neurobiología del ritual, diseño de ritual matutino transformador y práctica de creación personalizada.",
        duration: "1.5 horas",
        subTopics: [
          {
            title: "Neurobiología del ritual",
            description: "Fundamentos científicos de cómo los rituales transforman el cerebro"
          },
          {
            title: "Diseño de ritual matutino transformador",
            description: "Creación de rituales personalizados para el día a día"
          },
          {
            title: "Práctica de creación personalizada",
            description: "Ejercicio práctico de diseño de ritual propio"
          }
        ]
      },
      {
        id: "tema-3-2",
        title: "Profundización de la Sorpresa",
        description: "Trabajo experiencial con la herramienta del sobre, las 3 preguntas poderosas y compromiso público grupal.",
        duration: "2 horas",
        subTopics: [
          {
            title: "La herramienta del sobre",
            description: "Metodología para compromiso y transformación"
          },
          {
            title: "Las 3 preguntas poderosas",
            description: "Preguntas que generan transformación profunda"
          },
          {
            title: "Compromiso público grupal",
            description: "Establecimiento de compromisos en comunidad"
          }
        ]
      },
      {
        id: "tema-3-3",
        title: "Protocolo de las 7 Excepciones",
        description: "Para casos que no responden a protocolos estándar: las 7 preguntas quirúrgicas y demostración con caso complejo.",
        duration: "2 horas",
        subTopics: [
          {
            title: "Casos que no responden a protocolos estándar",
            description: "Identificación de situaciones especiales"
          },
          {
            title: "Las 7 preguntas quirúrgicas",
            description: "Preguntas específicas para casos complejos"
          },
          {
            title: "Demostración con caso complejo",
            description: "Aplicación práctica del protocolo"
          }
        ]
      },
      {
        id: "tema-3-4",
        title: "Los 3 Elementos de Decisión Consciente",
        description: "Maestría del Enfoque, Resignificación y Reencuadre, y Acción Específica para transformación diaria.",
        duration: "2 horas",
        subTopics: [
          {
            title: "Maestría del Enfoque",
            description: "Desarrollo de atención consciente y dirigida"
          },
          {
            title: "Resignificación y Reencuadre",
            description: "Asignación de nuevos significados y transformación de limitaciones"
          },
          {
            title: "Acción Específica",
            description: "Implementación de acciones concretas para transformación diaria"
          }
        ]
      },
      {
        id: "tema-3-5",
        title: "Programa Integral de 90 Días",
        description: "Estructura semanal de seguimiento, comunidad de apoyo y plan personalizado.",
        duration: "1 hora",
        subTopics: [
          {
            title: "Estructura semanal de seguimiento",
            description: "Plan de acompañamiento durante 90 días"
          },
          {
            title: "Comunidad de apoyo",
            description: "Red de soporte y colaboración"
          },
          {
            title: "Plan personalizado",
            description: "Diseño de estrategia individual de transformación"
          }
        ]
      },
      {
        id: "tema-3-6",
        title: "Introducción al LSP Insight System",
        description: "Preparación para la Sesión 4: LEGO® Serious Play® adaptado para terapia.",
        duration: "1 hora",
        subTopics: [
          {
            title: "Fundamentos de LSP",
            description: "Principios de LEGO® Serious Play®"
          },
          {
            title: "Adaptación para terapia",
            description: "Cómo aplicar LSP en contextos terapéuticos"
          },
          {
            title: "Preparación para Sesión 4",
            description: "Contexto y expectativas para la próxima sesión"
          }
        ]
      },
      {
        id: "tema-3-7",
        title: "Herramientas de IA para Tu Transformación",
        description: "Presentación de asistentes inteligentes personalizados disponibles 24/7.",
        duration: "1 hora",
        subTopics: [
          {
            title: "Asistentes inteligentes personalizados",
            description: "5 Apps de IA diseñadas para tu transformación"
          },
          {
            title: "Disponibilidad 24/7",
            description: "Acceso continuo a herramientas de apoyo"
          },
          {
            title: "Integración con el programa",
            description: "Cómo usar las herramientas de IA en tu proceso"
          }
        ]
      },
      {
        id: "tema-3-8",
        title: "Síntesis Integral y Cierre Inspirador",
        description: "Mapa completo de las 6 metodologías, círculo de compromisos y entrega de certificados.",
        duration: "1.5 horas",
        subTopics: [
          {
            title: "Mapa completo de las 6 metodologías",
            description: "Integración de todas las técnicas aprendidas"
          },
          {
            title: "Círculo de compromisos",
            description: "Establecimiento de compromisos grupales"
          },
          {
            title: "Entrega de certificados",
            description: "Reconocimiento del progreso y logros"
          }
        ]
      }
    ],
    materials: [
      "Ropa cómoda para prácticas",
      "Cuaderno de reflexión y diseño",
      "Manual del Protocolo de las 7 Excepciones (proporcionado)",
      "Guía de Diseño de Rituales Transformadores (proporcionado)",
      "Programa estructurado de 90 días (proporcionado)",
      "Introducción al LSP Insight System (proporcionado)",
      "Guía de herramientas de IA aplicadas a procesos terapéuticos (proporcionado)",
      "Mapa de integración metodológica (proporcionado)",
      "Objetos simbólicos personales (opcional)"
    ]
  },
  {
    id: 4,
    title: "LSP Insight System: Del Símbolo a la Acción",
    date: "25 de Enero 2026 (Online)",
    time: "10:00 AM - 6:00 PM",
    location: "Sesión Online",
    description: "Primera sesión de seguimiento que introduce metodología avanzada de materialización de insights mediante construcción física de modelos tridimensionales. Se revisa el progreso del programa de 90 días y se profundiza en protocolos avanzados.",
    objectives: [
      "Revisar y evaluar el progreso del programa de 90 días con ajustes estratégicos personalizados",
      "Aplicar protocolos avanzados de Context Bioenergetics en casos complejos",
      "Dominar los fundamentos del LSP Insight System y su metodología de acción efectiva",
      "Construir modelos simbólicos tridimensionales para resolución de conflictos",
      "Conectar comprensión teórica con implementación práctica mediante construcción física",
      "Materializar ideas abstractas en objetos tangibles mediante 'pensar con las manos'"
    ],
    multimedia: [
      {
        id: "video-intro-4",
        type: "video",
        title: "Protocolos Avanzados de Bioenergética",
        description: "Introducción a los protocolos Alpha, Beta, Gamma y Delta",
        url: "#",
        duration: "22 min",
        category: "intro"
      },
      {
        id: "pdf-protocolos-4",
        type: "download",
        title: "Manual de Protocolos Bioenergéticos",
        description: "Guía completa de los cuatro protocolos principales",
        url: "#",
        fileSize: "3.2 MB",
        category: "practice"
      },
      {
        id: "article-lsp-4",
        type: "article",
        title: "LEGO® Serious Play® en Transformación",
        description: "Artículo sobre la metodología LSP aplicada al desarrollo personal",
        url: "#",
        category: "reference"
      }
    ],
    topics: [
      {
        id: "tema-4-1",
        title: "Webinar Preparatorio: Construye Tu Historia",
        description: "Cómo transformar tu narrativa personal en herramienta de empoderamiento.",
        duration: "1 hora",
        subTopics: [
          {
            title: "Transformación de narrativa personal",
            description: "De víctima a protagonista de tu historia"
          },
          {
            title: "Herramienta de empoderamiento",
            description: "Cómo usar tu historia para generar poder personal"
          }
        ]
      },
      {
        id: "tema-4-2",
        title: "Revisión de Progreso y Ajustes",
        description: "Evaluación del avance en los 90 días y ajustes estratégicos personalizados.",
        duration: "1.5 horas",
        subTopics: [
          {
            title: "Evaluación del avance en los 90 días",
            description: "Revisión de logros y desafíos"
          },
          {
            title: "Ajustes estratégicos personalizados",
            description: "Modificaciones basadas en resultados individuales"
          }
        ]
      },
      {
        id: "tema-4-3",
        title: "Protocolos Avanzados de Bioenergética",
        description: "Aplicación práctica profunda de los 4 Protocolos (Alpha, Beta, Gamma, Delta) en casos complejos.",
        duration: "2.5 horas",
        subTopics: [
          {
            title: "Protocolo Alpha en casos complejos",
            description: "Aplicación avanzada para síntomas físicos persistentes"
          },
          {
            title: "Protocolo Beta en casos complejos",
            description: "Trabajo profundo con conflictos emocionales arraigados"
          },
          {
            title: "Protocolo Gamma en casos complejos",
            description: "Resolución de dinámicas sistémicas profundas"
          },
          {
            title: "Protocolo Delta en casos complejos",
            description: "Integración existencial y propósito de vida"
          }
        ]
      },
      {
        id: "tema-4-4",
        title: "Metodología de Acción Efectiva",
        description: "Conectar comprensión con implementación a través de protocolos que aseguran compromiso auténtico.",
        duration: "1.5 horas",
        subTopics: [
          {
            title: "Conexión comprensión-implementación",
            description: "Puente entre teoría y práctica efectiva"
          },
          {
            title: "Protocolos de compromiso auténtico",
            description: "Métodos para asegurar implementación real"
          }
        ]
      },
      {
        id: "tema-4-5",
        title: "LSP Insight System: Del Símbolo a la Acción",
        description: "Descubre los principios de LEGO® Serious Play® para materializar ideas y 'pensar con las manos'. Construcción física de conflictos y soluciones.",
        duration: "2 horas",
        subTopics: [
          {
            title: "Principios de LEGO® Serious Play®",
            description: "Fundamentos de la metodología LSP"
          },
          {
            title: "Pensar con las manos",
            description: "Materialización de conceptos abstractos"
          },
          {
            title: "Construcción física de conflictos",
            description: "Representación tangible de problemas"
          },
          {
            title: "Construcción física de soluciones",
            description: "Materialización de estrategias de resolución"
          }
        ]
      }
    ],
    materials: [
      "Kit de LEGO® para LSP Insight System (proporcionado)",
      "Cuaderno de trabajo y reflexión",
      "Manual completo de LSP Insight System (proporcionado)",
      "Guía de Metodología de Acción Efectiva (proporcionado)",
      "Protocolos avanzados de Context Bioenergetics (proporcionado)",
      "Cámara web funcionando para modalidad online",
      "Espacio tranquilo y privado para la sesión",
      "Acceso a las 5 aplicaciones de IA personalizadas"
    ]
  },
  {
    id: 5,
    title: "Maestría y Proyección Futura",
    date: "22 de Febrero 2026 (Online)",
    time: "10:00 AM - 6:00 PM",
    location: "Sesión Online",
    description: "Sesión de cierre que consolida aprendizajes, evalúa transformación lograda y establece trayectoria de desarrollo profesional continuo. Se profundiza en metodología LSP para diseño estratégico y se integran herramientas avanzadas de IA.",
    objectives: [
      "Profundizar en metodología LSP para diseño estratégico de vida y proyectos",
      "Transformar descubrimientos de modelos LSP en arquetipos identificables y planes de acción concretos",
      "Integrar herramientas avanzadas de Inteligencia Artificial como asistente estratégico profesional",
      "Evaluar progreso y consolidar cambios logrados durante todo el programa",
      "Establecer compromisos profesionales y personales a largo plazo",
      "Diseñar trayectoria de desarrollo continuo post-certificación",
      "Recibir certificación final del programa completo en Inteligencia Energética"
    ],
    multimedia: [
      {
        id: "video-intro-5",
        type: "video",
        title: "Integración Final y Proyección",
        description: "Video de síntesis y proyección futura",
        url: "#",
        duration: "20 min",
        category: "intro"
      },
      {
        id: "pdf-ia-5",
        type: "download",
        title: "Guía de IA para Transformación",
        description: "Manual de uso de IA como asistente estratégico",
        url: "#",
        fileSize: "2.5 MB",
        category: "reference"
      },
      {
        id: "podcast-sintesis-5",
        type: "podcast",
        title: "Síntesis de Aprendizajes",
        description: "Audio de integración de todos los conceptos",
        url: "#",
        duration: "30 min",
        category: "supplement"
      }
    ],
    topics: [
      {
        id: "tema-5-1",
        title: "Webinar Preparatorio: Construyendo Nuestra Vida con LEGO Serious Play",
        description: "Metodología LSP para materializar estrategias de vida concretas.",
        duration: "1 hora",
        subTopics: [
          {
            title: "Metodología LSP para vida",
            description: "Aplicación de LEGO® Serious Play® a estrategias de vida"
          },
          {
            title: "Materialización de estrategias",
            description: "Cómo convertir ideas en planes concretos"
          }
        ]
      },
      {
        id: "tema-5-2",
        title: "Descubrimiento de Insights y Estrategias con LSP",
        description: "Transforma los descubrimientos de los modelos en arquetipos, estrategias claras y plan de acción concreto.",
        duration: "3 horas",
        subTopics: [
          {
            title: "Transformación de descubrimientos en arquetipos",
            description: "Identificación de patrones profundos en modelos LSP"
          },
          {
            title: "Desarrollo de estrategias claras",
            description: "Creación de estrategias basadas en insights"
          },
          {
            title: "Plan de acción concreto",
            description: "Implementación práctica de estrategias identificadas"
          }
        ]
      },
      {
        id: "tema-5-3",
        title: "Integración Avanzada de Herramientas de IA",
        description: "Uso estratégico de IA como asistente en tu práctica profesional y personal.",
        duration: "2 horas",
        subTopics: [
          {
            title: "Uso estratégico de IA",
            description: "IA como asistente en análisis y planificación"
          },
          {
            title: "Aplicación en práctica profesional",
            description: "Integración de IA en contextos profesionales"
          },
          {
            title: "Aplicación en desarrollo personal",
            description: "Uso de IA para crecimiento personal continuo"
          }
        ]
      },
      {
        id: "tema-5-4",
        title: "Síntesis Final y Proyección",
        description: "Integración completa de los aprendizajes, establecimiento de compromisos a largo plazo y plan de desarrollo continuo.",
        duration: "2 horas",
        subTopics: [
          {
            title: "Integración completa de aprendizajes",
            description: "Síntesis de todas las metodologías del programa"
          },
          {
            title: "Establecimiento de compromisos a largo plazo",
            description: "Objetivos y compromisos para el futuro"
          },
          {
            title: "Plan de desarrollo continuo",
            description: "Estrategias para crecimiento personal permanente"
          }
        ]
      }
    ],
    materials: [
      "Kit de LEGO® para construcción avanzada (proporcionado)",
      "Cuaderno de síntesis y proyección futura",
      "Guía de integración avanzada de herramientas de IA (proporcionado)",
      "Manual de diseño estratégico con LSP (proporcionado)",
      "Plantilla de plan de desarrollo continuo (proporcionado)",
      "Acceso completo a las 5 aplicaciones de IA personalizadas",
      "Certificado de certificación profesional completa (al completar)",
      "Lista de objetivos y compromisos a largo plazo"
    ]
  }
];
