export interface Translations {
  // Navigation
  nav: {
    programa: string;
    ubicacion: string;
    webinars: string;
    galeria: string;
    paraQuien: string;
    resultados: string;
    testimonios: string;
    incluye: string;
    inversion: string;
    inscribirse: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    location: string;
    date: string;
    subtitle: string;
    description: string;
    ctaInscribirse: string;
    ctaVerPrograma: string;
  };
  
  // Program Section
    program: {
      title: string;
      subtitle: string;
      disclaimer: string;
    sessions: {
      session1: string;
      session2: string;
      session3: string;
      session4: string;
      session5: string;
    };
    topics: {
      session1: {
        title: string;
        date: string;
        topics: Array<{ title: string; description: string; videoUrl?: string }>;
      };
      session2: {
        title: string;
        date: string;
        topics: Array<{ title: string; description: string; videoUrl?: string }>;
      };
      session3: {
        title: string;
        date: string;
        topics: Array<{ title: string; description: string; videoUrl?: string }>;
      };
      session4: {
        title: string;
        date: string;
        topics: Array<{ title: string; description: string; videoUrl?: string }>;
      };
      session5: {
        title: string;
        date: string;
        topics: Array<{ title: string; description: string; videoUrl?: string }>;
      };
    };
  };
  
  // Who is it for Section
  whoIsItFor: {
    title: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
  };
  
  // Results Section
  results: {
    title: string;
    cards: Array<{
      title: string;
      benefits: string[];
    }>;
  };
  
  // Testimonials Section
  testimonials: {
    title: string;
    subtitle: string;
    testimonials: Array<{
      quote: string;
      name: string;
      role: string;
    }>;
  };
  
  // Includes Section
  includes: {
    title: string;
    subtitle: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  
  // Investment Section
  investment: {
    title: string;
    subtitle: string;
    earlyBird: string;
    regular: string;
    earlyBirdPrice: string;
    regularPrice: string;
    reservationInfo: string;
    validUntil: string;
    includes: string;
    ctaWhatsApp: string;
  };
  
  // Webinars Section
  webinars: {
    title: string;
    subtitle: string;
    description: string;
    videos: Array<{
      title: string;
      description: string;
      videoUrl: string;
      session: string;
    }>;
  };
  gallery: {
    title: string;
    subtitle: string;
    description: string;
  };
  
  // Footer
  footer: {
    quote: string;
  };
}

export const translations: Record<string, Translations> = {
  es: {
    nav: {
      programa: "Programa",
      ubicacion: "Ubicación",
      webinars: "Webinars",
      galeria: "Galería",
      paraQuien: "Para Quién",
      resultados: "Resultados",
      testimonios: "Testimonios",
      incluye: "¿Qué Incluye?",
      inversion: "Inversión",
      inscribirse: "Inscribirse"
    },
    hero: {
      title: "Seminario Internacional de Inteligencia Energética",
      location: "Hotel Galería Plaza Reforma, Ciudad de México",
      date: "Diciembre 2025 - Febrero 2026",
      subtitle: "Ahora potenciado con herramientas de Inteligencia Artificial para acelerar tu transformación.",
      description: "Una experiencia transformadora de 5 sesiones para transformar tu cerebro reactivo en una herramienta de creación consciente.",
      ctaInscribirse: "Inscribirme Ahora",
      ctaVerPrograma: "Ver Programa"
    },
    program: {
      title: "Programa Detallado",
      subtitle: "Haz clic en cada sesión para explorar el contenido completo del seminario",
      disclaimer: "*El programa está sujeto a cambios sin previo aviso",
      sessions: {
        session1: "SESIÓN 1",
        session2: "SESIÓN 2", 
        session3: "SESIÓN 3",
        session4: "SESIÓN 4",
        session5: "SESIÓN 5"
      },
      topics: {
        session1: {
          title: "Neuroplasticidad y Reprocesamiento Bilateral",
          date: "5 de Diciembre 2025 (Presencial/Online)",
          topics: [
            {
              title: "Bienvenida y Encuadre del Seminario",
              description: "Presentación del programa completo, objetivos de transformación y creación del contenedor seguro. Introducción al marco teórico científico basado en neuroplasticidad, Polyvagal Theory y bases de reprocesamiento bilateral."
            },
            {
              title: "El Cerebro Reactivo: Neurobiología del Sistema de Supervivencia",
              description: "Comprensión profunda de cómo el sistema nervioso procesa información emocional. Exploración de la neurobiología del sistema de supervivencia y adaptación, y cómo transformar patrones automáticos en decisiones conscientes mediante neuroplasticidad aplicada."
            },
            {
              title: "TRSB: Técnica de Reprocesamiento Somato-Cognitivo Bilateral",
              description: "Protocolo completo de reprocesamiento bilateral basado en investigación científica. Aprendizaje de fundamentos, las 4 etapas de transformación (identificación, procesamiento, integración, consolidación), protocolo paso a paso y práctica supervisada con casos reales."
            },
            {
              title: "Técnicas de Visualización Neurofisiológica",
              description: "Métodos para crear estados óptimos mediante visualización y regulación del sistema nervioso autónomo. Aprendizaje de técnicas de priming neurofisiológico para estados de alta performance."
            },
            {
              title: "PONS: Sistema de Posicionamiento Neurocognitivo",
              description: "Sistema completo con las 8 posiciones de acceso visual para estados internos. Aprendizaje de anclaje espacial de recursos internos, técnicas de recuperación de recursos cuando se necesitan, e integración práctica en contextos terapéuticos y de vida cotidiana."
            },
          ]
        },
        session2: {
          title: "Bioenergética Holográfica y Context Engineering",
          date: "6 de Diciembre 2025 (Presencial/Online)",
          topics: [
            {
              title: "Bioenergética Holográfica: Sistema de Evaluación Energética",
              description: "Dominio del sistema de 13 hologramas bioenergéticos y su correlación clínica. Identificación de las 20 sensaciones viscerales como indicadores diagnósticos precisos. Aplicación del protocolo de test muscular para evaluación bioenergética y comprensión de la conexión entre síntomas físicos y patrones energéticos."
            },
            {
              title: "Protocolo de Rastreo Completo: Del Síntoma al Origen",
              description: "Protocolo sistemático que incluye recesión de edad para acceder a experiencias formativas, búsqueda de sensación visceral raíz, rastreo transgeneracional de patrones familiares y lealtades invisibles, integración de niveles (Presente, Pasado, Sistema), y demostración en vivo con casos reales de participantes voluntarios."
            },
            {
              title: "Context Engineering: El Arte de la Pregunta Estratégica",
              description: "Dominio del Esquema de Contexto de 4 Niveles: Nivel Presente (patrones actuales), Nivel Pasado (orígenes históricos), Nivel Transgeneracional (patrones familiares), Nivel Sistema Actual (dinámicas que sostienen el patrón). Aprendizaje de formulación de preguntas estratégicas de alta calidad y rastreo guiado con casos reales."
            },
            {
              title: "Los 4 Protocolos Bioenergéticos: Intervención Diferenciada",
              description: "Protocolo Alpha para síntomas físicos y manifestaciones corporales. Protocolo Beta para conflictos emocionales y bloqueos afectivos. Protocolo Gamma para dinámicas sistémicas y relaciones. Protocolo Delta para integración existencial y propósito. Algoritmo de decisión terapéutica para elegir el protocolo adecuado según cada caso."
            },
            {
              title: "Context Bioenergetics: Fusión Metodológica",
              description: "Integración de Bioenergética y Context Engineering para diseñar intervenciones terapéuticas de precisión. Aplicación práctica de la fusión metodológica en casos complejos y demostración de cómo combinar ambas herramientas para resultados profundos."
            },
            {
              title: "Sorpresa Especial",
              description: "Introducción a una herramienta transformadora que trabajaremos al día siguiente. Preparación y contexto para la sesión 3."
            },
          ]
        },
        session3: {
          title: "Integración y Transformación Sostenible",
          date: "7 de Diciembre 2025 (Presencial/Online)",
          topics: [
            {
              title: "El Poder de los Rituales",
              description: "Neurobiología del ritual, diseño de ritual matutino transformador y práctica de creación personalizada."
            },
            {
              title: "Profundización de la Sorpresa",
              description: "Trabajo experiencial con la herramienta del sobre, las 3 preguntas poderosas y compromiso público grupal."
            },
            {
              title: "Protocolo de las 7 Excepciones",
              description: "Para casos que no responden a protocolos estándar: las 7 preguntas quirúrgicas y demostración con caso complejo."
            },
            {
              title: "Los 3 Elementos de Decisión Consciente",
              description: "Maestría del Enfoque, Resignificación y Reencuadre, y Acción Específica para transformación diaria."
            },
            {
              title: "Programa Integral de 90 Días",
              description: "Estructura semanal de seguimiento, comunidad de apoyo y plan personalizado."
            },
            {
              title: "Introducción al LSP Insight System",
              description: "Preparación para la Sesión 4: LEGO® Serious Play® adaptado para terapia."
            },
            {
              title: "Herramientas de IA para Tu Transformación",
              description: "Presentación de asistentes inteligentes personalizados disponibles 24/7."
            },
            {
              title: "Síntesis Integral y Cierre Inspirador",
              description: "Mapa completo de las 6 metodologías, círculo de compromisos y entrega de certificados."
            }
          ]
        },
        session4: {
          title: "LSP Insight System: Del Símbolo a la Acción",
          date: "25 de Enero 2026 (Online)",
          topics: [
            {
              title: "Webinar Preparatorio: Construye Tu Historia",
              description: "Cómo transformar tu narrativa personal en herramienta de empoderamiento."
            },
            {
              title: "Revisión de Progreso y Ajustes",
              description: "Evaluación del avance en los 90 días y ajustes estratégicos personalizados."
            },
            {
              title: "Protocolos Avanzados de Bioenergética",
              description: "Aplicación práctica profunda de los 4 Protocolos (Alpha, Beta, Gamma, Delta) en casos complejos."
            },
            {
              title: "Metodología de Acción Efectiva",
              description: "Conectar comprensión con implementación a través de protocolos que aseguran compromiso auténtico."
            },
            {
              title: "LSP Insight System: Del Símbolo a la Acción",
              description: "Descubre los principios de LEGO® Serious Play® para materializar ideas y 'pensar con las manos'. Construcción física de conflictos y soluciones."
            }
          ]
        },
        session5: {
          title: "Maestría y Proyección Futura",
          date: "22 de Febrero 2026 (Online)",
          topics: [
            {
              title: "Webinar Preparatorio: Construyendo Nuestra Vida con LEGO Serious Play",
              description: "Metodología LSP para materializar estrategias de vida concretas."
            },
            {
              title: "Descubrimiento de Insights y Estrategias con LSP",
              description: "Transforma los descubrimientos de los modelos en arquetipos, estrategias claras y plan de acción concreto."
            },
            {
              title: "Integración Avanzada de Herramientas de IA",
              description: "Uso estratégico de IA como asistente en tu práctica profesional y personal."
            },
            {
              title: "Síntesis Final y Proyección",
              description: "Integración completa de los aprendizajes, establecimiento de compromisos a largo plazo y plan de desarrollo continuo."
            },
          ]
        }
      }
    },
    whoIsItFor: {
      title: "¿Para Quién es este Seminario?",
      cards: [
        {
          title: "Profesionales de la Salud",
          description: "Terapeutas, coaches y psicólogos que buscan herramientas de vanguardia para generar resultados profundos."
        },
        {
          title: "Líderes y Facilitadores",
          description: "Quienes desean mejorar su impacto y guiar a otros a través de la transformación personal y profesional."
        },
        {
          title: "Público en General",
          description: "Cualquier persona interesada en el crecimiento personal y en descubrir nuevas herramientas para el bienestar."
        },
        {
          title: "Innovadores y Pioneros",
          description: "Profesionales que buscan integrar tecnologías de vanguardia como la IA para potenciar sus habilidades y resultados."
        }
      ]
    },
    results: {
      title: "Lo Que Lograrás",
      cards: [
        {
          title: "En tu Práctica Profesional",
          benefits: [
            "Diagnósticos más precisos y profundos al identificar la raíz bioenergética de los síntomas.",
            "Intervenciones más efectivas y rápidas para tus pacientes o clientes.",
            "Menor desgaste profesional (burnout) al trabajar desde un nivel más sistémico.",
            "Nuevas herramientas para complementar tus metodologías actuales."
          ]
        },
        {
          title: "En tu Liderazgo y Proyectos",
          benefits: [
            "Desbloqueo de la creatividad y la innovación en tu equipo con metodologías como LSP.",
            "Toma de decisiones más estratégicas y alineadas con la visión del proyecto.",
            "Acelera el análisis y la obtención de insights utilizando herramientas de IA como asistente estratégico.",
            "Identificación de puntos ciegos y oportunidades ocultas en tus proyectos."
          ]
        },
        {
          title: "En tu Vida Personal",
          benefits: [
            "Mayor claridad mental y capacidad para gestionar el estrés y la ansiedad.",
            "Comprensión profunda de tus patrones de comportamiento y cómo transformarlos.",
            "Relaciones más auténticas y conscientes al entender las dinámicas sistémicas.",
            "Un sentido renovado de propósito y dirección en tu vida."
          ]
        }
      ]
    },
    testimonials: {
      title: "Voces de la Transformación",
      subtitle: "Más de una década y 12 seminarios transformando vidas. Esto es lo que dicen nuestros alumnos.",
      testimonials: [
        {
          quote: "Este seminario fue un antes y un después en mi práctica. Las herramientas de bioenergética me dieron una nueva dimensión para entender y tratar a mis pacientes.",
          name: "Laura Fernández",
          role: "Psicoterapeuta"
        },
        {
          quote: "Como gerente, la metodología de LSP, ahora combinada con IA, cambió por completo cómo abordamos la estrategia. Aprendí a desbloquear la creatividad de mi equipo a un nivel que no creía posible.",
          name: "Carlos Mendoza",
          role: "Gerente de Proyectos"
        },
        {
          quote: "Fui con la mente abierta y salí con un plan de vida. Entender mis patrones reactivos y cómo cambiarlos fue el regalo más grande que me he dado.",
          name: "Sofía Ramírez",
          role: "Alumna, 12ª Edición"
        }
      ]
    },
    includes: {
      title: "¿Qué Incluye el Seminario?",
      subtitle: "Todo lo necesario para tu transformación energética está incluido",
      items: [
        {
          icon: "🎯",
          title: "3 Días Presenciales u Online",
          description: "5-7 Diciembre 2025 en vivo"
        },
        {
          icon: "🌐",
          title: "2 Sesiones Online de Seguimiento",
          description: "Enero y Febrero 2026"
        },
        {
          icon: "📖",
          title: "Manuales Profesionales Completos",
          description: "Manual de TRSB, Context Bioenergetics, Context Engineering, 4 Protocolos, Protocolo de las 7 Excepciones, Diseño de Rituales, Programa de 90 días, LSP Insight System"
        },
        {
          icon: "🎥",
          title: "Grabaciones de las 5 Sesiones",
          description: "Acceso GRATIS a todas las grabaciones"
        },
        {
          icon: "👥",
          title: "Comunidad Privada de Apoyo",
          description: "Red de apoyo continuo"
        },
        {
          icon: "📅",
          title: "12 Sesiones Grupales Semanales",
          description: "Seguimiento continuo durante 90 días post-seminario"
        },
        {
          icon: "🤖",
          title: "5 Apps de IA Personalizadas",
          description: "1. Asistente de Context Engineering, 2. Generador de Miracle Question, 3. Diseñador de Rituales Matutinos, 4. Coach de los 3 Elementos de Decisión, 5. Compañero de seguimiento de 90 días"
        },
        {
          icon: "🏆",
          title: "Certificación Profesional",
          description: "Certificado oficial de participación"
        },
        {
          icon: "💬",
          title: "Soporte Continuo",
          description: "Acompañamiento durante todo el proceso"
        }
      ]
    },
    investment: {
      title: "Inversión en tu Transformación",
      subtitle: "EARLY BIRD: $8,000 MXN ~~$9,500 MXN~~ - Acceso GRATIS a grabaciones",
      earlyBird: "Precio Early Bird",
      regular: "Precio Regular",
      earlyBirdPrice: "$8,000 MXN",
      regularPrice: "$9,500 MXN",
      reservationInfo: "Aparta tu lugar con $3,000 MXN y paga el resto una semana antes del evento",
      validUntil: "Válido hasta el 16 de Octubre de 2025",
      includes: "Precios para modalidad Presencial y Online. Incluye acceso GRATIS a grabaciones de las 5 sesiones.",
      ctaWhatsApp: "Inscríbete vía WhatsApp"
    },
    webinars: {
      title: "Webinars Introductorios",
      subtitle: "Videos de preparación para cada sesión",
      description: "Accede a los videos introductorios de cada sesión para prepararte y obtener el máximo provecho del seminario.",
      videos: [
        {
          title: "Del cerebro reactivo al creativo",
          description: "Video introductorio que establece las bases conceptuales y el contexto del programa de transformación energética.",
          videoUrl: "https://vimeo.com/1122501757/9d6c991bc4",
          session: "Sesión 1"
        },
        {
          title: "Priming Neurofisiológico Entrena tu Cerebro para Estados Óptimos",
          description: "Video preparatorio para la segunda sesión, profundizando en las técnicas de transformación energética.",
          videoUrl: "https://vimeo.com/1122509089/a1f5880cc0",
          session: "Sesión 2"
        },
        {
          title: "El arte de la pregunta en la terapia bioenergética: Domina el Context Engineering y diseña la sanación",
          description: "Video preparatorio para la tercera sesión, explorando el arte de formular preguntas profundas en terapia bioenergética y cómo el Context Engineering transforma la práctica profesional.",
          videoUrl: "https://vimeo.com/1122510598/a3a96d10d9",
          session: "Sesión 3"
        },
        {
          title: "Construye Tu Historia: El Método Que Convierte Tu Historia En Poder",
          description: "Video preparatorio para la cuarta sesión, descubriendo cómo transformar tu narrativa personal en una herramienta de empoderamiento y consolidación del aprendizaje.",
          videoUrl: "https://vimeo.com/1128316658/533a84ac61",
          session: "Sesión 4"
        },
        {
          title: "Construyendo nuestra vida con LEGO Serious Play",
          description: "Video preparatorio para la quinta sesión, explorando la metodología LSP para materializar ideas y construir estrategias de vida concretas a través del pensamiento con las manos.",
          videoUrl: "https://vimeo.com/1128316786/429fc7015f",
          session: "Sesión 5"
        }
      ]
    },
    gallery: {
      title: "Galería de Seminarios Anteriores",
      subtitle: "Momentos únicos de transformación",
      description: "Descubre la experiencia real de nuestros seminarios a través de imágenes de ediciones anteriores. Ve el ambiente, los participantes y los momentos de transformación que han vivido otros."
    },
    footer: {
      quote: "Transforma tu cerebro reactivo en una herramienta de creación consciente"
    }
  },
  en: {
    nav: {
      programa: "Program",
      ubicacion: "Location",
      webinars: "Webinars",
      galeria: "Gallery",
      paraQuien: "Who is it for",
      resultados: "Results",
      testimonios: "Testimonials",
      incluye: "What's Included",
      inversion: "Investment",
      inscribirse: "Register"
    },
    hero: {
      title: "International Energy Intelligence Conference",
      location: "Hotel Galería Plaza Reforma, Mexico City",
      date: "December 2025 - February 2026",
      subtitle: "Now enhanced with Artificial Intelligence tools to accelerate your transformation.",
      description: "A transformative 5-session experience to transform your reactive brain into a conscious creation tool.",
      ctaInscribirse: "Register Now",
      ctaVerPrograma: "View Program"
    },
    program: {
      title: "Detailed Program",
      subtitle: "Click on each session to explore the complete seminar content",
      disclaimer: "*Program subject to changes without prior notice",
      sessions: {
        session1: "SESSION 1",
        session2: "SESSION 2",
        session3: "SESSION 3",
        session4: "SESSION 4",
        session5: "SESSION 5"
      },
      topics: {
        session1: {
          title: "Neuroplasticity and Bilateral Reprocessing",
          date: "December 5, 2025 (In-Person/Online)",
          topics: [
            {
              title: "Welcome and Seminar Framework",
              description: "Complete program presentation, transformation objectives, and creation of a safe container. Introduction to scientific theoretical framework based on neuroplasticity, Polyvagal Theory, and bilateral reprocessing foundations."
            },
            {
              title: "The Reactive Brain: Neurobiology of the Survival System",
              description: "Deep understanding of how the nervous system processes emotional information. Exploration of the neurobiology of survival and adaptation systems, and how to transform automatic patterns into conscious decisions through applied neuroplasticity."
            },
            {
              title: "TRSB: Bilateral Somato-Cognitive Reprocessing Technique",
              description: "Complete bilateral reprocessing protocol based on scientific research. Learning fundamentals, the 4 stages of transformation (identification, processing, integration, consolidation), step-by-step protocol, and supervised practice with real cases."
            },
            {
              title: "Neurophysiological Visualization Techniques",
              description: "Methods to create optimal states through visualization and regulation of the autonomic nervous system. Learning neurophysiological priming techniques for high-performance states."
            },
            {
              title: "PONS: Neurocognitive Positioning System",
              description: "Complete system with 8 visual access positions for internal states. Learning spatial anchoring of internal resources, techniques for resource recovery when needed, and practical integration in therapeutic and daily life contexts."
            },
          ]
        },
        session2: {
          title: "Holographic Bioenergetics and Context Engineering",
          date: "December 6, 2025 (In-Person/Online)",
          topics: [
            {
              title: "Holographic Bioenergetics: Energy Evaluation System",
              description: "Mastery of the 13 bioenergetic holograms system and its clinical correlation. Identification of the 20 visceral sensations as precise diagnostic indicators. Application of muscle testing protocol for bioenergetic evaluation and understanding the connection between physical symptoms and energy patterns."
            },
            {
              title: "Complete Tracking Protocol: From Symptom to Origin",
              description: "Systematic protocol including age regression to access formative experiences, root visceral sensation search, transgenerational tracking of family patterns and invisible loyalties, integration of levels (Present, Past, System), and live demonstration with real cases from volunteer participants."
            },
            {
              title: "Context Engineering: The Art of Strategic Questioning",
              description: "Mastery of the 4-Level Context Schema: Present Level (current patterns), Past Level (historical origins), Transgenerational Level (family patterns), Current System Level (dynamics that sustain the pattern). Learning to formulate high-quality strategic questions and guided tracking with real cases."
            },
            {
              title: "The 4 Bioenergetic Protocols: Differentiated Intervention",
              description: "Alpha Protocol for physical symptoms and bodily manifestations. Beta Protocol for emotional conflicts and affective blockages. Gamma Protocol for systemic dynamics and relationships. Delta Protocol for existential integration and purpose. Therapeutic decision algorithm to choose the appropriate protocol according to each case."
            },
            {
              title: "Context Bioenergetics: Methodological Fusion",
              description: "Integration of Bioenergetics and Context Engineering to design precision therapeutic interventions. Practical application of methodological fusion in complex cases and demonstration of how to combine both tools for profound results."
            },
            {
              title: "Special Surprise",
              description: "Introduction to a transformative tool that we will work with the next day. Preparation and context for session 3."
            },
          ]
        },
        session3: {
          title: "Integration and Sustainable Transformation",
          date: "December 7, 2025 (In-Person/Online)",
          topics: [
            {
              title: "The Power of Rituals",
              description: "Neurobiology of ritual, design of transformative morning ritual, and practice of personalized creation."
            },
            {
              title: "Deepening the Surprise",
              description: "Experiential work with the envelope tool, the 3 powerful questions, and public group commitment."
            },
            {
              title: "The 7 Exceptions Protocol",
              description: "For cases that don't respond to standard protocols: the 7 surgical questions and demonstration with a complex case."
            },
            {
              title: "The 3 Elements of Conscious Decision",
              description: "Mastery of Focus, Re-signification and Reframing, and Specific Action for daily transformation."
            },
            {
              title: "90-Day Integral Program",
              description: "Weekly follow-up structure, support community, and personalized plan."
            },
            {
              title: "Introduction to LSP Insight System",
              description: "Preparation for Session 4: LEGO® Serious Play® adapted for therapy."
            },
            {
              title: "AI Tools for Your Transformation",
              description: "Presentation of personalized intelligent assistants available 24/7."
            },
            {
              title: "Integral Synthesis and Inspiring Closing",
              description: "Complete map of the 6 methodologies, commitment circle, and certificate delivery."
            }
          ]
        },
        session4: {
          title: "LSP Insight System: From Symbol to Action",
          date: "January 25, 2026 (Online)",
          topics: [
            {
              title: "Preparation Webinar: Build Your Story",
              description: "How to transform your personal narrative into an empowerment tool."
            },
            {
              title: "Progress Review and Adjustments",
              description: "Evaluation of progress in the 90 days and personalized strategic adjustments."
            },
            {
              title: "Advanced Bioenergetics Protocols",
              description: "Deep practical application of the 4 Protocols (Alpha, Beta, Gamma, Delta) in complex cases."
            },
            {
              title: "Effective Action Methodology",
              description: "Connect understanding with implementation through protocols that ensure authentic commitment."
            },
            {
              title: "LSP Insight System: From Symbol to Action",
              description: "Discover LEGO® Serious Play® principles to materialize ideas and 'think with your hands'. Physical construction of conflicts and solutions."
            }
          ]
        },
        session5: {
          title: "Mastery and Future Projection",
          date: "February 22, 2026 (Online)",
          topics: [
            {
              title: "Preparation Webinar: Building Our Life with LEGO Serious Play",
              description: "LSP methodology to materialize concrete life strategies."
            },
            {
              title: "Discovery of Insights and Strategies with LSP",
              description: "Transform model discoveries into archetypes, clear strategies, and concrete action plan."
            },
            {
              title: "Advanced Integration of AI Tools",
              description: "Strategic use of AI as an assistant in your professional and personal practice."
            },
            {
              title: "Final Synthesis and Projection",
              description: "Complete integration of learnings, establishment of long-term commitments, and continuous development plan."
            },
          ]
        }
      }
    },
    whoIsItFor: {
      title: "Who is this Seminar for?",
      cards: [
        {
          title: "Health Professionals",
          description: "Therapists, coaches, and psychologists seeking cutting-edge tools to generate profound results."
        },
        {
          title: "Leaders and Facilitators",
          description: "Those who want to improve their impact and guide others through personal and professional transformation."
        },
        {
          title: "General Public",
          description: "Anyone interested in personal growth and discovering new tools for well-being."
        },
        {
          title: "Innovators and Pioneers",
          description: "Professionals seeking to integrate cutting-edge technologies like AI to enhance their skills and results."
        }
      ]
    },
    results: {
      title: "What You Will Achieve",
      cards: [
        {
          title: "In Your Professional Practice",
          benefits: [
            "More precise and deep diagnoses by identifying the bioenergetic root of symptoms.",
            "More effective and faster interventions for your patients or clients.",
            "Less professional burnout by working from a more systemic level.",
            "New tools to complement your current methodologies."
          ]
        },
        {
          title: "In Your Leadership and Projects",
          benefits: [
            "Unlocking creativity and innovation in your team with methodologies like LSP.",
            "More strategic decision-making aligned with project vision.",
            "Accelerate analysis and insight generation using AI tools as strategic assistants.",
            "Identification of blind spots and hidden opportunities in your projects."
          ]
        },
        {
          title: "In Your Personal Life",
          benefits: [
            "Greater mental clarity and ability to manage stress and anxiety.",
            "Deep understanding of your behavioral patterns and how to transform them.",
            "More authentic and conscious relationships by understanding systemic dynamics.",
            "A renewed sense of purpose and direction in your life."
          ]
        }
      ]
    },
    testimonials: {
      title: "Voices of Transformation",
      subtitle: "Over a decade and 12 seminars transforming lives. This is what our students say.",
      testimonials: [
        {
          quote: "This seminar was a before and after in my practice. Bioenergetic tools gave me a new dimension to understand and treat my patients.",
          name: "Laura Fernández",
          role: "Psychotherapist"
        },
        {
          quote: "As a manager, the LSP methodology, now combined with AI, completely changed how we approach strategy. I learned to unlock my team's creativity at a level I didn't believe possible.",
          name: "Carlos Mendoza",
          role: "Project Manager"
        },
        {
          quote: "I went with an open mind and came out with a life plan. Understanding my reactive patterns and how to change them was the greatest gift I've given myself.",
          name: "Sofía Ramírez",
          role: "Student, 12th Edition"
        }
      ]
    },
    includes: {
      title: "What's Included in the Seminar?",
      subtitle: "Everything you need for your energy transformation is included",
      items: [
        {
          icon: "🎯",
          title: "3 Days In-Person or Online",
          description: "December 5-7, 2025 live"
        },
        {
          icon: "🌐",
          title: "2 Online Follow-up Sessions",
          description: "January and February 2026"
        },
        {
          icon: "📖",
          title: "Complete Professional Manuals",
          description: "TRSB Manual, Context Bioenergetics, Context Engineering, 4 Protocols, 7 Exceptions Protocol, Ritual Design, 90-Day Program, LSP Insight System"
        },
        {
          icon: "🎥",
          title: "Recordings of All 5 Sessions",
          description: "FREE access to all recordings"
        },
        {
          icon: "👥",
          title: "Private Support Community",
          description: "Continuous support network"
        },
        {
          icon: "📅",
          title: "12 Weekly Group Sessions",
          description: "Continuous follow-up for 90 days post-seminar"
        },
        {
          icon: "🤖",
          title: "5 Personalized AI Apps",
          description: "1. Context Engineering Assistant, 2. Miracle Question Generator, 3. Morning Ritual Designer, 4. 3 Elements Decision Coach, 5. 90-Day Follow-up Companion"
        },
        {
          icon: "🏆",
          title: "Professional Certification",
          description: "Official participation certificate"
        },
        {
          icon: "💬",
          title: "Continuous Support",
          description: "Support throughout the entire process"
        }
      ]
    },
    investment: {
      title: "Investment in Your Transformation",
      subtitle: "EARLY BIRD: $8,000 MXN ~~$9,500 MXN~~ - FREE access to recordings",
      earlyBird: "Early Bird Price",
      regular: "Regular Price",
      earlyBirdPrice: "$8,000 MXN",
      regularPrice: "$9,500 MXN",
      reservationInfo: "Reserve your spot with $3,000 MXN and pay the rest one week before the event",
      validUntil: "Valid until October 16, 2025",
      includes: "Prices for both In-Person and Online modalities. Includes FREE access to recordings of all 5 sessions.",
      ctaWhatsApp: "Register via WhatsApp"
    },
    webinars: {
      title: "Introductory Webinars",
      subtitle: "Preparation videos for each session",
      description: "Access the introductory videos for each session to prepare yourself and get the most out of the seminar.",
      videos: [
        {
          title: "From Reactive to Creative Brain",
          description: "Introductory video that establishes the conceptual foundations and context of the energy transformation program.",
          videoUrl: "https://vimeo.com/1122501757/9d6c991bc4",
          session: "Session 1"
        },
        {
          title: "Neurophysiological Priming Train Your Brain for Optimal States",
          description: "Preparation video for the second session, delving deeper into energy transformation techniques.",
          videoUrl: "https://vimeo.com/1122509089/a1f5880cc0",
          session: "Session 2"
        },
        {
          title: "The Art of Questioning in Bioenergetic Therapy: Master Context Engineering and Design Healing",
          description: "Preparation video for the third session, exploring the art of formulating deep questions in bioenergetic therapy and how Context Engineering transforms professional practice.",
          videoUrl: "https://vimeo.com/1122510598/a3a96d10d9",
          session: "Session 3"
        },
        {
          title: "Build Your Story: The Method That Turns Your Story Into Power",
          description: "Preparation video for the fourth session, discovering how to transform your personal narrative into an empowerment tool and consolidate learning.",
          videoUrl: "https://vimeo.com/1128316658/533a84ac61",
          session: "Session 4"
        },
        {
          title: "Building Our Life with LEGO Serious Play",
          description: "Preparation video for the fifth session, exploring the LSP methodology to materialize ideas and build concrete life strategies through thinking with your hands.",
          videoUrl: "https://vimeo.com/1128316786/429fc7015f",
          session: "Session 5"
        }
      ]
    },
    gallery: {
      title: "Previous Seminars Gallery",
      subtitle: "Unique moments of transformation",
      description: "Discover the real experience of our seminars through images from previous editions. See the atmosphere, participants and transformation moments that others have experienced."
    },
    footer: {
      quote: "Transform your reactive brain into a conscious creation tool"
    }
  }
};
