export interface Translations {
  // Navigation
  nav: {
    programa: string;
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
    days: {
      friday: string;
      saturday: string;
      sunday: string;
    };
    topics: {
      day1: {
        title: string;
        topics: Array<{ title: string; description: string }>;
      };
      day2: {
        title: string;
        topics: Array<{ title: string; description: string }>;
      };
      day3: {
        title: string;
        topics: Array<{ title: string; description: string }>;
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
    validUntil: string;
    includes: string;
    ctaWhatsApp: string;
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
      paraQuien: "Para Quién",
      resultados: "Resultados",
      testimonios: "Testimonios",
      incluye: "¿Qué Incluye?",
      inversion: "Inversión",
      inscribirse: "Inscribirse"
    },
    hero: {
      title: "Seminario Internacional de Inteligencia Energética",
      location: "Ciudad de México, México",
      date: "5–7 Diciembre 2025",
      subtitle: "Ahora potenciado con herramientas de Inteligencia Artificial para acelerar tu transformación.",
      description: "Una inmersión profunda de 3 días para transformar tu cerebro reactivo en una herramienta de creación consciente.",
      ctaInscribirse: "Inscribirme Ahora",
      ctaVerPrograma: "Ver Programa"
    },
    program: {
      title: "Programa Detallado",
      subtitle: "Haz clic en cada día para explorar el contenido completo del seminario",
      days: {
        friday: "VIERNES",
        saturday: "SÁBADO",
        sunday: "DOMINGO"
      },
      topics: {
        day1: {
          title: "Neuroplasticidad, IA y Sistemas de Inteligencia Estratégica",
          topics: [
            {
              title: "El cerebro reactivo: supervivencia vs. felicidad",
              description: "Explora la evolución del cerebro, sus bases neurobiológicas y cómo pasar del piloto automático al control consciente."
            },
            {
              title: "Priming neurofisiológico: entrenamiento de estados óptimos",
              description: "Aprende a regular tu sistema nervioso autónomo a través de la coherencia cardíaca (HRV) y técnicas de visualización."
            },
            {
              title: "Inteligencia Aumentada: IA para el Crecimiento",
              description: "Utiliza modelos de IA como asistente para profundizar en los conceptos, generar nuevas perspectivas y personalizar tu aprendizaje."
            },
            {
              title: "LSP Insight System: del símbolo a la acción",
              description: "Descubre los principios de LEGO® Serious Play® para materializar ideas y 'pensar con las manos'."
            },
            {
              title: "Descubrimiento de insights y estrategias con LSP",
              description: "Transforma los descubrimientos de los modelos en arquetipos, estrategias claras y un plan de acción concreto."
            }
          ]
        },
        day2: {
          title: "Bioenergética y Context Engineering Aplicado",
          topics: [
            {
              title: "Context Engineering y Esquema de Contexto",
              description: "Domina el arte de formular preguntas de alta calidad para pasar de un modelo reactivo a uno estructurado."
            },
            {
              title: "Rastreo guiado con Esquema de Contexto",
              description: "Aplica un marco metodológico para explorar los niveles Presente, Pasado y Sistema que sostienen tus patrones actuales."
            },
            {
              title: "Del síntoma al escenario energético",
              description: "Aprende a identificar la sensación raíz corporal y a comprender la dinámica cuerpo-emoción-creencia."
            },
            {
              title: "Los cuatro protocolos principales (Alpha, Beta, Gamma, Delta)",
              description: "Integra protocolos específicos para abordar síntomas físicos, conflictos emocionales y dinámicas del sistema."
            },
          ]
        },
        day3: {
          title: "Sistemas de Decisión Consciente - Experiencia Vivencial",
          topics: [
            {
              title: "Los Tres Elementos de Decisión Consciente",
              description: "Aprende el marco de transformación personal basado en el enfoque, el significado y la acción específica."
            },
            {
              title: "Maestría del Enfoque Consciente",
              description: "Entrena tu atención y utiliza preguntas transformadoras para cultivar estados internos óptimos."
            },
            {
              title: "Resignificación y Reencuadre Consciente",
              description: "Desarrolla la habilidad de asignar nuevos significados y reencuadrar limitaciones para potenciar tu vida."
            },
            {
              title: "Metodología de Acción Efectiva",
              description: "Conecta la comprensión con la implementación a través de protocolos que aseguran un compromiso auténtico."
            },
            {
              title: "Síntesis de Transformación Integral y Certificación",
              description: "Integra los aprendizajes de los 3 días, establece compromisos personalizados y recibe tu certificación."
            }
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
          icon: "📚",
          title: "Materiales",
          description: "Guías completas y recursos impresos"
        },
        {
          icon: "📖",
          title: "Manuales",
          description: "Documentación detallada de protocolos"
        },
        {
          icon: "⚡",
          title: "Protocolos",
          description: "Métodos probados de transformación"
        },
        {
          icon: "🏆",
          title: "Certificación",
          description: "Certificado oficial de participación"
        },
        {
          icon: "📱",
          title: "App Oficial",
          description: "Acceso a recursos y herramientas digitales"
        },
        {
          icon: "🔄",
          title: "Extensiones 2026",
          description: "Sesiones de seguimiento y consolidación"
        }
      ]
    },
    investment: {
      title: "Inversión en tu Transformación",
      subtitle: "La experiencia continúa con encuentros de seguimiento en 2026 para consolidar tu aprendizaje.",
      earlyBird: "Precio Early Bird",
      regular: "Precio Regular",
      earlyBirdPrice: "$7,000 MXN",
      regularPrice: "$8,500 MXN",
      validUntil: "Válido hasta el 10 de Noviembre de 2025",
      includes: "Precios para modalidad Presencial y Online.",
      ctaWhatsApp: "Inscríbete vía WhatsApp"
    },
    footer: {
      quote: "Transforma tu cerebro reactivo en una herramienta de creación consciente"
    }
  },
  en: {
    nav: {
      programa: "Program",
      paraQuien: "Who is it for",
      resultados: "Results",
      testimonios: "Testimonials",
      incluye: "What's Included",
      inversion: "Investment",
      inscribirse: "Register"
    },
    hero: {
      title: "International Energy Intelligence Conference",
      location: "Mexico City, Mexico",
      date: "December 5-7, 2025",
      subtitle: "Now enhanced with Artificial Intelligence tools to accelerate your transformation.",
      description: "A deep 3-day immersion to transform your reactive brain into a conscious creation tool.",
      ctaInscribirse: "Register Now",
      ctaVerPrograma: "View Program"
    },
    program: {
      title: "Detailed Program",
      subtitle: "Click on each day to explore the complete seminar content",
      days: {
        friday: "FRIDAY",
        saturday: "SATURDAY",
        sunday: "SUNDAY"
      },
      topics: {
        day1: {
          title: "Neuroplasticity, AI and Strategic Intelligence Systems",
          topics: [
            {
              title: "The reactive brain: survival vs. happiness",
              description: "Explore brain evolution, its neurobiological foundations, and how to move from autopilot to conscious control."
            },
            {
              title: "Neurophysiological priming: optimal state training",
              description: "Learn to regulate your autonomic nervous system through heart coherence (HRV) and visualization techniques."
            },
            {
              title: "Augmented Intelligence: AI for Growth",
              description: "Use AI models as assistants to deepen concepts, generate new perspectives, and personalize your learning."
            },
            {
              title: "LSP Insight System: from symbol to action",
              description: "Discover LEGO® Serious Play® principles to materialize ideas and 'think with your hands'."
            },
            {
              title: "Insight and strategy discovery with LSP",
              description: "Transform model discoveries into archetypes, clear strategies, and a concrete action plan."
            }
          ]
        },
        day2: {
          title: "Bioenergetics and Applied Context Engineering",
          topics: [
            {
              title: "Context Engineering and Context Schema",
              description: "Master the art of formulating high-quality questions to move from a reactive to a structured model."
            },
            {
              title: "Guided tracking with Context Schema",
              description: "Apply a methodological framework to explore Present, Past, and System levels that sustain your current patterns."
            },
            {
              title: "From symptom to energetic scenario",
              description: "Learn to identify root body sensations and understand body-emotion-belief dynamics."
            },
            {
              title: "The four main protocols (Alpha, Beta, Gamma, Delta)",
              description: "Integrate specific protocols to address physical symptoms, emotional conflicts, and system dynamics."
            },
          ]
        },
        day3: {
          title: "Conscious Decision Systems - Lived Experience",
          topics: [
            {
              title: "The Three Elements of Conscious Decision",
              description: "Learn the personal transformation framework based on focus, meaning, and specific action."
            },
            {
              title: "Mastery of Conscious Focus",
              description: "Train your attention and use transformative questions to cultivate optimal internal states."
            },
            {
              title: "Conscious Reframing and Re-signification",
              description: "Develop the ability to assign new meanings and reframe limitations to empower your life."
            },
            {
              title: "Effective Action Methodology",
              description: "Connect understanding with implementation through protocols that ensure authentic commitment."
            },
            {
              title: "Integral Transformation Synthesis and Certification",
              description: "Integrate learnings from the 3 days, establish personalized commitments, and receive your certification."
            }
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
          icon: "📚",
          title: "Materials",
          description: "Complete guides and printed resources"
        },
        {
          icon: "📖",
          title: "Manuals",
          description: "Detailed protocol documentation"
        },
        {
          icon: "⚡",
          title: "Protocols",
          description: "Proven transformation methods"
        },
        {
          icon: "🏆",
          title: "Certification",
          description: "Official participation certificate"
        },
        {
          icon: "📱",
          title: "Official App",
          description: "Access to digital resources and tools"
        },
        {
          icon: "🔄",
          title: "2026 Extensions",
          description: "Follow-up and consolidation sessions"
        }
      ]
    },
    investment: {
      title: "Investment in Your Transformation",
      subtitle: "The experience continues with follow-up meetings in 2026 to consolidate your learning.",
      earlyBird: "Early Bird Price",
      regular: "Regular Price",
      earlyBirdPrice: "$7,000 MXN",
      regularPrice: "$8,500 MXN",
      validUntil: "Valid until November 10, 2025",
      includes: "Prices for both In-Person and Online modalities.",
      ctaWhatsApp: "Register via WhatsApp"
    },
    footer: {
      quote: "Transform your reactive brain into a conscious creation tool"
    }
  }
};
