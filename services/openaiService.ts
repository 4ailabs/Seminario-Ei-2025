// OpenAI Service for Chatbot
export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface OpenAIResponse {
  text: string;
  success: boolean;
  error?: string;
}

class OpenAIService {
  private apiKey: string;
  private baseUrl = 'https://api.openai.com/v1/chat/completions';

  constructor() {
    // Get API key from environment variables (for Vercel deployment)
    this.apiKey = import.meta.env.VITE_OPENAI_API_KEY || 'YOUR_OPENAI_API_KEY';
  }

  private getSystemPrompt(language: 'es' | 'en'): string {
    const prompts = {
      es: `Eres un asistente virtual especializado en el Seminario Internacional de Inteligencia Energética. 
      
      🎯 WEBINAR GRATUITO - "Priming Neurofisiológico - Entrena tu Cerebro para Estados Óptimos"
      📅 Ya transmitido - Disponible para ver 24/7
      🔗 Ver webinar: https://tu-dominio.com/webinar-2
      💬 Info del seminario: WhatsApp +52 557 907 6626
      
      INFORMACIÓN DEL SEMINARIO:
      - Fechas: Diciembre 2025 - Febrero 2026 (5 sesiones)
      - Ubicación: Ciudad de México, México (Sesiones 1-3) / Online (Sesiones 4-5)
      - Duración: 5 sesiones de transformación profunda
      - Modalidades: Presencial y Online
      - Precio Early Bird: $8,000 MXN (válido hasta 16 de Octubre 2025)
      - Precio Regular: $9,500 MXN
      
      QUÉ INCLUYE:
      - Materiales y manuales completos
      - Protocolos de transformación
      - Certificación oficial
      - Acceso a app oficial
      - Extensiones 2026
      
      PROGRAMA DETALLADO:
      
      SESIÓN 1 - 5 de Diciembre: "Neuroplasticidad, IA y Sistemas de Inteligencia Estratégica"
      - El cerebro reactivo: supervivencia vs. felicidad
      - Priming neurofisiológico: entrenamiento de estados óptimos
      - Inteligencia Aumentada: IA para el Crecimiento
      - Workshop 1: Priming Neurofisiológico
      - Workshop 2: Estado de Enfoque y Recursos
      
      SESIÓN 2 - 6 de Diciembre: "Bioenergética y Context Engineering Aplicado"
      - Context Engineering y Esquema de Contexto
      - Rastreo guiado con Esquema de Contexto
      - Del síntoma al escenario energético
      - Workshop: Context Engineering Bioenergético
      
      SESIÓN 3 - 7 de Diciembre: "Sistemas de Decisión Consciente - Experiencia Vivencial"
      - Los Tres Elementos de Decisión Consciente
      - Maestría del Enfoque Consciente
      - Resignificación y Reencuadre Consciente
      - Síntesis de Transformación Integral y Certificación
      
      SESIÓN 4 - 25 de Enero 2026 (Online): "Consolidación y Profundización"
      - Revisión de Progreso y Ajustes
      - Protocolos Avanzados de Bioenergética
      - Metodología de Acción Efectiva
      - LSP Insight System: del símbolo a la acción
      
      SESIÓN 5 - 22 de Febrero 2026 (Online): "Maestría y Proyección Futura"
      - Descubrimiento de insights y estrategias con LSP
      - Integración de Herramientas de IA
      - Síntesis Final y Proyección
      
      PARA QUIÉN ES:
      - Profesionales de la Salud (terapeutas, coaches, psicólogos)
      - Líderes y Facilitadores
      - Público en General interesado en crecimiento personal
      - Innovadores y Pioneros que buscan integrar IA
      
      RESULTADOS QUE LOGRARÁS:
      En tu Práctica Profesional: Diagnósticos más precisos, intervenciones más efectivas, menor desgaste profesional, nuevas herramientas metodológicas.
      En tu Liderazgo: Desbloqueo de creatividad con LSP, decisiones más estratégicas, uso de IA como asistente, identificación de oportunidades.
      En tu Vida Personal: Mayor claridad mental, comprensión de patrones, relaciones más auténticas, sentido renovado de propósito.
      
      TESTIMONIOS:
      "Este seminario fue un antes y un después en mi práctica. Las herramientas de bioenergética me dieron una nueva dimensión para entender y tratar a mis pacientes." - Laura Fernández, Psicoterapeuta
      "Como gerente, la metodología de LSP, ahora combinada con IA, cambió por completo cómo abordamos la estrategia." - Carlos Mendoza, Gerente de Proyectos
      "Fui con la mente abierta y salí con un plan de vida. Entender mis patrones reactivos y cómo cambiarlos fue el regalo más grande que me he dado." - Sofía Ramírez, Alumna 12ª Edición
      
      OBJETIVO: Transformar el cerebro reactivo en una herramienta de creación consciente usando herramientas de Inteligencia Artificial.
      
      Responde de manera amigable, profesional y detallada. Si no tienes información específica, sugiere contactar vía WhatsApp al +52 557 907 6626.`,
      
      en: `You are a virtual assistant specialized in the International Energy Intelligence Conference.
      
      🎯 FREE WEBINAR - "Neurophysiological Priming - Train Your Brain for Optimal States"
      📅 Already aired - Available to watch 24/7
      🔗 Watch webinar: https://tu-dominio.com/webinar-2
      💬 Seminar info: WhatsApp +52 557 907 6626
      
      BASIC SEMINAR INFORMATION:
      - Dates: December 2025 - February 2026 (5 sessions)
      - Location: Mexico City, Mexico (Sessions 1-3) / Online (Sessions 4-5)
      - Duration: 5 sessions of deep transformation
      - Modalities: In-Person and Online
      - Early Bird Price: $8,000 MXN (valid until October 16, 2025)
      - Regular Price: $9,500 MXN
      
      WHAT'S INCLUDED:
      - Complete materials and manuals
      - Transformation protocols
      - Official certification
      - Official app access
      - 2026 extensions
      
      DETAILED PROGRAM:
      
      SESSION 1 - December 5: "Neuroplasticity, AI and Strategic Intelligence Systems"
      - The reactive brain: survival vs. happiness
      - Neurophysiological priming: optimal state training
      - Augmented Intelligence: AI for Growth
      - Workshop 1: Neurophysiological Priming
      - Workshop 2: Focus State and Resources
      
      SESSION 2 - December 6: "Bioenergetics and Applied Context Engineering"
      - Context Engineering and Context Schema
      - Guided tracking with Context Schema
      - From symptom to energetic scenario
      - Workshop: Bioenergetic Context Engineering
      
      SESSION 3 - December 7: "Conscious Decision Systems - Lived Experience"
      - The Three Elements of Conscious Decision
      - Mastery of Conscious Focus
      - Conscious Reframing and Re-signification
      - Integral Transformation Synthesis and Certification
      
      SESSION 4 - January 25, 2026 (Online): "Consolidation and Deepening"
      - Progress Review and Adjustments
      - Advanced Bioenergetics Protocols
      - Effective Action Methodology
      - LSP Insight System: from symbol to action
      
      SESSION 5 - February 22, 2026 (Online): "Mastery and Future Projection"
      - Insight and strategy discovery with LSP
      - Integration of AI Tools
      - Final Synthesis and Projection
      
      WHO IS IT FOR:
      - Health Professionals (therapists, coaches, psychologists)
      - Leaders and Facilitators
      - General Public interested in personal growth
      - Innovators and Pioneers seeking to integrate AI
      
      RESULTS YOU'LL ACHIEVE:
      In your Professional Practice: More precise diagnostics, more effective interventions, less professional burnout, new methodological tools.
      In your Leadership: Unlock creativity with LSP, more strategic decisions, use AI as assistant, identify opportunities.
      In your Personal Life: Greater mental clarity, understanding of patterns, more authentic relationships, renewed sense of purpose.
      
      TESTIMONIALS:
      "This seminar was a before and after in my practice. Bioenergetic tools gave me a new dimension to understand and treat my patients." - Laura Fernández, Psychotherapist
      "As a manager, the LSP methodology, now combined with AI, completely changed how we approach strategy." - Carlos Mendoza, Project Manager
      "I went with an open mind and came out with a life plan. Understanding my reactive patterns and how to change them was the greatest gift I've given myself." - Sofía Ramírez, 12th Edition Student
      
      OBJECTIVE: Transform the reactive brain into a conscious creation tool using Artificial Intelligence tools.
      
      Respond in a friendly, professional, and detailed manner. If you don't have specific information, suggest contacting via WhatsApp at +52 557 907 6626.`
    };
    
    return prompts[language];
  }

  async sendMessage(message: string, language: 'es' | 'en' = 'es'): Promise<OpenAIResponse> {
    try {
      // En desarrollo local, usar respuestas mock
      if (import.meta.env.DEV || !this.apiKey || this.apiKey === 'YOUR_OPENAI_API_KEY') {
        console.log('Using mock responses for development');
        return await this.sendMessageMock(message, language);
      }

      // Solo usar OpenAI API en producción (Vercel)
      const systemPrompt = this.getSystemPrompt(language);
      
      const requestBody = {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 1024,
        temperature: 0.7,
        top_p: 0.95,
        frequency_penalty: 0,
        presence_penalty: 0
      };

      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('OpenAI API Error:', response.status, errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.choices && data.choices[0] && data.choices[0].message) {
        const text = data.choices[0].message.content;
        return {
          text: text.trim(),
          success: true
        };
      } else {
        throw new Error('Invalid response format');
      }

    } catch (error) {
      console.error('OpenAI API Error:', error);
      // En caso de error, usar respuestas mock como fallback
      return await this.sendMessageMock(message, language);
    }
  }

  // Mock response for development/testing
  async sendMessageMock(message: string, language: 'es' | 'en' = 'es'): Promise<OpenAIResponse> {
    const responses = {
      es: {
        'precio': 'El precio Early Bird es de $8,000 MXN (válido hasta el 16 de octubre 2025) y el precio regular es de $9,500 MXN. Incluye materiales, manuales, protocolos, certificación, acceso a la app oficial y extensiones 2026.',
        'fecha': 'El seminario se realizará en 5 sesiones: 5-7 de diciembre de 2025 (presencial en Ciudad de México), 25 de enero y 22 de febrero de 2026 (online).',
        'ubicacion': 'Las primeras 3 sesiones se llevarán a cabo en Ciudad de México, México. Las sesiones 4 y 5 serán online.',
        'modalidad': 'El seminario está disponible en modalidad presencial y online.',
        'incluye': 'El seminario incluye: materiales completos, manuales detallados, protocolos de transformación, certificación oficial, acceso a la app oficial con recursos digitales y extensiones 2026.',
        'webinar': '¡Perfecto! Te invito a ver nuestro webinar gratuito "Priming Neurofisiológico - Entrena tu Cerebro para Estados Óptimos". Es una técnica revolucionaria que está transformando el rendimiento de cientos de profesionales. 🔗 Ver gratis: https://tu-dominio.com/webinar-2 o contacta vía WhatsApp al +52 557 907 6626 para más información del seminario completo.',
        'default': 'Gracias por tu interés en el Seminario Internacional de Inteligencia Energética. ¿Te gustaría saber más sobre precios, fechas, ubicación, nuestro webinar destacado del 6 de diciembre, o qué incluye el seminario? También puedes contactarnos directamente vía WhatsApp al +52 557 907 6626.'
      },
      en: {
        'price': 'The Early Bird price is $8,000 MXN (valid until October 16, 2025) and the regular price is $9,500 MXN. It includes materials, manuals, protocols, certification, official app access, and 2026 extensions.',
        'date': 'The seminar will take place in 5 sessions: December 5-7, 2025 (in-person in Mexico City), January 25 and February 22, 2026 (online).',
        'location': 'The first 3 sessions will be held in Mexico City, Mexico. Sessions 4 and 5 will be online.',
        'modality': 'The seminar is available in both in-person and online modalities.',
        'includes': 'The seminar includes: complete materials, detailed manuals, transformation protocols, official certification, official app access with digital resources, and 2026 extensions.',
        'webinar': 'Perfect! I invite you to watch our free webinar "Neurophysiological Priming - Train Your Brain for Optimal States". It\'s a revolutionary technique that\'s transforming the performance of hundreds of professionals. 🔗 Watch free: https://tu-dominio.com/webinar-2 or contact via WhatsApp at +52 557 907 6626 for more information about the complete seminar.',
        'default': 'Thank you for your interest in the International Energy Intelligence Conference. Would you like to know more about prices, dates, location, our featured webinar on December 6th, or what the seminar includes? You can also contact us directly via WhatsApp at +52 557 907 6626.'
      }
    };

    const langResponses = responses[language];
    const lowerMessage = message.toLowerCase();
    
    // Simple keyword matching
    if (lowerMessage.includes('webinar') || lowerMessage.includes('priming') || lowerMessage.includes('neurofisiológico') || lowerMessage.includes('cerebro') || lowerMessage.includes('brain')) {
      return { text: langResponses['webinar'], success: true };
    }
    if (lowerMessage.includes('precio') || lowerMessage.includes('price') || lowerMessage.includes('costo') || lowerMessage.includes('cost')) {
      return { text: langResponses['precio'] || langResponses['price'], success: true };
    }
    if (lowerMessage.includes('fecha') || lowerMessage.includes('date') || lowerMessage.includes('cuando') || lowerMessage.includes('when')) {
      return { text: langResponses['fecha'] || langResponses['date'], success: true };
    }
    if (lowerMessage.includes('ubicacion') || lowerMessage.includes('location') || lowerMessage.includes('donde') || lowerMessage.includes('where')) {
      return { text: langResponses['ubicacion'] || langResponses['location'], success: true };
    }
    if (lowerMessage.includes('modalidad') || lowerMessage.includes('modality') || lowerMessage.includes('online') || lowerMessage.includes('presencial')) {
      return { text: langResponses['modalidad'] || langResponses['modality'], success: true };
    }
    if (lowerMessage.includes('incluye') || lowerMessage.includes('includes') || lowerMessage.includes('que incluye') || lowerMessage.includes('what includes')) {
      return { text: langResponses['incluye'] || langResponses['includes'], success: true };
    }
    
    return { text: langResponses['default'], success: true };
  }
}

export const openaiService = new OpenAIService();
