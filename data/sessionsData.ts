export interface SessionData {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
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
    title: "Neuroplasticidad, IA y Sistemas de Inteligencia Estratégica",
    date: "5 de Diciembre 2025",
    time: "10:00 AM - 6:00 PM",
    location: "Ciudad de México",
    objectives: [
      "Explorar la evolución del cerebro y sus bases neurobiológicas",
      "Aprender técnicas de priming neurofisiológico para estados óptimos",
      "Utilizar IA como asistente para el crecimiento personal",
      "Desarrollar control consciente sobre el piloto automático",
      "Practicar regulación del sistema nervioso autónomo"
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
        title: "Webinar de Introducción",
        description: "Video introductorio del seminario que establece las bases conceptuales y el contexto del programa de transformación energética.",
        duration: "30 min",
        subTopics: [
          {
            title: "Bases conceptuales",
            description: "Fundamentos del programa de transformación energética"
          },
          {
            title: "Contexto del seminario",
            description: "Marco general y objetivos del programa"
          }
        ]
      },
      {
        id: "tema-1-2",
        title: "El cerebro reactivo: supervivencia vs. felicidad",
        description: "Explora la evolución del cerebro, sus bases neurobiológicas y cómo pasar del piloto automático al control consciente.",
        duration: "2 horas",
        subTopics: [
          {
            title: "Evolución del cerebro",
            description: "Desarrollo neurobiológico y adaptaciones evolutivas"
          },
          {
            title: "Piloto automático vs control consciente",
            description: "Transición de patrones reactivos a respuestas conscientes"
          },
          {
            title: "Bases neurobiológicas",
            description: "Fundamentos científicos del comportamiento reactivo"
          }
        ]
      },
      {
        id: "tema-1-3",
        title: "Priming neurofisiológico: entrenamiento de estados óptimos",
        description: "Aprende a regular tu sistema nervioso autónomo a través de técnicas de visualización y respiración consciente.",
        duration: "1.5 horas",
        subTopics: [
          {
            title: "Técnicas de visualización",
            description: "Métodos para preparar el sistema nervioso"
          },
          {
            title: "Respiración consciente",
            description: "Ejercicios de regulación del sistema autónomo"
          },
          {
            title: "Estados óptimos",
            description: "Desarrollo de capacidades de autorregulación"
          }
        ]
      },
      {
        id: "tema-1-4",
        title: "Inteligencia Aumentada: IA para el Crecimiento",
        description: "Utiliza modelos de IA como asistente para profundizar en los conceptos, generar nuevas perspectivas y personalizar tu aprendizaje.",
        duration: "1.5 horas",
        subTopics: [
          {
            title: "IA como asistente",
            description: "Herramientas de inteligencia artificial para el desarrollo personal"
          },
          {
            title: "Nuevas perspectivas",
            description: "Generación de insights y enfoques innovadores"
          },
          {
            title: "Aprendizaje personalizado",
            description: "Adaptación de contenidos a necesidades individuales"
          }
        ]
      },
      {
        id: "tema-1-5",
        title: "Workshop 1: Priming Neurofisiológico",
        description: "Sesión práctica de entrenamiento en priming neurofisiológico y regulación del sistema nervioso autónomo.",
        duration: "2 horas",
        subTopics: [
          {
            title: "Técnicas de priming",
            description: "Métodos para preparar el sistema nervioso para estados óptimos"
          },
          {
            title: "Regulación autónoma",
            description: "Ejercicios para equilibrar el sistema nervioso simpático y parasimpático"
          }
        ]
      },
      {
        id: "tema-1-6",
        title: "Workshop 2: LSP Insight System - Exploración Simbólica con IA",
        description: "Taller práctico utilizando el LSP Insight System, una fusión pionera entre LEGO® Serious Play®, acompañamiento simbólico y emocional, e inteligencia artificial generativa como facilitador reflexivo.",
        duration: "1.5 horas",
        subTopics: [
          {
            title: "Metodología LSP Insight",
            description: "Introducción al sistema que combina construcción simbólica con IA para procesos profundos de exploración personal"
          },
          {
            title: "Construcción simbólica guiada",
            description: "Protocolo para construir modelos con bricks según objetivos específicos de desarrollo personal"
          },
          {
            title: "Acompañamiento con IA especializada",
            description: "Interacción con asistente de IA entrenado para interpretación simbólica y formulación de preguntas exploratorias"
          },
          {
            title: "Traducción simbólica a estrategia",
            description: "Conversión del símbolo en acciones concretas y mapas internos para el avance personal"
          }
        ]
      }
    ],
    materials: [
      "Ropa cómoda y holgada",
      "Botella de agua",
      "Cuaderno para notas personales",
      "Set básico de bricks LEGO® (será proporcionado)",
      "Manta o cojín para meditación (opcional)"
    ]
  },
  {
    id: 2,
    title: "Bioenergética y Context Engineering Aplicado",
    date: "6 de Diciembre 2025",
    time: "10:00 AM - 6:00 PM",
    location: "Ciudad de México",
    objectives: [
      "Dominar el arte de formular preguntas de alta calidad",
      "Aplicar el marco metodológico de Context Engineering",
      "Explorar los niveles Presente, Pasado y Sistema",
      "Identificar la sensación raíz corporal",
      "Comprender la dinámica cuerpo-emoción-creencia"
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
        title: "Context Engineering y Esquema de Contexto",
        description: "Domina el arte de formular preguntas de alta calidad para pasar de un modelo reactivo a uno estructurado.",
        duration: "2 horas",
        subTopics: [
          {
            title: "Formulación de preguntas",
            description: "Técnicas para crear preguntas que generen insights profundos"
          },
          {
            title: "Modelo reactivo vs estructurado",
            description: "Diferencias entre respuestas automáticas y conscientes"
          }
        ]
      },
      {
        id: "tema-2-2",
        title: "Rastreo guiado con Esquema de Contexto",
        description: "Aplica un marco metodológico para explorar los niveles Presente, Pasado y Sistema que sostienen tus patrones actuales.",
        duration: "2.5 horas",
        subTopics: [
          {
            title: "Nivel Presente",
            description: "Exploración de patrones actuales y su manifestación"
          },
          {
            title: "Nivel Pasado",
            description: "Rastreo de orígenes y experiencias formativas"
          },
          {
            title: "Nivel Sistema",
            description: "Identificación de creencias y estructuras profundas"
          }
        ]
      },
      {
        id: "tema-2-3",
        title: "Del síntoma al escenario energético",
        description: "Aprende a identificar la sensación raíz corporal y a comprender la dinámica cuerpo-emoción-creencia.",
        duration: "2 horas",
        subTopics: [
          {
            title: "Identificación de sensaciones",
            description: "Técnicas para reconocer señales corporales"
          },
          {
            title: "Dinámica cuerpo-emoción-creencia",
            description: "Comprensión de la interconexión entre estos elementos"
          }
        ]
      },
      {
        id: "tema-2-4",
        title: "Workshop: Context Engineering Bioenergético",
        description: "Taller práctico de Context Engineering aplicado a la bioenergética y transformación personal.",
        duration: "1.5 horas",
        subTopics: [
          {
            title: "Aplicación práctica",
            description: "Ejercicios de Context Engineering en situaciones reales"
          },
          {
            title: "Integración bioenergética",
            description: "Combinación de técnicas de Context Engineering con bioenergética"
          }
        ]
      }
    ],
    materials: [
      "Ropa cómoda",
      "Cuaderno de trabajo",
      "Objetos personales significativos",
      "Lista de objetivos personales"
    ]
  },
  {
    id: 3,
    title: "Sistemas de Decisión Consciente - Experiencia Vivencial",
    date: "7 de Diciembre 2025",
    time: "10:00 AM - 6:00 PM",
    location: "Ciudad de México",
    objectives: [
      "Aprender el marco de transformación personal basado en enfoque, significado y acción",
      "Entrenar la atención y utilizar preguntas transformadoras",
      "Desarrollar la habilidad de asignar nuevos significados",
      "Integrar los aprendizajes de las primeras 3 sesiones",
      "Establecer compromisos personalizados y recibir certificación"
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
        title: "Los Tres Elementos de Decisión Consciente",
        description: "Aprende el marco de transformación personal basado en el enfoque, el significado y la acción específica.",
        duration: "2 horas",
        subTopics: [
          {
            title: "Elemento Enfoque",
            description: "Desarrollo de la atención consciente y dirigida"
          },
          {
            title: "Elemento Significado",
            description: "Asignación consciente de significados a las experiencias"
          },
          {
            title: "Elemento Acción",
            description: "Implementación de acciones específicas y efectivas"
          }
        ]
      },
      {
        id: "tema-3-2",
        title: "Maestría del Enfoque Consciente",
        description: "Entrena tu atención y utiliza preguntas transformadoras para cultivar estados internos óptimos.",
        duration: "2.5 horas",
        subTopics: [
          {
            title: "Entrenamiento de atención",
            description: "Técnicas para mejorar la concentración y presencia"
          },
          {
            title: "Preguntas transformadoras",
            description: "Formulación de preguntas que generen cambios profundos"
          }
        ]
      },
      {
        id: "tema-3-3",
        title: "Resignificación y Reencuadre Consciente",
        description: "Desarrolla la habilidad de asignar nuevos significados y reencuadrar limitaciones para potenciar tu vida.",
        duration: "2 horas",
        subTopics: [
          {
            title: "Técnicas de resignificación",
            description: "Métodos para cambiar el significado de experiencias pasadas"
          },
          {
            title: "Reencuadre de limitaciones",
            description: "Transformación de obstáculos en oportunidades"
          }
        ]
      },
      {
        id: "tema-3-4",
        title: "Síntesis de Transformación Integral y Certificación",
        description: "Integra los aprendizajes de las primeras 3 sesiones, establece compromisos personalizados y recibe tu certificación inicial.",
        duration: "1.5 horas",
        subTopics: [
          {
            title: "Integración de aprendizajes",
            description: "Síntesis de todas las técnicas aprendidas"
          },
          {
            title: "Compromisos personalizados",
            description: "Establecimiento de objetivos y planes de acción"
          },
          {
            title: "Certificación inicial",
            description: "Reconocimiento del progreso y logros alcanzados"
          }
        ]
      }
    ],
    materials: [
      "Ropa cómoda",
      "Cuaderno de reflexión",
      "Objetos simbólicos personales",
      "Lista de áreas de mejora"
    ]
  },
  {
    id: 4,
    title: "Consolidación y Profundización",
    date: "25 de Enero 2026 (Online)",
    time: "10:00 AM - 6:00 PM",
    location: "Sesión Online",
    objectives: [
      "Evaluar el progreso personal y ajustar estrategias",
      "Aprender los cuatro protocolos principales de bioenergética",
      "Conectar la comprensión con la implementación",
      "Descubrir los principios de LEGO® Serious Play®",
      "Materializar ideas y 'pensar con las manos'"
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
        title: "Revisión de Progreso y Ajustes",
        description: "Evaluación del progreso personal y ajustes en las estrategias implementadas.",
        duration: "1.5 horas",
        subTopics: [
          {
            title: "Evaluación de progreso",
            description: "Herramientas para medir el avance personal"
          },
          {
            title: "Ajustes estratégicos",
            description: "Modificaciones basadas en los resultados obtenidos"
          }
        ]
      },
      {
        id: "tema-4-2",
        title: "Protocolos Avanzados de Bioenergética",
        description: "Los cuatro protocolos principales (Alpha, Beta, Gamma, Delta) y su aplicación práctica.",
        duration: "3 horas",
        subTopics: [
          {
            title: "Protocolo Alpha",
            description: "Técnicas para estados de relajación profunda"
          },
          {
            title: "Protocolo Beta",
            description: "Métodos para activación y energía"
          },
          {
            title: "Protocolo Gamma",
            description: "Técnicas para estados de alta frecuencia"
          },
          {
            title: "Protocolo Delta",
            description: "Métodos para estados de integración profunda"
          }
        ]
      },
      {
        id: "tema-4-3",
        title: "Metodología de Acción Efectiva",
        description: "Conecta la comprensión con la implementación a través de protocolos que aseguran un compromiso auténtico.",
        duration: "2 horas",
        subTopics: [
          {
            title: "Conexión comprensión-implementación",
            description: "Puente entre teoría y práctica"
          },
          {
            title: "Protocolos de compromiso",
            description: "Métodos para asegurar la implementación efectiva"
          }
        ]
      },
      {
        id: "tema-4-4",
        title: "LSP Insight System: del símbolo a la acción",
        description: "Descubre los principios de LEGO® Serious Play® para materializar ideas y 'pensar con las manos'.",
        duration: "1.5 horas",
        subTopics: [
          {
            title: "Principios de LSP",
            description: "Fundamentos de la metodología LEGO® Serious Play®"
          },
          {
            title: "Materialización de ideas",
            description: "Técnicas para convertir conceptos abstractos en objetos tangibles"
          }
        ]
      }
    ],
    materials: [
      "Kit de LEGO® (proporcionado)",
      "Cuaderno de trabajo",
      "Cámara web funcionando",
      "Espacio tranquilo para la sesión"
    ]
  },
  {
    id: 5,
    title: "Maestría y Proyección Futura",
    date: "22 de Febrero 2026 (Online)",
    time: "10:00 AM - 6:00 PM",
    location: "Sesión Online",
    objectives: [
      "Transformar descubrimientos en arquetipos y estrategias claras",
      "Crear un plan de acción concreto",
      "Integrar herramientas de IA como asistente estratégico",
      "Integrar completamente todos los aprendizajes",
      "Establecer compromisos a largo plazo y plan de desarrollo continuo"
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
        title: "Descubrimiento de insights y estrategias con LSP",
        description: "Transforma los descubrimientos de los modelos en arquetipos, estrategias claras y un plan de acción concreto.",
        duration: "3 horas",
        subTopics: [
          {
            title: "Identificación de arquetipos",
            description: "Reconocimiento de patrones profundos en los modelos LSP"
          },
          {
            title: "Desarrollo de estrategias",
            description: "Creación de planes de acción basados en insights"
          },
          {
            title: "Plan de acción concreto",
            description: "Implementación práctica de las estrategias identificadas"
          }
        ]
      },
      {
        id: "tema-5-2",
        title: "Integración de Herramientas de IA",
        description: "Uso avanzado de IA como asistente estratégico en tu práctica profesional y personal.",
        duration: "2.5 horas",
        subTopics: [
          {
            title: "IA como asistente estratégico",
            description: "Uso de IA para análisis y planificación"
          },
          {
            title: "Aplicación profesional",
            description: "Integración de IA en la práctica profesional"
          },
          {
            title: "Aplicación personal",
            description: "Uso de IA para desarrollo personal continuo"
          }
        ]
      },
      {
        id: "tema-5-3",
        title: "Síntesis Final y Proyección",
        description: "Integración completa de los aprendizajes, establecimiento de compromisos a largo plazo y plan de desarrollo continuo.",
        duration: "2.5 horas",
        subTopics: [
          {
            title: "Integración completa",
            description: "Síntesis de todos los aprendizajes del programa"
          },
          {
            title: "Compromisos a largo plazo",
            description: "Establecimiento de objetivos y compromisos futuros"
          },
          {
            title: "Plan de desarrollo continuo",
            description: "Estrategias para el crecimiento personal continuo"
          }
        ]
      }
    ],
    materials: [
      "Kit de LEGO® (proporcionado)",
      "Cuaderno de síntesis",
      "Acceso a herramientas de IA",
      "Lista de objetivos a largo plazo"
    ]
  }
];
