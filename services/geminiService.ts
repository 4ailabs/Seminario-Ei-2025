// Gemini AI Service for Chatbot
export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface GeminiResponse {
  text: string;
  success: boolean;
  error?: string;
}

class GeminiService {
  private apiKey: string;
  private baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

  constructor() {
    // Get API key from environment variables (for Vercel deployment)
    this.apiKey = import.meta.env.VITE_GEMINI_API_KEY || 'YOUR_GEMINI_API_KEY';
  }

  private getSystemPrompt(language: 'es' | 'en'): string {
    const prompts = {
      es: `Eres un asistente virtual especializado en el Seminario Internacional de Inteligencia Energética. 
      
      INFORMACIÓN DEL SEMINARIO:
      - Fecha: 5-7 de Diciembre 2025
      - Ubicación: Hotel Reef, Playa del Carmen
      - Duración: 3 días de inmersión profunda
      - Modalidades: Presencial y Online
      - Precio Early Bird: $7,000 MXN (válido hasta 10 de Noviembre 2025)
      - Precio Regular: $8,500 MXN
      
      INCLUYE:
      - Materiales y manuales completos
      - Protocolos de transformación
      - Certificación oficial
      - Acceso a app oficial
      - Extensiones 2026
      
      OBJETIVO: Transformar el cerebro reactivo en una herramienta de creación consciente usando herramientas de Inteligencia Artificial.
      
      Responde de manera amigable, profesional y concisa. Si no tienes información específica, sugiere contactar vía WhatsApp al +52 557 907 6626.`,
      
      en: `You are a virtual assistant specialized in the International Energy Intelligence Conference.
      
      SEMINAR INFORMATION:
      - Date: December 5-7, 2025
      - Location: Hotel Reef, Playa del Carmen
      - Duration: 3 days of deep immersion
      - Modalities: In-Person and Online
      - Early Bird Price: $7,000 MXN (valid until November 10, 2025)
      - Regular Price: $8,500 MXN
      
      INCLUDES:
      - Complete materials and manuals
      - Transformation protocols
      - Official certification
      - Official app access
      - 2026 extensions
      
      OBJECTIVE: Transform the reactive brain into a conscious creation tool using Artificial Intelligence tools.
      
      Respond in a friendly, professional, and concise manner. If you don't have specific information, suggest contacting via WhatsApp at +52 557 907 6626.`
    };
    
    return prompts[language];
  }

  async sendMessage(message: string, language: 'es' | 'en' = 'es'): Promise<GeminiResponse> {
    try {
      if (!this.apiKey || this.apiKey === 'YOUR_GEMINI_API_KEY') {
        return {
          text: language === 'es' 
            ? 'El chatbot no está configurado. Por favor contacta directamente vía WhatsApp al +52 557 907 6626 para más información.'
            : 'Chatbot is not configured. Please contact directly via WhatsApp at +52 557 907 6626 for more information.',
          success: false,
          error: 'API key not configured'
        };
      }

      const systemPrompt = this.getSystemPrompt(language);
      
      const requestBody = {
        contents: [{
          parts: [{
            text: `${systemPrompt}\n\nPregunta del usuario: ${message}`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      };

      const response = await fetch(`${this.baseUrl}?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        const text = data.candidates[0].content.parts[0].text;
        return {
          text: text.trim(),
          success: true
        };
      } else {
        throw new Error('Invalid response format');
      }

    } catch (error) {
      console.error('Gemini API Error:', error);
      return {
        text: language === 'es' 
          ? 'Lo siento, hay un problema técnico. Por favor contacta directamente vía WhatsApp al +52 557 907 6626 para más información.'
          : 'Sorry, there is a technical issue. Please contact directly via WhatsApp at +52 557 907 6626 for more information.',
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // Mock response for development/testing
  async sendMessageMock(message: string, language: 'es' | 'en' = 'es'): Promise<GeminiResponse> {
    const responses = {
      es: {
        'precio': 'El precio Early Bird es de $7,000 MXN (válido hasta el 10 de noviembre 2025) y el precio regular es de $8,500 MXN. Incluye materiales, manuales, protocolos, certificación, acceso a la app oficial y extensiones 2026.',
        'fecha': 'El seminario se realizará del 5 al 7 de diciembre de 2025 en el Hotel Reef, Playa del Carmen.',
        'ubicacion': 'El evento se llevará a cabo en el Hotel Reef, ubicado en Playa del Carmen.',
        'modalidad': 'El seminario está disponible en modalidad presencial y online.',
        'incluye': 'El seminario incluye: materiales completos, manuales detallados, protocolos de transformación, certificación oficial, acceso a la app oficial con recursos digitales y extensiones 2026.',
        'default': 'Gracias por tu interés en el Seminario Internacional de Inteligencia Energética. ¿Te gustaría saber más sobre precios, fechas, ubicación o qué incluye el seminario? También puedes contactarnos directamente vía WhatsApp al +52 557 907 6626.'
      },
      en: {
        'price': 'The Early Bird price is $7,000 MXN (valid until November 10, 2025) and the regular price is $8,500 MXN. It includes materials, manuals, protocols, certification, official app access, and 2026 extensions.',
        'date': 'The seminar will take place from December 5-7, 2025 at Hotel Reef, Playa del Carmen.',
        'location': 'The event will be held at Hotel Reef, located in Playa del Carmen.',
        'modality': 'The seminar is available in both in-person and online modalities.',
        'includes': 'The seminar includes: complete materials, detailed manuals, transformation protocols, official certification, official app access with digital resources, and 2026 extensions.',
        'default': 'Thank you for your interest in the International Energy Intelligence Conference. Would you like to know more about prices, dates, location, or what the seminar includes? You can also contact us directly via WhatsApp at +52 557 907 6626.'
      }
    };

    const langResponses = responses[language];
    const lowerMessage = message.toLowerCase();
    
    // Simple keyword matching
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

export const geminiService = new GeminiService();
